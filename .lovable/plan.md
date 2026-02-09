

## 修正首頁 About 區塊：直接更新 Index.tsx

### 問題原因

之前的修改更新了 `src/components/AboutPreview.tsx`，但新正式版首頁 `src/pages/Index.tsx` 並未使用該元件。About 區塊內容直接內嵌在 `Index.tsx` 第 389-430 行。

### 變更內容（`src/pages/Index.tsx`）

#### 1. 標題更新（第 389 行）

「About」→「關於 Jack」

#### 2. 內文更新（第 413-414 行）

將現有單段文字替換為兩段：

```tsx
<p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
  8+ 年 Product/UX 設計師，經驗涵蓋 B2B/B2B2C 產品。於緯創擔任創新筆電、服務型機器人、無人機、ESG 等專案核心設計角色，也參與智慧咖啡秤、醫療監測後台等從 0 到 1 的跨領域專案
</p>
<p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
  擅長在高不確定性的前期階段把問題釐清、縮小選項，用研究推動跨部門共識，讓決策更有脈絡地前進，幫助團隊少走叉路。不只關注使用者體驗細節，更協助團隊做出有依據的決策、達成商業目標
</p>
```

### 修改檔案

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/pages/Index.tsx` | 修改第 389、413-414 行 | 標題改為「關於 Jack」、內文替換為兩段新文案 |

### 測試重點

- `/` 首頁 About 區塊標題顯示「關於 Jack」
- 內文分為兩段，間距與排版正常
