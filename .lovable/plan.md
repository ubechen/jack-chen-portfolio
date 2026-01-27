

## SSG Meta 標籤與 HTML 內容修復計畫

### 問題診斷

| 問題 | 原因 |
|------|------|
| 每頁 meta 資訊都一樣 | `vite-react-ssg` 不支援 `react-helmet-async`，需改用內建 `<Head/>` 組件 |
| GitHub index.html body 內容空白 | 這是正常的，`index.html` 是原始模板，實際部署內容在 `dist/` 資料夾 |

---

### 解決方案

將所有頁面從 `react-helmet-async` 的 `<Helmet>` 改為 `vite-react-ssg` 內建的 `<Head/>` 組件。

#### 1. 移除 react-helmet-async 相依（src/App.tsx）

```tsx
// 移除 HelmetProvider，因為 vite-react-ssg 的 Head 不需要

import { Outlet } from "react-router-dom";
// ... 其他 imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* ... 其他組件 */}
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);
```

#### 2. 更新所有頁面的 Head 組件

將所有 `<Helmet>` 替換為 `<Head>`：

```tsx
// 修改前
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>頁面標題</title>
  <meta name="description" content="..." />
</Helmet>

// 修改後
import { Head } from "vite-react-ssg";

<Head>
  <title>頁面標題</title>
  <meta name="description" content="..." />
</Head>
```

---

### 需修改的檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/App.tsx` | 移除 `HelmetProvider` wrapper |
| `src/pages/Index.tsx` | `Helmet` → `Head`（從 vite-react-ssg 導入） |
| `src/pages/About.tsx` | `Helmet` → `Head` |
| `src/pages/Resume.tsx` | `Helmet` → `Head` |
| `src/pages/ProjectDetailV2.tsx` | `Helmet` → `Head` |
| `src/pages/NotFound.tsx` | `Helmet` → `Head` |
| `vite.config.ts` | 移除無效的 `onPageRendered` helmet 處理邏輯 |

---

### 修改範例

以 `src/pages/About.tsx` 為例：

```tsx
// 修改前（第 1-34 行）
import { Helmet } from "react-helmet-async";
// ...

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>How I Work｜我的工作方式｜Jack Chen</title>
        <meta name="description" content="..." />
        <meta property="og:title" content="..." />
        ...
      </Helmet>
      ...
    </div>
  );
};

// 修改後
import { Head } from "vite-react-ssg";
// ...

const About = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>How I Work｜我的工作方式｜Jack Chen</title>
        <meta name="description" content="..." />
        <meta property="og:title" content="..." />
        ...
      </Head>
      ...
    </div>
  );
};
```

---

### 關於 GitHub index.html 的說明

這是**正常現象**，不需要修正：

```text
GitHub Repository 結構
├── index.html          ← 這是「原始模板」，<body> 內容是空的
├── src/
└── dist/               ← 建構輸出（包含完整 HTML 內容）
    ├── index.html      ← 首頁靜態 HTML（有完整 body 內容）
    ├── about.html      ← About 頁面靜態 HTML
    ├── resume.html     ← Resume 頁面靜態 HTML
    └── project/
        ├── ai-pc.html
        ├── drone.html
        └── ...
```

GitHub Actions 部署的是 `dist/` 資料夾內容，而不是根目錄的 `index.html`。

---

### 驗證方式

修改完成後：

1. **本地測試**：執行 `npm run build` 後檢查 `dist/` 資料夾內的 HTML 檔案
2. **線上驗證**：部署後使用「檢視網頁原始碼」確認每頁 meta 不同
3. **SEO 工具**：使用 Google Search Console 或類似工具驗證

---

### 技術備註

`vite-react-ssg` 的 `<Head/>` 組件會在 SSG 建構時自動將 meta 標籤注入到靜態 HTML，無需額外的 `onPageRendered` 處理。這是官方推薦的作法，可確保：

- SSG 建構時正確注入 meta 標籤
- 客戶端導航時動態更新 document head
- 巢狀組件中的 meta 標籤可正確覆蓋

