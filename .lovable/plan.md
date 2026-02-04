

## 更新「我的工作流程」區塊

### 變更概述

將 Section 3 的標題和內容更新為用戶提供的新版本，增加情境引言和更完整的描述。

---

### 內容變更對照

| 項目 | 變更前 | 變更後 |
|------|--------|--------|
| 標題 | 我的工作流程 | 我怎麼在「決策前段」工作 |
| 結構 | 3 張卡片 | 情境引言 + 3 張卡片 |

---

### 新版結構

```text
Section 3: 我怎麼在「決策前段」工作
├── 情境引言區塊
│   ├── 引言說明
│   ├── 3 個引號情境範例
│   └── 方法論總結
│
└── 3 欄卡片 Grid
    ├── 1. 幫團隊把問題想清楚
    ├── 2. 把研究轉化成決策工具
    └── 3. 用 AI 工具加速，但不取代思考
```

---

### 技術實作

#### 修改檔案
`src/pages/About.tsx`

#### 1. 更新 workflowSteps 資料（第 40-53 行）

```tsx
const workflowSteps = [
  {
    title: "幫團隊把問題想清楚",
    description: "當專案剛開始，我會先釐清：這個問題值不值得花資源解決？解決後對誰有價值？我們怎麼知道做對了？透過訪談、問卷分析、工作坊等方法，把「老闆說想做」或「客戶要求」這種模糊的需求，拆解成可以評估、可以選擇的選項"
  },
  {
    title: "把研究轉化成決策工具",
    description: "經常協助 PM 組成提案骨架（問題、機會、方案、路線），整理功能優先序與風險評估，提供不同方案的假設，讓高層、客戶、內部團隊都能用自己熟悉的語言理解「我們為什麼要這樣做」、「為什麼不做另一個」"
  },
  {
    title: "用 AI 工具加速，但不取代思考",
    description: "我會用 AI 協助整理訪談逐字稿和問卷開放式回答，也用生成式影像、影片做概念視覺提案，讓討論更具體。育嬰留停期間，我持續探索 AI 工具和 UX 之間的進化，考取了 iPAS AI 應用規劃師初級、與資策會生成式 AI 能力認證"
  }
];
```

#### 2. 更新 Section 3 結構（第 201-225 行）

將 Section 3 改為包含情境引言的新結構：

```tsx
{/* Section 3: 我怎麼在「決策前段」工作 - 情境引言 + 3 欄卡片 */}
<ScrollReveal delay={100}>
  <section className="py-16 px-6 bg-primary/10 shadow-sm">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
        我怎麼在「決策前段」工作
      </h2>
      
      {/* 情境引言 */}
      <div className="mb-10 space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          在科技製造業的場景，我常被丟到這種題目：
        </p>
        <div className="space-y-2 pl-4 border-l-2 border-primary/30">
          <p className="text-lg text-muted-foreground italic">
            「我們也要做 AI PC，但下一代要做什麼？」
          </p>
          <p className="text-lg text-muted-foreground italic">
            「這個新硬體技術有前景，能發展什麼應用？」
          </p>
          <p className="text-lg text-muted-foreground italic">
            「老闆想要更前瞻的機器人，還不清楚要什麼」
          </p>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          我習慣先把題目拆開，對齊「為什麼做」和「怎麼判斷有價值」
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          再用研究和設計幫團隊縮小不確定性，找到可以執行的方向
        </p>
      </div>
      
      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflowSteps.map((step, index) => (
          <Card key={index} className="bg-card border border-border h-full">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
</ScrollReveal>
```

---

### 視覺設計細節

- 情境引言使用 `border-l-2 border-primary/30` 左側邊框裝飾
- 引號情境使用 `italic` 斜體樣式突顯
- 卡片編號維持現有圓形數字設計
- 卡片標題移除「在決策前段」前綴，改為簡潔的「幫團隊把問題想清楚」

---

### 修改檔案清單

| 檔案 | 動作 | 變更內容 |
|------|------|----------|
| `src/pages/About.tsx` | 修改 | 更新 workflowSteps 資料與 Section 3 結構 |

