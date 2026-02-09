

## 首頁大頭照點擊互動：果凍彈跳 + 隨機趣味文字

### 互動設計

- 點擊圖片時觸發「果凍彈跳」動畫（壓扁 → 拉伸 → 回彈）
- 每次點擊隨機顯示不同 Tooltip 文字，增加驚喜感
- 動畫約 0.6 秒，不干擾頁面瀏覽

### 隨機文字池（可自行調整）

- 「哈囉 你發現我了！」（預設 hover）
- 「別戳我啦 😆」
- 「再按一次試試？」
- 「嘿嘿 你好奇心很重喔」
- 「我是 Jack，很高興認識你！」

### 技術細節（`src/pages/Index.tsx`）

#### 1. 新增 Tailwind keyframe 與 animation（`tailwind.config.ts`）

```ts
"jelly": {
  "0%": { transform: "scale(1)" },
  "30%": { transform: "scale(0.9, 1.1)" },
  "50%": { transform: "scale(1.1, 0.9)" },
  "70%": { transform: "scale(0.95, 1.05)" },
  "100%": { transform: "scale(1)" },
}
// animation:
"jelly": "jelly 0.6s ease"
```

#### 2. 修改 Index.tsx

- 新增 state：`isJiggling`（控制動畫 class）、`tooltipText`（當前顯示文字）
- 點擊圖片時：隨機選一句文字、觸發 jelly class、600ms 後移除 class
- 將 jelly animation class 條件加到手機版與桌面版圖片上

### 修改檔案

| 檔案 | 內容 |
|------|------|
| `tailwind.config.ts` | 新增 jelly keyframe 與 animation |
| `src/pages/Index.tsx` | 新增點擊事件、隨機文字邏輯、動畫 class 綁定 |

### 測試重點

- 點擊大頭照觸發果凍彈跳動畫
- 每次點擊 Tooltip 文字隨機切換
- 動畫結束後圖片回到原始狀態，不影響排版
- 手機版與桌面版皆正常運作

