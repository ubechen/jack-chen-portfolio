
## SSG 建構修復計畫

### 問題根因

`package.json` 中的 `build` script 使用了 `vite build`（普通 CSR 建構），而非 `vite-react-ssg build`（SSG 預渲染建構）。

這導致：
- GitHub Pages 首頁只有空的 `<div id="root"></div>`
- 沒有預渲染的 HTML 內容
- 每頁 meta 標籤都相同

---

### 修復步驟

#### 1. 修改 package.json 的 build script

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite-react-ssg build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

### 預期結果

修復後，GitHub Actions 執行 `npm run build` 時會：

1. **預渲染所有靜態頁面**（依據 `src/routes.tsx` 定義）
2. **產生獨立的 HTML 檔案**，每個都包含完整內容：

```text
dist/
├── index.html          ← 首頁（完整 HTML 內容 + 正確 meta）
├── about.html          ← About 頁面
├── resume.html         ← Resume 頁面
├── 404.html            ← 錯誤頁面
└── project/
    ├── ai-pc.html
    ├── drone.html
    ├── amr-robot.html
    └── esg-board-game.html
```

3. **每個 HTML 檔案都有獨立的 meta 標籤**（透過 `<Head/>` 組件注入）

---

### 修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `package.json` | `"build": "vite build"` → `"build": "vite-react-ssg build"` |

---

### 部署與驗證

1. 修改完成後，推送到 GitHub
2. GitHub Actions 會自動執行新的 SSG 建構
3. 驗證方式：
   - 前往 `https://taiyun.design/` 並「檢視網頁原始碼」
   - 確認 `<body>` 內有完整的 HTML 內容（不再只有 `<div id="root"></div>`）
   - 確認各頁面 meta 標籤不同

---

### 技術說明

| 指令 | 用途 |
|------|------|
| `vite build` | 標準 Vite 建構，產生 SPA（單頁應用），無預渲染 |
| `vite-react-ssg build` | SSG 建構，將每個路由預渲染成獨立的 HTML 檔案 |

`vite-react-ssg` 會讀取 `src/routes.tsx` 中定義的路由（包含 `getStaticPaths`），並為每個路由產生對應的 HTML 檔案。
