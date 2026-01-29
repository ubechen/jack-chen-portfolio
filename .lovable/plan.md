

## Favicon 多格式支援設定

### 一、你需要準備的檔案

請準備以下檔案，並上傳到 `public/` 資料夾：

| 檔案名稱 | 尺寸 | 用途 |
|---------|------|------|
| `favicon.ico` | 多尺寸（16×16, 32×32, 48×48） | 傳統瀏覽器、Windows 書籤 |
| `favicon-16x16.png` | 16×16 | 現代瀏覽器小尺寸 |
| `favicon-32x32.png` | 32×32 | 現代瀏覽器標準尺寸 |
| `apple-touch-icon.png` | 180×180 | iOS 加到主畫面時顯示 |

---

### 二、程式碼修改

修改 `index.html` 第 7-8 行的 Favicon 區塊：

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

改為：

```html
<!-- Favicon: Multi-format support -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

---

### 三、瀏覽器載入順序說明

現代瀏覽器會依照 `sizes` 屬性選擇最適合的圖示：
- **Chrome/Edge/Firefox**：優先使用 PNG（32×32 或 16×16）
- **Safari/iOS**：使用 `apple-touch-icon`（加到主畫面時）
- **舊版瀏覽器/Windows**：fallback 到 `.ico`

---

### 四、上傳位置

```text
public/
├── favicon.ico          ← 覆蓋現有檔案
├── favicon-16x16.png    ← 新增
├── favicon-32x32.png    ← 新增
└── apple-touch-icon.png ← 新增
```

---

### 五、技術細節

修改範圍：
- 檔案：`index.html`
- 行數：第 7-8 行
- 變更：將單一 `<link>` 擴展為 4 個 `<link>` 標籤

