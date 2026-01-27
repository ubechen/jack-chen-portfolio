

## GitHub Pages 部署修正計畫

### 問題摘要

| 問題 | 現況 | 需修正為 |
|------|------|----------|
| Repository 名稱 | `/jack-ux-portfolio-vite/` | `/jack-chen-portfolio/` |
| 404.html | 不存在 | 需自動產生 |

---

### 修改項目

#### 1. 修正 Base 路徑（vite.config.ts）

```typescript
// 第 11 行
// 修改前
base: process.env.GITHUB_PAGES === "true" ? "/jack-ux-portfolio-vite/" : "/",

// 修改後
base: process.env.GITHUB_PAGES === "true" ? "/jack-chen-portfolio/" : "/",
```

---

#### 2. 自動產生 404.html（.github/workflows/deploy.yml）

在 Build 完成後加入步驟，將 `dist/index.html` 複製為 `dist/404.html`，讓 GitHub Pages 能正確處理 404 路由：

```yaml
# 在 Build SSG 步驟後新增
- name: Create 404.html for GitHub Pages
  run: cp dist/index.html dist/404.html
```

**原理說明**：
- GitHub Pages 遇到不存在的路徑時會讀取 `404.html`
- 由於你的網站使用 SSG，所有頁面都有預渲染的靜態 HTML
- 但如果有人直接訪問一個不存在的路徑，`404.html` 會載入 SPA 應用
- React Router 會偵測到路徑不存在，自動顯示你設計的 `NotFound` 頁面

---

### 修改檔案清單

| 檔案 | 變更內容 |
|------|----------|
| `vite.config.ts` | 更新 GitHub Pages base 路徑為 `/jack-chen-portfolio/` |
| `.github/workflows/deploy.yml` | 新增步驟產生 `404.html` |

---

### 部署流程圖

```text
┌─────────────────────────────────────────────────────────────┐
│  Lovable 編輯                                                │
│  ↓                                                          │
│  自動同步到 GitHub (main branch)                             │
│  ↓                                                          │
│  GitHub Actions 自動觸發                                     │
│  ↓                                                          │
│  npm run build (產生靜態 HTML/CSS/JS)                        │
│  ↓                                                          │
│  複製 index.html → 404.html                                  │
│  ↓                                                          │
│  部署到 GitHub Pages                                         │
│  ↓                                                          │
│  網站上線：https://ubechen.github.io/jack-chen-portfolio/    │
└─────────────────────────────────────────────────────────────┘
```

---

### 部署後驗證

完成修改並推送後，你的網站將可透過以下網址訪問：

- **GitHub Pages**：`https://ubechen.github.io/jack-chen-portfolio/`
- **Lovable**：`https://jack-chen-portfolio.lovable.app/`（不受影響）

兩個網址可同時運作，各自獨立。

