

## 專案內頁電腦版章節導覽按鈕位置錯位修正

### 一、問題分析

根據瀏覽器截圖觀察，桌面版快速導覽（DesktopQuickNav）存在以下問題：

1. **高亮條位置錯誤**：當前 active section 應該對應 "3. What we did"，但高亮條卻顯示在 "2. My Role" 的位置
2. **初始渲染時機問題**：`useLayoutEffect` 可能在 DOM 完全渲染前就計算位置
3. **`hasBeenVisible` 邏輯問題**：初次顯示時，高亮條可能還沒有正確計算初始位置

---

### 二、根本原因

在 `ProjectQuickNav.tsx` 第 38-51 行：

```tsx
useLayoutEffect(() => {
  if (listRef.current && hasBeenVisible) {
    const buttons = listRef.current.querySelectorAll('button');
    const activeIndex = sections.findIndex(s => s.id === activeSection);
    const activeButton = buttons[activeIndex] as HTMLElement;
    
    if (activeButton) {
      setHighlightStyle({
        top: activeButton.offsetTop,
        height: activeButton.offsetHeight
      });
    }
  }
}, [activeSection, sections, hasBeenVisible]);
```

問題出在：
1. `hasBeenVisible` 首次變成 `true` 時，下一次 `useLayoutEffect` 才會觸發高亮位置計算
2. 但 `activeSection` 可能已經在 `hasBeenVisible` 變更之前就已經確定了
3. 這導致初始狀態時，`highlightStyle` 保持 `{ top: 0, height: 0 }` 的預設值

---

### 三、解決方案

#### 方案：修正 useLayoutEffect 依賴與計算時機

1. 移除 `hasBeenVisible` 條件，改用 `isVisible` 確保每次顯示都重新計算
2. 增加 `requestAnimationFrame` 確保 DOM 完全渲染後才計算位置
3. 為避免初始閃爍，在計算完成前隱藏高亮條

---

### 四、修改內容

#### 檔案：`src/components/projects/ProjectQuickNav.tsx`

```tsx
// 修改 useLayoutEffect (約第 38-51 行)
useLayoutEffect(() => {
  if (!listRef.current || !isVisible) return;
  
  // Use requestAnimationFrame to ensure DOM is fully rendered
  const frame = requestAnimationFrame(() => {
    const buttons = listRef.current?.querySelectorAll('button');
    if (!buttons) return;
    
    const activeIndex = sections.findIndex(s => s.id === activeSection);
    const activeButton = buttons[activeIndex] as HTMLElement;
    
    if (activeButton) {
      setHighlightStyle({
        top: activeButton.offsetTop,
        height: activeButton.offsetHeight
      });
    }
  });
  
  return () => cancelAnimationFrame(frame);
}, [activeSection, sections, isVisible]);
```

同時，修改高亮條的渲染條件，確保只有在有有效尺寸時才顯示：

```tsx
{/* Dynamic highlight - uses actual button positions */}
{highlightStyle.height > 0 && (
  <div 
    className="absolute left-0 right-0 bg-primary/5 border-l-gradient transition-all duration-150 ease-out"
    style={{ 
      top: `${highlightStyle.top}px`,
      height: `${highlightStyle.height}px`
    }}
  />
)}
```

---

### 五、預期效果

| 修正前 | 修正後 |
|--------|--------|
| 高亮條位置與 active section 不對應 | 高亮條準確對齊當前 active 的按鈕 |
| 初始載入時可能顯示在錯誤位置 | 計算完成前不顯示高亮條 |
| 滾動時高亮更新可能延遲 | 使用 RAF 確保渲染同步 |

---

### 六、修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/components/projects/ProjectQuickNav.tsx` | 修正 DesktopQuickNav 的 useLayoutEffect 邏輯與高亮條渲染條件 |

