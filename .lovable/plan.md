

## 修改 Index V2 首頁 - 按鈕對齊與文案更新

### 變更概述

1. **Hero 按鈕對齊**：讓「精選案例」和「履歷表」兩個按鈕寬度一致、對齊
2. **About 區塊文案更新**：將兩段文字合併為一段完整敘述

---

### 變更詳情

#### 1. Hero 按鈕對齊（第 206-225 行、第 246-264 行）

**現行：**
- 兩個按鈕各自根據內容自動寬度
- 履歷表按鈕在 Link 內，可能導致寬度不一致

**修改後：**
- 為兩個按鈕加入相同的最小寬度 `min-w-[140px]`
- 讓 Link 元件使用 `w-full sm:w-auto` 確保對齊

```tsx
{/* 手機版 */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    size="lg"
    variant="hero"
    onClick={() => scrollToSection("#projects")}
    className="text-base font-medium min-w-[140px]"
  >
    <span className="relative z-10">精選案例</span>
  </Button>
  <Link to="/resume" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="heroOutline"
      className="text-base font-medium min-w-[140px] w-full"
    >
      <span className="relative z-10">履歷表</span>
    </Button>
  </Link>
</div>

{/* 桌面版 */}
<div className="flex flex-col sm:flex-row gap-4">
  <Button
    size="lg"
    variant="hero"
    onClick={() => scrollToSection("#projects")}
    className="text-base font-medium min-w-[140px]"
  >
    <span className="relative z-10">精選案例</span>
  </Button>
  <Link to="/resume">
    <Button
      size="lg"
      variant="heroOutline"
      className="text-base font-medium min-w-[140px]"
    >
      <span className="relative z-10">履歷表</span>
    </Button>
  </Link>
</div>
```

---

#### 2. About 區塊文案更新（第 404-408 行）

**現行（兩段分開）：**
```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  過去在科技製造業主要開發系統型和複雜產品，經常參與專案的早期階段，當需求很模糊、方向還沒定的時候
</p>
<p className="text-lg text-muted-foreground leading-relaxed mt-4 mb-8">
  我的角色通常不是衝最快的執行者，而是幫團隊少走叉路、避免做錯關鍵決定的人
</p>
```

**修改後（合併為一段）：**
```tsx
<p className="text-lg text-muted-foreground leading-relaxed mb-8">
  過去我在科技製造業擔任 Product / UX 設計師，主要開發系統型和複雜產品，經常參與專案的早期階段，當需求很模糊、方向還沒定的時候。我的角色通常不是衝最快的執行者，而是幫團隊少走叉路、避免做錯關鍵決定的人
</p>
```

---

### 修改檔案

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/pages/IndexV2.tsx` | 修改 | (1) Hero 按鈕加入 min-w 確保等寬對齊 (2) About 區塊文案合併與更新 |

---

### 測試重點

1. 前往 `/index-v2` 確認：
   - 「精選案例」和「履歷表」按鈕寬度一致
   - 手機版兩按鈕堆疊時寬度也一致
   - About 區塊文案已更新為新版本

