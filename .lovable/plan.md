

## 改善 Tooltip 出現時機與點擊停留

### 問題分析

目前使用 Radix Tooltip，預設行為是 hover 才顯示、有延遲，且點擊時不會停留。Radix Tooltip 設計上就是 hover-only，不適合點擊互動場景。

### 解決方案

改用 **手動控制 Tooltip 的 open 狀態**，搭配點擊事件讓 Tooltip 立即出現並停留一段時間（約 2 秒後自動消失）。

### 技術細節

#### 1. 修改 `src/pages/Index.tsx`

- 新增 `showTooltip` state 控制 Tooltip 開關
- `TooltipProvider` 加上 `delayDuration={200}` 減少 hover 延遲
- `Tooltip` 加上 `open={showTooltip}` 和 `onOpenChange` 控制開關
- 點擊圖片時：設 `showTooltip = true`，2 秒後自動關閉
- hover 仍然可以觸發顯示（透過 `onOpenChange`）

```tsx
const [showTooltip, setShowTooltip] = useState(false);

const handlePortraitClick = () => {
  const randomMsg = tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
  setTooltipText(randomMsg);
  setIsJiggling(true);
  setShowTooltip(true);
  setTimeout(() => setIsJiggling(false), 600);
  setTimeout(() => setShowTooltip(false), 2000);
};
```

- 兩處 `<TooltipProvider>` 加上 `delayDuration={200}`
- 兩處 `<Tooltip>` 改為 `<Tooltip open={showTooltip} onOpenChange={setShowTooltip}>`

### 修改檔案

| 檔案 | 內容 |
|------|------|
| `src/pages/Index.tsx` | 新增 `showTooltip` state、修改點擊邏輯、控制 Tooltip open 狀態與延遲 |

### 測試重點

- hover 時 Tooltip 快速出現（約 200ms）
- 點擊圖片後 Tooltip 立即出現並停留約 2 秒
- 每次點擊文字隨機切換
- 果凍動畫仍正常運作

