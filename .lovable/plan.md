

## Tooltip 停留時間延長 + 文案修正

### 變更內容

一次處理兩項調整：

1. **延長停留時間**：點擊後 Tooltip 停留從 2 秒改為 **3.5 秒**
2. **純點擊控制**：移除 `onOpenChange={setShowTooltip}`，讓 hover 不會觸發也不會意外關閉 Tooltip
3. **文案修正**：第 9 句從「認真說，謝謝你來看我的作品集 ❤️」改為「謝謝你來看我的作品集 ❤️」

### 技術細節（`src/pages/Index.tsx`）

| 位置 | 修改 |
|------|------|
| 第 152 行 | `setTimeout` 從 `2000` 改為 `3500` |
| 第 135 行 | 文案移除「認真說，」 |
| 第 422 行 | 移除 `onOpenChange={setShowTooltip}` |
| 第 444 行 | 移除 `onOpenChange={setShowTooltip}` |

### 測試重點

- 點擊後 Tooltip 停留約 3.5 秒
- 滑鼠移開不會讓 Tooltip 提前消失
- hover 不會觸發 Tooltip，只有點擊才會
- 第 9 句文案正確顯示為「謝謝你來看我的作品集 ❤️」

