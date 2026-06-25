## 修正 About 頁工作場景拼貼圖「有時看不見」的問題

### 問題根因
`src/components/ZoomableImage.tsx` 的圖片初始為 `opacity-0`，要等 `onLoad` 事件觸發後（`isLoaded=true`）才顯示。但本站使用 `vite-react-ssg` 輸出靜態 HTML，若圖片已在瀏覽器快取中，會在 React hydration 掛上 `onLoad` 監聽**之前**就載入完成，導致 `onLoad` 永不觸發、圖片永遠停留在 `opacity-0`（看不見）。

### 修正方式
在 `ZoomableImage` 元件掛載後，主動檢查圖片是否「已經載入完成」，若是就立即視為已載入（補觸發既有的載入邏輯）。

具體：新增一個 mount 時的 `useEffect`，檢查 `imgRef.current?.complete && naturalWidth > 0`，若成立則執行與 `handleLoad` 相同的處理（設定 `canZoom` 與 `isLoaded=true`）。這是 SSR/SSG + 延遲顯示圖片的標準修法，不改動既有縮放、骨架動畫等行為。

```text
mount 後：
  若 imgRef.current 已 complete 且有尺寸
    → setCanZoom(...)、setIsLoaded(true)   （等同 onLoad 已發生）
```

### 連帶檢查
`src/components/ImageWithSkeleton.tsx` 有完全相同的 `opacity-0` → onLoad 模式，雖然 About 頁未使用，但其他頁面（如專案頁）可能受影響。一併以相同方式修正，避免同類圖片在快取情境下消失。

### 修改檔案
| 檔案 | 變更 |
|------|------|
| `src/components/ZoomableImage.tsx` | 新增 mount 時檢查 `img.complete` 的 effect，補觸發載入狀態 |
| `src/components/ImageWithSkeleton.tsx` | 改用 ref + mount 檢查 `img.complete`，補觸發 `isLoaded` |

### 驗證
1. 本機 / 預覽以「已快取」狀態重新整理 `/about`，確認拼貼圖穩定顯示
2. 確認點擊放大、骨架 shimmer 動畫等原有互動不受影響
3. 修正後需在 Publish 對話框點 Update（並等 taiyun.design 重新部署）才會反映到正式站
