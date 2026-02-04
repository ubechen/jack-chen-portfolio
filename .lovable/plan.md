

## 將 About V2 設為主頁，舊版改存為 V1

### 一、變更概述

| 目前狀態 | 變更後 |
|---------|-------|
| `About.tsx` → `/about` | `AboutV1.tsx` → `/about-v1` |
| `AboutV2.tsx` → `/about-v2` | `About.tsx` → `/about` |

所有選單和按鈕連結維持指向 `/about`，使用者訪問時會看到新版內容。

---

### 二、檔案異動清單

| 檔案 | 動作 | 說明 |
|------|------|------|
| `src/pages/About.tsx` | 重新命名為 `AboutV1.tsx` | 舊版暫存備份 |
| `src/pages/AboutV2.tsx` | 重新命名為 `About.tsx` | 新版成為主頁 |
| `src/routes.tsx` | 修改 | 更新路由對應 |

---

### 三、路由設定變更

修改 `src/routes.tsx`：

```tsx
// 變更前
const About = lazy(() => import("./pages/About"));
const AboutV2 = lazy(() => import("./pages/AboutV2"));

// 變更後
const About = lazy(() => import("./pages/About"));       // 原 AboutV2
const AboutV1 = lazy(() => import("./pages/AboutV1"));   // 原 About

// 路由設定
{
  path: "about",
  element: withSuspense(About),      // 新版內容
},
{
  path: "about-v1",
  element: withSuspense(AboutV1),    // 舊版備份
},
```

---

### 四、頁面內容調整

#### `About.tsx`（原 `AboutV2.tsx`）

- 元件名稱從 `AboutV2` 改為 `About`
- canonical URL 改為 `https://taiyun.design/about`
- 移除 `noindex,nofollow`，改為標準 SEO 設定

#### `AboutV1.tsx`（原 `About.tsx`）

- 元件名稱從 `About` 改為 `AboutV1`
- canonical URL 改為 `https://taiyun.design/about-v1`
- 加入 `noindex,nofollow` 避免搜尋引擎收錄

---

### 五、存取路徑對照

| 網址 | 內容 |
|------|------|
| `/about` | 新版（6 區塊結構、Grid 卡片排版） |
| `/about-v1` | 舊版（備份，不公開索引） |

---

### 六、影響範圍

- **無影響**：所有選單、按鈕、內部連結仍指向 `/about`，使用者自動看到新版
- **無影響**：SSG 靜態生成會自動包含兩個路徑
- **SEO**：舊版設為 noindex，新版為正式公開頁面

