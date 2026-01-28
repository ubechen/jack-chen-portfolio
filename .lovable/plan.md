

## 專案內頁 SEO/AEO/GEO 更新 + Loading 動畫調整計畫

### 一、修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/pages/ProjectDetailV2.tsx` | 重構 `seoData` 與 `<Head>` 元件，加入完整 meta 標籤與 JSON-LD |
| `index.html` | 1. 手機版圖片縮小至 70%<br>2. Loading → Loading... |

---

### 二、OG 圖片路徑（已更新為 images 資料夾）

路徑統一使用 `https://taiyun.design/images/`：

| 專案 | 圖片路徑 |
|------|----------|
| AI PC | `https://taiyun.design/images/og-ai-pc.png` |
| Drone System | `https://taiyun.design/images/og-drone-system.png` |
| AMR Robot | `https://taiyun.design/images/og-amr-robot.png` |
| ESG Board Game | `https://taiyun.design/images/og-wi-thrive.png` |

**你需要手動上傳 4 張 OG 圖片**（建議尺寸：1200×630px）到 `public/images/` 資料夾

---

### 三、Loading 動畫調整

#### 修改位置：index.html 第 47-60 行

**CSS 新增手機版尺寸**（第 51 行後新增）：

```css
.loader-content img {
  width: 400px;
  height: auto;
  max-width: 80vw;
}

/* 新增：手機版縮小至 70% */
@media (max-width: 767px) {
  .loader-content img {
    width: 280px;  /* 400px × 70% = 280px */
  }
}
```

**文字修改**（第 190 行）：

```html
<!-- 原本 -->
<p>Loading</p>

<!-- 修改為 -->
<p>Loading...</p>
```

---

### 四、SEO/AEO/GEO 完整實作

#### 1. 重構 seoData 結構（第 328-355 行）

從目前簡單結構：

```typescript
seoData: { title, description, ogDescription }
```

擴展為完整結構，以 AI PC 為例：

```typescript
"ai-pc": {
  title: "AI PC｜Research & Vision｜Jack Chen 專案",
  description: "在 AI PC 尚未被清楚定義前...",
  canonical: "https://taiyun.design/project/ai-pc",
  ogDescription: "用研究與情境敘事勾勒下一代 AI 筆電體驗...",
  ogImage: "https://taiyun.design/images/og-ai-pc.png",
  ogImageAlt: "AI PC 專案代表圖：...",
  twitterDescription: "在 AI PC 尚未被定義前...",
  jsonLdArticle: { ... },
  jsonLdBreadcrumb: { ... }
}
```

#### 2. 更新 Head 元件（第 371-379 行）

從：

```tsx
<Head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.ogDescription} />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.ogDescription} />
  <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
</Head>
```

更新為完整版：

```tsx
<Head>
  {/* 基本 Meta */}
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <link rel="canonical" href={seo.canonical} />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="author" content="Jack Chen" />

  {/* Open Graph */}
  <meta property="og:locale" content="zh_TW" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.ogDescription} />
  <meta property="og:url" content={seo.canonical} />
  <meta property="og:site_name" content="Jack Chen Portfolio" />
  <meta property="og:image" content={seo.ogImage} />
  <meta property="og:image:alt" content={seo.ogImageAlt} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.twitterDescription} />
  <meta name="twitter:image" content={seo.ogImage} />

  {/* JSON-LD：Article + BreadcrumbList */}
  <script type="application/ld+json">{JSON.stringify(seo.jsonLdArticle)}</script>
  <script type="application/ld+json">{JSON.stringify(seo.jsonLdBreadcrumb)}</script>
</Head>
```

---

### 五、4 個專案的完整 SEO 資料

每個專案都包含你提供的完整內容：

**AI PC**
- Article schema 含 5 個 about 主題 + 7 個 keywords
- BreadcrumbList: Home → Projects → AI PC｜Research & Vision

**Drone System**
- Article schema 含 5 個 about 主題 + 7 個 keywords
- BreadcrumbList: Home → Projects → Drone System｜Control Experience

**AMR Robot**
- Article schema 含 5 個 about 主題 + 7 個 keywords
- BreadcrumbList: Home → Projects → Wifundity AMR Robot｜Service System Design

**ESG Board Game**
- Article schema 含 5 個 about 主題 + 7 個 keywords
- BreadcrumbList: Home → Projects → Wi-Thrive｜ESG Storytelling Game

---

### 六、實作順序

1. 修改 `index.html`：手機版 Loading 圖片 70% + Loading...
2. 修改 `src/pages/ProjectDetailV2.tsx`：完整 SEO 資料結構與 Head 元件
3. 你手動上傳 4 張 OG 圖片到 `public/images/`
4. 推送到 GitHub 觸發 SSG 重新建構

