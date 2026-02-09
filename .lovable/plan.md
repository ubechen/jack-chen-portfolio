

## 首頁 About 區塊圖片 Tooltip

### 變更內容

在首頁「關於 Jack」區塊的圓形大頭照上，加入滑鼠 hover 時顯示的 Tooltip，文字為「哈囉 你發現我了！」。

需要對桌面版和手機版的圖片都加上 Tooltip（手機版為點擊觸發）。

### 技術細節（`src/pages/Index.tsx`）

1. 引入 Tooltip 元件：
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
```

2. 將手機版圖片（約第 393-400 行）和桌面版圖片（約第 404-411 行）各自用 `<Tooltip>` + `<TooltipTrigger>` + `<TooltipContent>` 包裹，內容為「哈囉 你發現我了！」

### 修改檔案

| 檔案 | 內容 |
|------|------|
| `src/pages/Index.tsx` | 為兩處大頭照加上 Tooltip |

### 測試重點

- 桌面版滑鼠 hover 圓形圖片時出現 Tooltip
- 手機版點擊圖片時出現 Tooltip
- Tooltip 文字顯示「哈囉 你發現我了！」

