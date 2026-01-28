

## 修正 SSG 預渲染 Meta 標籤衝突問題

### 問題診斷

目前專案內頁（如 AI PC）的 HTML 原始碼出現**兩組衝突的 meta 標籤**：

| 來源 | 屬性 | 內容 |
|------|------|------|
| Index.tsx `<Head>` | `data-rh="true"` | 首頁標題「Jack Chen｜Product / UX 設計作品集｜系統型與產品體驗」 |
| index.html | 無 | 首頁完整 SEO「Jack Chen（陳泰運）｜Product / UX 設計作品集｜B2B 系統...」 |

而 ProjectDetailV2.tsx 的專案專屬 meta 標籤（如 AI PC）只在 JavaScript hydration 後才生效，無法在原始碼中看到。

### 根本原因

1. **index.html 的 meta 標籤被複製到所有頁面**：SSG 使用 index.html 作為模板，其中的首頁 SEO 內容會出現在所有預渲染頁面
2. **Index.tsx 的 Head 標籤與 index.html 重複**：首頁同時有兩處定義 meta 標籤
3. **SSG 未正確覆寫 index.html 的靜態標籤**：專案內頁的 `<Head>` 內容無法在建構時取代模板中的標籤

---

### 解決方案

將 `index.html` 改為**純模板**，移除所有頁面專屬的 SEO 標籤，只保留：
- 基礎 HTML 設定（charset、viewport）
- 共用資源（fonts、favicon）
- Loading 動畫樣式
- Google Analytics

所有頁面的 SEO meta 標籤（title、description、OG、Twitter、JSON-LD）統一由各頁面的 `<Head>` 元件負責注入。

---

### 修改檔案

| 檔案 | 修改內容 |
|------|----------|
| `index.html` | 移除首頁專屬 SEO 標籤（保留基礎設定與共用資源） |
| `src/pages/Index.tsx` | 加入完整首頁 SEO 標籤（從 index.html 搬移過來） |

---

### 技術細節

#### 1. index.html 修改後保留項目

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- Performance: Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:..." rel="stylesheet">

    <!-- Loading Screen Styles (保留) -->
    <style>...</style>

    <!-- Google Analytics (保留) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JG20116BZ7"></script>
    <script>...</script>
  </head>
  <body>...</body>
</html>
```

**移除項目**：
- `<title>`
- `<meta name="description">`
- `<meta name="author">`
- `<meta name="robots">`
- `<link rel="canonical">`
- 所有 `og:*` meta 標籤
- 所有 `twitter:*` meta 標籤
- JSON-LD 結構化資料

#### 2. Index.tsx 加入完整首頁 SEO

```tsx
<Head>
  {/* Primary SEO */}
  <title>Jack Chen（陳泰運）｜Product / UX 設計作品集｜B2B 系統・AI PC・無人機・服務型機器人・ESG</title>
  <meta name="description" content="Jack Chen（陳泰運 / Tai-Yun Chen）是 Product / UX 設計師..." />
  <meta name="author" content="Jack Chen" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <link rel="canonical" href="https://taiyun.design/" />

  {/* Open Graph */}
  <meta property="og:site_name" content="Jack Chen Portfolio" />
  <meta property="og:title" content="Jack Chen（陳泰運）｜Product / UX 設計作品集" />
  <meta property="og:description" content="B2B 系統・AI PC・無人機地面控制站..." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://taiyun.design/" />
  <meta property="og:locale" content="zh_TW" />
  <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/..." />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jack Chen（陳泰運）｜Product / UX 設計作品集" />
  <meta name="twitter:description" content="B2B 系統・AI PC・無人機・服務型機器人・ESG｜專案案例與履歷" />
  <meta name="twitter:site" content="@jackchen_ux" />
  <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/..." />

  {/* JSON-LD: Person + WebSite */}
  <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
</Head>
```

---

### 預期結果

修改後，每個頁面的 HTML 原始碼將只包含該頁面專屬的 meta 標籤：

| 頁面 | 原始碼中的 title |
|------|------------------|
| `/` (首頁) | Jack Chen（陳泰運）｜Product / UX 設計作品集｜B2B 系統... |
| `/project/ai-pc` | AI PC｜Research & Vision｜Jack Chen 專案 |
| `/project/drone` | Drone System｜Control Experience｜Jack Chen 專案 |
| `/about` | About - Jack Chen... |

不再有重複或衝突的 meta 標籤。

---

### 實作順序

1. 修改 `index.html`：移除頁面專屬 SEO 標籤
2. 修改 `src/pages/Index.tsx`：加入從 index.html 搬移的完整首頁 SEO
3. 推送到 GitHub 觸發 SSG 重新建構
4. 驗證各頁面原始碼

