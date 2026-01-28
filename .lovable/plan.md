

## OG 圖片路徑更新 + About/Resume SEO 補齊

### 修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/pages/Index.tsx` | 第 102、109 行：R2 CDN → `og-index.png` |
| `src/pages/About.tsx` | 第 27-34 行：補齊完整 OG/Twitter 標籤（含 canonical、image） |
| `src/pages/Resume.tsx` | 第 182-189 行：補齊完整 OG/Twitter 標籤（含 canonical、image） |
| `src/pages/ProjectDetailV2.tsx` | 第 374 行：`og-drone-system.png` → `og-drone.png`<br>第 434 行：`og-wi-thrive.png` → `og-esg-board-game.png` |

---

### 技術細節

#### 1. Index.tsx（第 102、109 行）

```tsx
// 第 102 行
<meta property="og:image" content="https://taiyun.design/images/og-index.png" />

// 第 109 行
<meta name="twitter:image" content="https://taiyun.design/images/og-index.png" />
```

#### 2. About.tsx（第 27-34 行）

將現有 Head 擴展為：

```tsx
<Head>
  <title>How I Work｜我的工作方式｜Jack Chen</title>
  <meta name="description" content="介紹我的工作方式：從釐清題目與成功指標出發，透過研究與工作坊收斂方向，再用敘事、原型與驗證把策略轉成可執行的產品決策與體驗落地" />
  <link rel="canonical" href="https://taiyun.design/about" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="author" content="Jack Chen" />
  
  {/* Open Graph */}
  <meta property="og:locale" content="zh_TW" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="How I Work｜我的工作方式｜Jack Chen" />
  <meta property="og:description" content="從題目釐清到研究收斂，再到原型驗證與落地，整理我如何把策略轉成可執行的產品決策與體驗" />
  <meta property="og:url" content="https://taiyun.design/about" />
  <meta property="og:site_name" content="Jack Chen Portfolio" />
  <meta property="og:image" content="https://taiyun.design/images/og-about.png" />
  <meta property="og:image:alt" content="Jack Chen 工作方式介紹頁面" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="How I Work｜我的工作方式｜Jack Chen" />
  <meta name="twitter:description" content="從題目釐清到研究收斂，再到原型驗證與落地..." />
  <meta name="twitter:image" content="https://taiyun.design/images/og-about.png" />
</Head>
```

#### 3. Resume.tsx（第 182-189 行）

將現有 Head 擴展為：

```tsx
<Head>
  <title>Resume｜履歷與經歷摘要｜Jack Chen</title>
  <meta name="description" content="Jack Chen 的履歷摘要與工作經歷，包含 UX 研究、資訊架構、複雜系統與後台設計、裝置端 App 與軟硬整合、跨部門對齊與簡報溝通能力" />
  <link rel="canonical" href="https://taiyun.design/resume" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="author" content="Jack Chen" />
  
  {/* Open Graph */}
  <meta property="og:locale" content="zh_TW" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Resume｜履歷與經歷摘要｜Jack Chen" />
  <meta property="og:description" content="履歷摘要與工作經歷：UX 研究、IA、後台與系統設計、裝置端整合、利害關係人對齊與溝通" />
  <meta property="og:url" content="https://taiyun.design/resume" />
  <meta property="og:site_name" content="Jack Chen Portfolio" />
  <meta property="og:image" content="https://taiyun.design/images/og-resume.png" />
  <meta property="og:image:alt" content="Jack Chen 履歷摘要頁面" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Resume｜履歷與經歷摘要｜Jack Chen" />
  <meta name="twitter:description" content="履歷摘要與工作經歷：UX 研究、IA、後台與系統設計、裝置端整合..." />
  <meta name="twitter:image" content="https://taiyun.design/images/og-resume.png" />
  
  <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
</Head>
```

#### 4. ProjectDetailV2.tsx

**第 374 行（Drone）**：
```tsx
ogImage: "https://taiyun.design/images/og-drone.png",
```

**第 434 行（ESG Board Game）**：
```tsx
ogImage: "https://taiyun.design/images/og-esg-board-game.png",
```

---

### 最終 OG 圖片對照表

| 頁面 | OG 圖片檔案 | 狀態 |
|------|------------|------|
| 首頁 `/` | `og-index.png` | ✅ 已上傳 |
| About `/about` | `og-about.png` | ✅ 已上傳 |
| Resume `/resume` | `og-resume.png` | ✅ 已上傳 |
| AI PC `/project/ai-pc` | `og-ai-pc.png` | ✅ 已上傳 |
| Drone `/project/drone` | `og-drone.png` | ✅ 已上傳 |
| AMR Robot `/project/amr-robot` | `og-amr-robot.png` | ✅ 已上傳 |
| ESG `/project/esg-board-game` | `og-esg-board-game.png` | ✅ 已上傳 |

---

### 為何專案頁面社群預覽沒有 title/description？

**原因**：程式碼中的 SEO 設定都是正確的，但需要：
1. **SSG 重新建構**：推送到 GitHub 後觸發 Actions 重新建構
2. **快取清除**：LINE/Facebook 會快取連結預覽，需使用 [Facebook Debugger](https://developers.facebook.com/tools/debug/) 強制刷新

**驗證流程**：
1. 部署後，先用 `curl` 或瀏覽器「檢視原始碼」確認 HTML 中有正確的 meta 標籤
2. 使用 Facebook Sharing Debugger 測試各頁面連結
3. LINE 預覽可能需要等待較長時間更新快取

---

### 實作順序

1. 修改 `src/pages/Index.tsx`：更新 OG 圖片為 `og-index.png`
2. 修改 `src/pages/About.tsx`：補齊完整 OG/Twitter 標籤
3. 修改 `src/pages/Resume.tsx`：補齊完整 OG/Twitter 標籤
4. 修改 `src/pages/ProjectDetailV2.tsx`：更新 drone 和 esg-board-game 的圖片路徑
5. 推送到 GitHub 觸發 SSG 重新建構

