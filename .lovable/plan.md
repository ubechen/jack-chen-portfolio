

## 藍色漸層色全站套用計畫

### 一、需要修改的項目總覽

| 項目 | 目前樣式 | 修改後樣式 | 漸層方向 |
|------|----------|------------|----------|
| 1. `--primary-end` 變數 | `240 80% 45%` | `#6a6ad6`（HSL 240 56% 63%） | — |
| 2. `hero` 按鈕 | 漸層 + brightness hover | 漸層 + 色塊滑入動畫 | 左到右 |
| 3. `heroOutline` 按鈕 hover | 純色 `bg-primary` | 漸層色塊滑入 | 左到右 |
| 4. Jack Chen hover | 純色 `hsl(var(--primary))` | 漸層色文字 | 左到右 |
| 5. Back to top 按鈕 | 純色 `bg-primary` | 漸層 + hover 維持原效果 | **上到下** |
| 6. Carousel 指示器 | 純色 `bg-primary` | 漸層 | 左到右 |
| 7. 內頁藍色左側線 | 純色 `border-l-primary` | 漸層 | **上到下** |
| 8. SVG 進度條 | 純色 stroke | 漸層 stroke | — |

---

### 二、涵蓋頁面

- `/`（首頁）
- `/about`
- `/resume`
- `/project/*`（4 個專案內頁）
- `/404`

由於 `hero`、`heroOutline` 按鈕已在這些頁面使用，且 CSS 變數與元件改動是全域的，全站自動套用。

---

### 三、各項目技術實作細節

#### 1. 修改 `--primary-end` 顏色（src/index.css）

```css
/* 現有 */
--primary-end: 240 80% 45%;

/* 改為（#6a6ad6 轉 HSL） */
--primary-end: 240 56% 63%;
```

同時修改 `:root` 與 `.dark` 區塊。

---

#### 2. `hero` 按鈕：恢復滑入動畫（src/components/ui/button.tsx）

將 `hover:brightness-110 hover:saturate-125` 改回 `before:` 動畫，並讓 hover 時的 `before:` 使用漸層：

```tsx
hero: "relative overflow-hidden bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-end))] text-primary-foreground before:content-[''] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[hsl(var(--primary-hover))] before:to-[hsl(var(--primary-end)/0.85)] before:transition-transform before:duration-300 before:ease-out hover:before:origin-left hover:before:scale-x-100 active:brightness-90"
```

---

#### 3. `heroOutline` 按鈕 hover 改漸層（src/components/ui/button.tsx）

將 `before:bg-primary` 改為漸層：

```tsx
heroOutline: "... before:bg-gradient-to-r before:from-[hsl(var(--primary))] before:to-[hsl(var(--primary-end))] ..."
```

---

#### 4. Jack Chen hover 改漸層（src/components/Navigation.tsx）

修改 span 的 backgroundImage，將中段的 `hsl(var(--primary))` 改為漸層兩色：

```tsx
backgroundImage: `linear-gradient(to right, 
  hsl(var(--foreground)) 33.33%, 
  hsl(var(--primary)) 33.33%, 
  hsl(var(--primary-end)) 66.66%, 
  hsl(var(--foreground)) 66.66%)`
```

---

#### 5. Back to top 按鈕改上到下漸層（src/components/ScrollToTopButton.tsx）

將中央按鈕：

```tsx
// 現有
<div className="... bg-primary group-hover:bg-primary/90 ...">

// 改為
<div className="... bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--primary-end))] group-hover:brightness-110 ...">
```

SVG 進度條維持純色（技術限制：CSS 漸層無法直接套用於 SVG stroke，需用 linearGradient defs，可選擇是否實作）。

---

#### 6. Carousel 指示器改漸層（src/components/HeroInteractive.tsx）

將 active 指示器：

```tsx
// 現有
selectedIndex === index ? "bg-primary w-6" : ...

// 改為
selectedIndex === index ? "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-end))] w-6" : ...
```

---

#### 7. 內頁藍色左側線改漸層（多個檔案）

`border-l-primary` 無法直接用漸層，需改為 `before:` 偽元素實作。

**方案：建立共用 utility class**

在 `src/index.css` 新增：

```css
@layer utilities {
  .border-l-gradient {
    @apply relative;
    border-left-width: 0 !important;
  }
  .border-l-gradient::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(
      to bottom,
      hsl(var(--primary)),
      hsl(var(--primary-end))
    );
    border-radius: 0 4px 4px 0;
  }
}
```

**套用位置：**

| 檔案 | 出現次數 |
|------|----------|
| `ESGBoardGameContent.tsx` | 10 處 |
| `DroneUXContent.tsx` | 多處 |
| `AMRRobotContent.tsx` | 多處 |
| `ProjectQuickNav.tsx` | 1 處（桌面版 active 狀態） |
| `KeyDecisions.tsx` | 1 處 |

將 `border-l-4 border-l-primary` 替換為 `border-l-gradient`。

---

### 四、修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/index.css` | 更新 `--primary-end`、新增 `.border-l-gradient` utility |
| `src/components/ui/button.tsx` | `hero` / `heroOutline` 漸層與動畫 |
| `src/components/Navigation.tsx` | Jack Chen hover 漸層 |
| `src/components/ScrollToTopButton.tsx` | 按鈕漸層（上到下） |
| `src/components/HeroInteractive.tsx` | Carousel 指示器漸層 |
| `src/components/projects/ESGBoardGameContent.tsx` | 藍線改 `border-l-gradient` |
| `src/components/projects/DroneUXContent.tsx` | 藍線改 `border-l-gradient` |
| `src/components/projects/AMRRobotContent.tsx` | 藍線改 `border-l-gradient` |
| `src/components/projects/ProjectQuickNav.tsx` | active 狀態藍線改漸層 |
| `src/components/KeyDecisions.tsx` | 決策卡片藍線改漸層 |

---

### 五、視覺預覽

```text
漸層色（左到右 / 上到下）
┌─────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  #0048ba ────────→ #6a6ad6  │
│  深藍           帶紫淺藍    │
└─────────────────────────────┘
```

---

### 六、Hover 效果保留原則

所有元件的 hover 動態效果（色塊滑入、scale、透明度變化）維持不變，只把純色改為漸層色。

