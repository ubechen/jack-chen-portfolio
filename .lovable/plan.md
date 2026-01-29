

## Favicon 路徑調整至 images 資料夾

### 一、目前狀態

目前 favicon 相關路徑指向 `public/` 根目錄：

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### 二、修改內容

將路徑改為 `/images/` 資料夾：

```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
```

---

### 三、你需要上傳的檔案

請將以下檔案上傳到 `public/images/` 資料夾：

| 檔案名稱 | 尺寸 | 用途 |
|---------|------|------|
| `favicon.ico` | 多尺寸 | 傳統瀏覽器、Windows 書籤 |
| `favicon-16x16.png` | 16x16 | 現代瀏覽器小尺寸 |
| `favicon-32x32.png` | 32x32 | 現代瀏覽器標準尺寸 |
| `apple-touch-icon.png` | 180x180 | iOS 加到主畫面 |

---

### 四、技術細節

| 項目 | 內容 |
|------|------|
| 修改檔案 | `index.html` |
| 修改行數 | 第 8-11 行 |
| 變更內容 | 將 4 個 favicon 路徑從 `/` 改為 `/images/` |

