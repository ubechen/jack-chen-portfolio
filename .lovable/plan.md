

## 專案內頁電腦版章節導覽高亮條位置修正

### 一、問題根本原因

高亮條使用了 `border-l-gradient` 類別，而這個類別在 `src/index.css` 中定義時包含：

```css
.border-l-gradient {
  @apply relative;  /* ← 這就是問題！*/
  border-left-width: 0 !important;
}
```

由於 CSS 規則的層疊順序，**`@apply relative` 覆蓋了行內的 `absolute` 類別**，導致：
- 高亮條變成 `position: relative` 而非 `position: absolute`
- `position: relative` 的元素仍會佔據文檔流空間
- 高亮條把整個按鈕列表往下推擠

### 二、解決方案

有兩種修正方式：

**方案 A（推薦）：在高亮條上使用 `!important` 覆蓋 relative**

在 `ProjectQuickNav.tsx` 的高亮條加上 `style` 強制設定 `position: absolute`：

```tsx
<div 
  className="absolute left-0 right-0 bg-primary/5 border-l-gradient transition-all duration-150 ease-out"
  style={{ 
    position: 'absolute',  // 強制覆蓋 relative
    top: `${highlightStyle.top}px`,
    height: `${highlightStyle.height}px`
  }}
/>
```

**方案 B：修改 CSS 類別定義**

在 `src/index.css` 中，移除 `.border-l-gradient` 的 `@apply relative`，改為只在需要的元素上手動添加：

```css
.border-l-gradient {
  /* 移除 @apply relative; */
  border-left-width: 0 !important;
}
```

但這可能影響其他使用此類別的地方。

### 三、建議採用方案 A

因為：
- 不影響其他使用 `border-l-gradient` 的元素
- 只需修改 `ProjectQuickNav.tsx` 一個檔案
- 使用行內 style 可以確保優先級最高

### 四、修改內容

#### 檔案：`src/components/projects/ProjectQuickNav.tsx`

修改第 83-91 行的高亮條：

```tsx
{highlightStyle.height > 0 && (
  <div 
    className="absolute left-0 right-0 bg-primary/5 border-l-gradient transition-all duration-150 ease-out"
    style={{ 
      position: 'absolute',  // 新增：強制覆蓋 border-l-gradient 的 relative
      top: `${highlightStyle.top}px`,
      height: `${highlightStyle.height}px`
    }}
  />
)}
```

### 五、預期效果

| 修正前 | 修正後 |
|--------|--------|
| 高亮條佔據文檔流空間，把按鈕往下推 | 高亮條完全脫離文檔流，不影響按鈕位置 |
| 按鈕與高亮條位置錯開 | 高亮條精準對齊 active 按鈕 |

### 六、修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/components/projects/ProjectQuickNav.tsx` | 高亮條加上 `style={{ position: 'absolute' }}` 強制覆蓋 |

