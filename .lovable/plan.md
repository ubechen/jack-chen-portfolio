

## 首頁 About 區塊標題與內文更新

### 變更內容（`src/pages/Index.tsx`）

#### 1. 標題更新（第 389 行）

「About」→「關於 Jack」

#### 2. 內文更新（第 413-414 行）

將單段文字替換為兩段：

```tsx
<p className="text-lg text-muted-foreground leading-relaxed mb-4">
  8+ 年 Product/UX 設計師，經驗涵蓋 B2B/B2B2C 產品。於緯創擔任創新筆電、服務型機器人、無人機、ESG 等專案核心設計角色，也參與智慧咖啡秤、醫療監測後台等從 0 到 1 的跨領域專案
</p>
<p className="text-lg text-muted-foreground leading-relaxed mb-8">
  擅長在高不確定性的前期階段把問題釐清、縮小選項，用研究推動跨部門共識，讓決策更有脈絡地前進，幫助團隊少走叉路。不只關注使用者體驗細節，更協助團隊做出有依據的決策、達成商業目標
</p>
```

### 修改檔案

| 檔案 | 內容 |
|------|------|
| `src/pages/Index.tsx` | 標題改為「關於 Jack」、內文替換為兩段新文案 |

### 測試重點

- `/` 首頁 About 區塊標題顯示「關於 Jack」
- 內文分為兩段，間距與排版正常
