

## 履歷 PDF 下載修復計畫

### 問題根因

PDF 檔案未成功存入 `public/` 資料夾，導致下載連結找不到檔案。

### 修復步驟

#### 1. 放置 PDF 檔案

將使用者上傳的履歷檔案存放至正確位置：

| 來源 | 目標路徑 |
|------|----------|
| `user-uploads://Resume_Tai-Yun_Chen_Jack_tw-2.pdf` | `public/Resume_Tai-Yun_Chen_Jack_tw.pdf` |

#### 2. 驗證檔案可存取

檔案放置後，可透過以下路徑存取：
- **Lovable 預覽**：`https://id-preview--de911528-6f96-43b3-a205-2765473bab47.lovable.app/Resume_Tai-Yun_Chen_Jack_tw.pdf`
- **Lovable 正式**：`https://jack-chen-portfolio.lovable.app/Resume_Tai-Yun_Chen_Jack_tw.pdf`
- **GitHub Pages**：`https://ubechen.github.io/jack-chen-portfolio/Resume_Tai-Yun_Chen_Jack_tw.pdf`

---

### 技術說明

`public/` 資料夾中的檔案會被直接複製到網站根目錄，因此：
- 放在 `public/Resume_Tai-Yun_Chen_Jack_tw.pdf`
- 可透過 `/Resume_Tai-Yun_Chen_Jack_tw.pdf` 存取

Resume.tsx 中的下載連結（第 227 行）已正確設定：
```tsx
<a href="/Resume_Tai-Yun_Chen_Jack_tw.pdf" download>
```

---

### 修改檔案清單

| 檔案 | 動作 |
|------|------|
| `public/Resume_Tai-Yun_Chen_Jack_tw.pdf` | 新增（從使用者上傳檔案複製） |

---

### 部署後測試

1. 前往 `/resume` 頁面
2. 點擊「下載履歷 PDF」按鈕
3. 確認 PDF 檔案成功下載

