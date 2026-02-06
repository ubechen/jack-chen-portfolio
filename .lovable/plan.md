
## 修改 Index V2 首頁 - 文案更新與導航修正

### 變更概述

1. **Navigation 左上角修正**：讓 `/index-v2` 頁面也顯示「Jack Chen」而非 Home icon
2. **Hero 區域文案更新**：更新副標題為新版本
3. **About 區塊文案更新**：更新敘述內容
4. **我的經歷卡片更新**：更新為新版文案（含 bullet points）
5. **UX 專業能力卡片更新**：更新第一張卡片內容

---

### 變更詳情

#### 1. Navigation 左上角修正

**問題原因：**
```tsx
const isHomePage = location.pathname === "/";
// ...
{isHomePage ? (
  <span>Jack Chen</span>
) : (
  <Home className="..." />
)}
```

目前判斷 `isHomePage` 只包含 `/`，所以 `/index-v2` 頁面會顯示 Home icon。

**解決方案：**
```tsx
const isHomePage = location.pathname === "/" || location.pathname === "/index-v2";
```

---

#### 2. Hero 區域副標題更新（第 199-202 行、第 238-241 行）

**現行：**
```tsx
<p>我是 Jack，8+ 年複雜產品設計經驗</p>
<p>專注在決策前段，幫團隊把問題想清楚</p>
<p>用研究和故事，讓方向可以被討論與執行</p>
```

**修改後：**
```tsx
<p>我是 Jack 在科技業 8+年系統產品設計經驗</p>
<p>專注在決策前段，幫團隊把問題想清楚</p>
<p>提出方向並能被討論執行與落地</p>
```

---

#### 3. About 區塊文案更新（第 404-406 行）

**現行：**
```tsx
過去我在科技製造業擔任 Product / UX 設計師，主要開發系統型和複雜產品，經常參與專案的早期階段，當需求很模糊、方向還沒定的時候。我的角色通常不是衝最快的執行者，而是幫團隊少走叉路、避免做錯關鍵決定的人
```

**修改後：**
```tsx
身為 Product / UX 設計師，經常參與從 0 到 1 階段的跨領域專案，如新型態創新筆電、服務型機器人、無人機地面控制站、醫療監測後台、智慧咖啡秤等。當前期需求方向還沒定案，我扮演的角色協助把問題釐清、縮小選項，讓決策可以更有脈絡地前進，幫助團隊少走叉路，也關注使用者體驗細節，面向團隊會對齊目標和成效
```

---

#### 4. 我的經歷卡片內容更新（第 71-84 行）

**現行資料結構：**
```tsx
const experienceCards = [
  {
    title: "8+ 年系統產品經驗",
    content: "B2B2C、B2B、B2C 都做過\n從 0 到 1 有落地、也有失敗",
  },
  ...
];
```

**修改後：**
```tsx
const experienceCards = [
  {
    title: "8+ 年複雜系統產品經驗",
    items: [
      "做過 B2B2C、B2B、B2C 類型",
      "經歷 0 到 1 有落地、也有失敗過",
    ],
  },
  {
    title: "研究轉化為影響力",
    items: [
      "制定未來產品功能、情境流程優先排序",
      "支援客戶提案，提升 UX 為策略夥伴",
    ],
  },
  {
    title: "概念走到市場",
    items: [
      "國際展出緯創概念筆電、無人機",
      "跨域推廣運動復健產品",
    ],
  },
];
```

同時需要修改渲染邏輯，將 `content` 改為 `items` 的 list 呈現（加入 ● 符號）。

---

#### 5. UX 專業能力卡片內容更新（第 86-96 行）

**現行：**
```tsx
{
  title: "UX 專業能力",
  items: [
    "User Research：訪談、問卷、工作坊",
    "資訊架構與流程設計",
    "Wireframe、Prototype 到 GUI 交付",
    "易用性測試與迭代優化",
  ],
},
```

**修改後：**
```tsx
{
  title: "UX 專業能力",
  items: [
    "使用者研究：訪談、問卷、工作坊",
    "資訊架構與流程設計",
    "Wireframe、Prototype 到 GUI 交付",
    "設計系統、易用性測試與迭代優化",
  ],
},
```

---

### 修改檔案清單

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/components/Navigation.tsx` | 修改 | 將 `isHomePage` 判斷擴展為包含 `/index-v2` |
| `src/pages/IndexV2.tsx` | 修改 | (1) Hero 副標題 (2) About 文案 (3) 經歷卡片資料結構與渲染 (4) UX 專業能力卡片 |

---

### 技術細節：經歷卡片結構變更

原本的 `experienceCards` 使用 `content` 字串配合 `\n` 換行，需改為 `items` 陣列以支援 bullet points：

```tsx
// 原本渲染
<p className="text-muted-foreground whitespace-pre-line leading-relaxed">
  {card.content}
</p>

// 修改後渲染
<ul className="space-y-2">
  {card.items.map((item, itemIndex) => (
    <li key={itemIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
      <span className="text-primary mt-1 text-xs">●</span>
      <span>{item}</span>
    </li>
  ))}
</ul>
```

---

### 測試重點

1. 前往 `/index-v2` 確認：
   - 左上角顯示「Jack Chen」而非 Home icon
   - Hero 副標題更新正確
   - About 區塊文案更新正確
   - 我的經歷三張卡片都有 bullet points
   - UX 專業能力卡片內容正確
