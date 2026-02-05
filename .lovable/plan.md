

## 優化 Index V2 首頁 - 方案 A 水平時間軸

### 變更概述

1. **「我是誰」區塊**：加入 About 標題 + How I Work 按鈕（維持與 V1 一致的樣式）
2. **「我帶來的價值」卡片**：為每個項目加入 list 圓點符號
3. **「我的經歷」**：改為水平時間軸風格，與「我帶來的價值」做出視覺區隔

---

### 變更詳情

#### 1. 「我是誰」區塊加入標題與按鈕

**現行 V2（第 375-400 行）：**
- 無區塊標題
- 無 How I Work 按鈕

**修改後：**
- 加入 `About` 標題（置中，與 V1 一致）
- 在文字內容下方加入 How I Work 按鈕

**按鈕規格（完全比照 V1 AboutPreview.tsx）：**

```tsx
<Button
  variant="heroOutline"
  size="lg"
  onClick={() => navigate("/about")}
  className="text-lg"
>
  <span className="relative z-10 flex items-center">
    How I Work
    <ArrowRight className="ml-2 h-5 w-5" />
  </span>
</Button>
```

---

#### 2. 「我帶來的價值」卡片加入 list 圓點符號

**現行（第 447-455 行）：**

```tsx
<li className="text-muted-foreground text-sm leading-relaxed">
  {item}
</li>
```

**修改後：**

```tsx
<li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
  <span className="text-primary mt-1 text-xs">●</span>
  <span>{item}</span>
</li>
```

---

#### 3. 「我的經歷」改為水平時間軸風格

**設計概念：**

```text
桌面版 (>=1024px)：

    ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
    │  8+ 年      │       │  研究轉化    │       │  概念走到    │
    │  系統產品   │       │  為影響力    │       │  市場        │
    │  經驗       │       │             │       │             │
    └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
           │                     │                     │
    ───────●─────────────────────●─────────────────────●───────
```

**手機版 (<1024px)：**
- 垂直時間軸，左側連接線，右側卡片內容

**程式碼結構：**

```tsx
{/* 桌面版水平時間軸 */}
<div className="hidden lg:block">
  <div className="grid grid-cols-3 gap-8 relative">
    {/* 連接線 */}
    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
    
    {experienceCards.map((card, index) => (
      <div key={index} className="relative">
        {/* 卡片內容 */}
        <div className="bg-card border rounded-xl p-6 relative z-10">
          <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
          <p className="text-muted-foreground whitespace-pre-line">
            {card.content}
          </p>
        </div>
        {/* 連接點 */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20" />
      </div>
    ))}
  </div>
  {/* 時間軸線 */}
  <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
</div>

{/* 手機版垂直時間軸 */}
<div className="lg:hidden relative pl-8">
  {/* 垂直連接線 */}
  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
  
  <div className="space-y-8">
    {experienceCards.map((card, index) => (
      <div key={index} className="relative">
        {/* 連接點 */}
        <div className="absolute -left-5 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
        {/* 卡片 */}
        <div className="bg-card border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
          <p className="text-muted-foreground whitespace-pre-line">
            {card.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
```

---

### 視覺對照

| 區塊 | 現行 V2 | 修改後 |
|------|---------|--------|
| 我是誰 | 無標題、無按鈕 | About 標題 + How I Work 按鈕 |
| 我的經歷 | 3 欄卡片 Grid | 水平/垂直時間軸 |
| 我帶來的價值 | 純文字 list | 加入圓點符號 list |

---

### RWD 時間軸設計

| 斷點 | 我的經歷呈現方式 |
|------|------------------|
| < 1024px (手機/平板) | 垂直時間軸（左側連接線 + 右側卡片） |
| >= 1024px (桌面) | 水平時間軸（上方卡片 + 下方連接線與圓點） |

---

### 修改檔案

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/pages/IndexV2.tsx` | 修改 | (1) 我是誰區塊加入 About 標題與 How I Work 按鈕 (2) 我的經歷改為水平時間軸 (3) 我帶來的價值 list 加入圓點符號 |

---

### 測試重點

1. 前往 `/index-v2` 確認：
   - About 標題與 How I Work 按鈕顯示正確
   - How I Work 按鈕樣式與 V1 一致（漸層邊框、hover 效果）
   - 時間軸桌面版水平呈現、手機版垂直呈現
   - 價值卡片 list 有圓點符號

