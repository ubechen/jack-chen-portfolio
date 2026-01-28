
目標：修正「4 個專案內頁在社群平台預覽時，title/description/og:image 都沿用首頁」的問題；並回答 favicon 尺寸/格式與覆蓋位置。此回合只提出可執行方案與驗證方式；待你核可後再實作。

---

一、先回答 favicon：尺寸、格式、覆蓋位置

1) 目前專案使用的 favicon 位置
- 你的 `index.html` 第 8 行：`<link rel="icon" type="image/x-icon" href="/favicon.ico" />`
- 因此實際檔案位置是：`public/favicon.ico`
- 要覆蓋：只要把新 favicon 檔案「命名為 favicon.ico」並放到 `public/` 取代原檔即可（不需要改程式碼）

2) 推薦的 favicon 格式與尺寸（依實務相容性）
- 首選（最穩）：`.ico`
  - 建議用「多尺寸 ICO」：至少包含 16×16、32×32（可加 48×48）
  - 這能涵蓋 Windows、舊版瀏覽器、書籤列等情境
- 加強（建議，但非必需）：`.png`
  - `32×32`（favicon-32.png）
  - `16×16`（favicon-16.png）
  - `180×180`（apple-touch-icon.png，iOS 加到主畫面時用）
- 進階（可選）：`.svg`
  - 畫質最佳、可縮放，但不是所有爬蟲/平台都一致支援
  - 若要用 svg，通常仍建議保留 ico 作為 fallback

3) 若你想同時支援 png / apple touch icon（可選擇做或不做）
- 需要你提供並上傳對應檔案到 `public/`
- 並在 `index.html` 追加 `<link rel="icon"...>` 與 `<link rel="apple-touch-icon"...>` 標籤
- 這不是你目前 OG 問題的必要條件，可獨立處理

---

二、為什麼專案頁面「原始碼沿用首頁」：根因判斷

你描述的現象（專案頁 View Page Source 看到的是首頁的 meta）非常符合這個狀況：

- 站點是 SSG 靜態輸出（`vite-react-ssg build`）
- 若某個路徑（例如 `/project/ai-pc`）沒有被預渲染生成對應的靜態 HTML 檔，部署到 GitHub Pages / 靜態主機時，常會用 fallback（`404.html` 或 `index.html`）回傳
- 你的 GitHub Pages workflow 目前有把 `dist/index.html` 複製成 `dist/404.html`，這會讓「找不到的路徑」回傳首頁 HTML
- 社群爬蟲（LINE/FB）不跑 JS，只看回傳的靜態 HTML，因此就會抓到首頁 title/description/og:image

換句話說：不是 ProjectDetailV2 的 `<Head>` 沒寫好，而是「/project/* 的靜態檔沒有被生成/部署」，導致伺服器回傳的是首頁 HTML。

---

三、找到目前 SSG 沒有生成專案頁的直接原因

在 `src/routes.tsx` 內動態路由設定：

- `path: "project/:projectId"`
- `getStaticPaths: () => ['ai-pc', 'drone', 'amr-robot', 'esg-board-game']`

依照 vite-react-ssg 文件（API.md），`getStaticPaths` 需要回傳「完整路徑片段」（包含父層路徑），例如範例 `nest/:b` 需要回 `['nest/b1', 'nest/b2']`。

因此你的案例應該回傳：
- `project/ai-pc`
- `project/drone`
- `project/amr-robot`
- `project/esg-board-game`

目前只回傳 slug（ai-pc...），會導致 build 嘗試生成錯誤位置或根本不生成 `/project/*` 的靜態 HTML，最後部署就用 index/404 fallback，造成你看到「沿用首頁 meta」。

---

四、實作變更範圍（最小修正、最有效）

A) 修正 `src/routes.tsx`
- 把 `getStaticPaths` 改成回傳完整路徑：
  - 由 `['ai-pc', 'drone', 'amr-robot', 'esg-board-game']`
  - 改為 `['project/ai-pc', 'project/drone', 'project/amr-robot', 'project/esg-board-game']`

B) （可選）補強：避免未來擴充時再次踩雷
- 把專案 slug 清單抽成常數（例如 `const PROJECT_SLUGS = [...]`）
- `getStaticPaths` 用 map 組出 `project/${slug}`
- 這樣新增專案時只改一處 slug list

C) favicon（你有問，但可獨立處理）
- 若你只要維持目前做法：不需改 code，直接用 `public/favicon.ico` 覆蓋即可
- 若你希望加上 png / apple touch icon：才需要修改 `index.html`（會先等你確認你要提供哪些檔名/尺寸）

---

五、如何驗證「專案頁 title/description/og:image 會自動出現」

1) 本機/Preview 端（最重要）
- 打開 `https://taiyun.design/project/ai-pc`
- 使用「檢視原始碼（View Page Source）」而不是 Elements
- 應該要在 `<head>` 看到（節錄）：
  - `<title>AI PC｜Research & Vision｜Jack Chen 專案</title>`
  - `<meta property="og:title" content="AI PC｜Research & Vision｜Jack Chen 專案" />`
  - `<meta property="og:description" ... />`
  - `<meta property="og:image" content="https://taiyun.design/images/og-ai-pc.png" />`
- 其他三個專案頁同理（title/description/og-image 都應不同）

2) 確認實際有生成靜態檔（部署前後都能用）
- 修正後的 SSG 產物在 dist 內應該存在對應路徑（概念上）：
  - `dist/project/ai-pc/index.html`
  - `dist/project/drone/index.html`
  - `dist/project/amr-robot/index.html`
  - `dist/project/esg-board-game/index.html`
- 若沒有這些檔，就表示 SSG 還沒成功生成，社群平台必定還是抓首頁 fallback

3) 社群爬蟲快取刷新
- Facebook Sharing Debugger：對每個專案連結按「Scrape Again」
- LINE 的快取通常較久，FB debug 刷新後通常更容易觀察是否已修正

---

六、執行順序（你核可後我會照這個做）

1) 修改 `src/routes.tsx`：修正 getStaticPaths 回傳完整路徑
2) 觸發重新 build/部署（GitHub Actions 或 Lovable publish）
3) 你再用 View Page Source 驗證 4 個專案頁 head 是否正確
4) 若 head 正確，再用 FB debugger 刷新社群快取、回到 LINE 測

---

七、風險與備案

- 若修正 getStaticPaths 後仍然沒有生成 `dist/project/...`：
  - 備案 1：改用 vite-react-ssg 官方建議的 `route.lazy`（React Router lazy）結構取代 React.lazy/Suspense 包裝（提升 build 時路由資產探測與穩定性）
  - 備案 2：在 build log 內確認 vite-react-ssg 實際 prerender 的路徑清單（找不到就代表 getStaticPaths 未生效）

（通常在你的專案狀況下，修正 getStaticPaths 的完整路徑就能一次解掉「沿用首頁」問題。）

---