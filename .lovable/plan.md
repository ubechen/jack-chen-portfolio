

## 大頭照 Tooltip 文案：10 句不重複輪播

### 變更內容

將目前 5 句隨機文案改為 10 句，並改用**順序輪播**邏輯，確保每次點擊都顯示不同的文字，依序循環。

### 10 句文案

1. 「哈囉 你發現我了！」
2. 「別戳我啦 😆」
3. 「再按一次試試？」
4. 「嘿嘿 你好奇心很重喔」
5. 「我是 Jack，很高興認識你！」
6. 「你已經按了好幾次了吧 😏」
7. 「這裡沒有彩蛋啦...才怪」
8. 「好啦好啦 我投降 🙌」
9. 「認真說，謝謝你來看我的作品集 ❤️」
10. 「最後一句了...還是再按按看？」

（歡迎調整任何一句！）

### 技術細節（`src/pages/Index.tsx`）

1. **擴充 `tooltipMessages` 陣列**為 10 句
2. **新增 `useRef` 計數器** `clickCountRef` 追蹤點擊次數
3. **改用順序取值**取代隨機：`tooltipMessages[clickCountRef.current % tooltipMessages.length]`，每次點擊 +1，保證不重複

```tsx
const clickCountRef = useRef(0);

const handlePortraitClick = () => {
  clickCountRef.current += 1;
  const msg = tooltipMessages[clickCountRef.current % tooltipMessages.length];
  setTooltipText(msg);
  // ...其餘不變
};
```

### 修改檔案

| 檔案 | 內容 |
|------|------|
| `src/pages/Index.tsx` | 擴充文案至 10 句、改用順序輪播邏輯 |

