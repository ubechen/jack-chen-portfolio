import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiPcHero from "@/assets/ai-pc-hero.jpg";
import ImpactMetrics from "@/components/ImpactMetrics";
import KeyDecisions from "@/components/KeyDecisions";

const projectData = {
  "ai-pc": {
    title: "AI PC Envisioning",
    subtitle: "用研究與故事，替公司畫出下一代 AI PC 的可能樣貌",
    tagline: "在市場標準尚未成形前，透過 Kano 問卷與實機工作坊，為公司描繪 2-3 年內 AI PC 的合理願景",
    heroImage: aiPcHero,
    role: "Senior UX / Product Designer（個人貢獻者）",
    team: "PM × ID × 新創硬體夥伴",
    duration: "2024 Q2 – Q4",
    challenges: [
      {
        title: "怎麼避免變成「很酷但不會真的做」的 AI 幻想？",
        description: "講 AI 很容易講到太遠，高層可能覺得：「聽起來很好，但我們現在到底該做什麼？」我在所有輸出中，把每一個功能／情境標記為 Now（立刻可納入）、Next（需要新硬體）、Beyond（長期策略），讓提案不是「要嘛全做，要嘛全不做」，而是可以討論「先從哪一層開始」。結果：高層能同時看到短中長期可能性，更容易做出先支持哪些 POC 的決策。",
      },
      {
        title: "如何讓 UX 的成果被持續使用？",
        description: "研究型專案常見風險是報告做得很厚，結論卻沒有真正走進決策流程。我刻意把輸出分別對齊三個對象：對 PM 提供新產品機會敘事與功能優先序圖；對 ID/硬體團隊提供情境板與互動草圖；對高層用故事型簡報而非研究報告。結果：這些輸出在專案結束後持續被引用，後續 AI 類專案 UX 更早被拉進討論。",
      },
    ],
    decisions: [
      {
        title: "Phase 1：用 Kano 問卷量化「什麼功能值得做？」",
        situation: "在眾多可能的 AI PC 功能中，先釐清：哪些是「必須有」、哪些是「加分」、哪些是「真正能讓人眼睛一亮」？",
        options: [
          "直接訪談：深入但樣本小，難以量化優先序",
          "市場調查：數據多但缺乏對未來功能的想像",
          "Kano 模型問卷：結合量化與功能分類，能識別基本型/期望型/魅力型功能",
        ],
        decision: "採用 Kano 模型問卷，針對多組潛在 AI PC 功能評估（自動情境切換、AI 輔助整理文件、主動預先準備會議內容、自動效能散熱調節等）。每個功能以「有這功能」與「沒有這功能」兩種問題詢問使用者感受，最後依 Kano 類型與偏好強度組合出 Top 10 AI PC 創新功能排序。",
        result: "萃取出 AI PC Top 10 創新功能排序清單，每項功能搭配 Kano 類型與重要程度。發現多數使用者更在意減少應用程式切換、幫忙整理資訊脈絡、長時間工作的穩定性，而非單純炫技。PM 獲得有數據支持的功能優先序，ID 理解硬體創新應優先支援哪類情境。",
      },
      {
        title: "Phase 2：結合樣機與共創，具象化 AI PC 使用情境",
        situation: "有了功能優先序後，需要判斷主動式自適應散熱結構與觸控式實體鍵盤這兩項技術，如何與 AI PC 功能情境結合才真的有用，而不只是酷炫？",
        options: [
          "純概念討論：快速但缺乏實體感受",
          "等硬體完成再測試：真實但時間太晚無法影響方向",
          "用樣機進行團體訪談+共創：在技術可行性與使用者想像間找平衡",
        ],
        decision: "設計一系列 workshop，邀請內部成員與代表性使用者實際操作可調整高度樣品機與觸控鍵盤樣機。以「一天的工作流程」為主軸，討論在哪些關鍵時刻希望 AI PC 主動幫忙，以及 AI Agent 應該怎麼出現、用什麼介面互動。圍繞 AI Launcher 討論各種介面形式（實體按鍵、觸控手勢、螢幕邊緣、主動建議）。",
        result: "產出 AI PC 關鍵使用情境分層（Before you start 預先準備型、While you work 共作支援型、After you finish 收斂總結型），每組對應具體 AI 功能、硬體支援需求與使用者價值。這些輸出成為 PM 新產品機會簡報中的情境故事，以及評估 POC 時的情境驗收條件。",
      },
      {
        title: "策略型 IC 角色定位：不只執行研究，而是共同定義未來",
        situation: "傳統 UX 角色容易被視為「研究執行者」或「介面美化者」，在策略性專案中影響力有限。如何讓 UX 成為決策的策略夥伴？",
        options: [
          "專注於研究執行，產出完整報告後交給 PM",
          "只負責介面設計，等產品方向確定後再加入",
          "擔任研究架構設計者、高層提案故事設計者、UX 價值推動者",
        ],
        decision: "重新定義自己的角色為策略型 IC：規劃兩階段研究架構（Kano 量化 + 實機共創）、整合問卷結果與訪談洞察組織成 PM 可直接簡報的新產品機會敘事、刻意讓輸出同時服務 PM（決策）、ID（設計靈感）、新創夥伴（情境對齊）。",
        result: "UX 團隊能見度提升，後續 AI 類專案更早被邀請參與，不再被視為只處理畫面與易用性，而是「在公司沒有標準答案的時候，設計一套方法讓大家一起看清楚未來」的角色。專案輸出持續被 PM、BD 與 ID 引用。",
      },
    ],
    impact: [
      { label: "產品方向清晰度", value: 85, unit: "%", description: "PM 與高層對 AI PC 投資方向的共識提升" },
      { label: "UX 早期參與", value: 60, unit: "%", description: "後續策略性專案 UX 提前介入比例增加" },
      { label: "決策支援文件使用率", value: 90, unit: "%", description: "輸出文件在後續專案中被引用比例" },
    ],
    nextProject: {
      id: "drone-ux",
      title: "Drone UX",
    },
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId as keyof typeof projectData];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        <div className="relative h-full flex items-end pb-24 px-6" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="container mx-auto max-w-6xl">
            <Button
              variant="ghost"
              className="mb-8"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-primary mb-6">
              {project.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">MY ROLE</h3>
              <p className="text-foreground">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">TEAM</h3>
              <p className="text-foreground">{project.team}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">DURATION</h3>
              <p className="text-foreground">{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">專案背景：在市場還沒定義 AI PC 之前</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              專案啟動時，市場上對「AI PC」的想像大多停留在幾個關鍵字：有 Copilot、有 NPU、效能更強。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              但對使用者來說，<strong className="text-foreground">AI PC 在日常工作中應該扮演什麼角色？</strong>對公司來說，<strong className="text-foreground">值得投入長期資源的 AI PC，是什麼樣的產品線？</strong>
            </p>
            <div className="bg-muted/30 rounded-lg p-8 my-8">
              <p className="text-xl text-primary font-semibold">
                「我們要的是一台會主動幫使用者工作、懂得使用脈絡的 AI PC，而不是一台只是『裝了 AI』的電腦。」
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              這也決定了之後研究與提案的方向：不是先畫 UI，而是先<strong className="text-foreground">定義「什麼值得做？」</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Role and Mandate */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">我的任務與角色：策略型 IC，而不是畫面支援</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">被賦予的任務（Mandate）</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>在市場標準尚未成形前，<strong className="text-foreground">幫公司描繪 2–3 年內 AI PC 的合理願景</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>用質性與量化資料，說出一個高層聽得懂、願意投資的故事</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>協助 PM 將這個願景轉化為可拿去向老闆提案的新產品機會框架</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">我的角色（My Role）</h3>
              <p className="text-lg text-muted-foreground mb-6">
                在這個專案中，我以 <strong className="text-foreground">Senior UX / Product Designer（個人貢獻者）</strong> 的身份，主要負責：
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">研究架構設計者</h4>
                    <p className="text-muted-foreground">規劃兩階段研究：Kano 問卷量化 + 實機共創驗證</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">高層提案的故事設計者</h4>
                    <p className="text-muted-foreground">整合洞察組織成 PM 可直接簡報的新產品機會敘事</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">UX 價值的推動者</h4>
                    <p className="text-muted-foreground">讓輸出同時服務 PM、ID 與新創夥伴的決策需求</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">專案目標與 KPI：不是上線成效，而是決策質量</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">專案目標（Goals）</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>找出對我們目標使用者而言，<strong className="text-foreground">真正有價值的 AI PC 功能與情境</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>幫 PM 整理一套可以拿去說服老闆的 <strong className="text-foreground">AI PC 投資論述</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>讓 ID 與硬體團隊能基於真實情境評估新技術是否值得投入</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">成果摘要（Outcomes）</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">萃取出一份 <strong className="text-foreground">AI PC Top 10 創新功能排序清單</strong>，每項功能搭配其 Kano 類型與重要程度</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">產出 AI PC 關鍵使用情境分層與 AI Agent / AI Launcher 初步概念</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">協助 PM 形成具體、可行的提案骨架與投資論述</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">讓 UX 團隊成為策略性專案中<strong className="text-foreground">更早被邀請的決策夥伴</strong></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 - Kano */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Phase 1：用 Kano 問卷量化「什麼功能值得做？」</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">研究目的</h3>
              <div className="bg-background/50 rounded-lg p-6">
                <p className="text-lg text-muted-foreground">
                  在眾多可能的 AI PC 功能中，先釐清：<strong className="text-foreground">哪些是「必須有」、哪些是「加分」、哪些是「真正能讓人眼睛一亮」？</strong>
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Kano 研究方法示意圖</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">方法設計：Kano 模型問卷</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                以 Kano 模型為基礎，設計問卷項目：每個功能都以「有這功能」與「沒有這功能」兩種問題形式詢問使用者感受
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                針對多組潛在 AI PC 功能進行評估，包括：
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground ml-6">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>自動情境切換（工作／娛樂／會議）</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>AI 輔助整理文件與資料</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>主動預先準備會議內容</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>自動效能／散熱調節</span>
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Kano 問卷設計與功能分類圖表</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">分析與輸出</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Must-be（基本型）</h4>
                    <p className="text-sm text-muted-foreground">沒有會生氣、有了覺得理所當然</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Performance（期望型）</h4>
                    <p className="text-sm text-muted-foreground">多一點會加分，少一點會扣分</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Delighter（魅力型）</h4>
                    <p className="text-sm text-muted-foreground">有會驚喜、沒有也不會抱怨</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-muted-foreground">
                依據使用者偏好強度與類型，組合出一個 <strong className="text-foreground">Top 10 AI PC 創新功能排序</strong>
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Top 10 AI PC 功能排序表格</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">關鍵 Insight</h3>
              <div className="bg-primary/10 border-l-4 border-l-primary rounded-r-lg p-6">
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>一些看似「很炫」的 AI 功能，在 Kano 分類中其實落在「Indifferent（無感）」</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>多數使用者更在意減少應用程式切換、幫忙整理資訊脈絡、長時間工作的穩定性</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">這一階段對 PM / ID 的價值</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">對 PM</h4>
                    <p className="text-muted-foreground">不再只是「覺得某功能很酷」，而是有數據支持哪些功能是一定要做、哪些是差異化賣點</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">對 ID</h4>
                    <p className="text-muted-foreground">理解未來硬體創新應優先支援哪幾類被使用者視為期望或魅力的 AI 情境</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 - Prototyping */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Phase 2：結合樣機與共創，具象化 AI PC 的使用情境</h2>
          
          <div className="space-y-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              在有了功能優先序與大方向後，我們進入第二階段：<strong className="text-foreground">用實體樣品機與團體訪談，把「未來 AI PC」演給大家看。</strong>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">當時的技術與合作背景</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">主動式自適應散熱結構</h4>
                    <p className="text-sm text-muted-foreground">來自新創硬體夥伴</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">觸控式實體鍵盤</h4>
                    <p className="text-sm text-muted-foreground">國際新創公司</p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-background/50 rounded-lg p-6 mt-6">
                <p className="text-lg text-muted-foreground">
                  專案目標之一：判斷這兩項技術如何與我們定義的 AI PC 功能與情境結合，才不會只是酷炫，是真的有用？
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">樣機工作坊現場照片</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">活動設計：團體訪談＋共創工作坊</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                我設計了一系列 workshop，邀請內部成員與代表性使用者，一起：
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground ml-6 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>實際操作可調整高度的樣品機（模擬主動散熱結構）</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>實際操作能感應與觸控的實體鍵盤樣機</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>以「一天的工作流程」為主軸討論 AI PC 應該在哪些時刻主動幫忙</span>
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">工作坊流程與參與者互動照片</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">AI Agent 與 AI Launcher 概念發想</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                在工作坊中，我引導大家從「工具」轉為「夥伴」思考：不只是「我呼叫一次 AI，它回我一次」，而是「AI Agent 能不能在你忙碌時，幫你先準備好需要的東西？」
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                我們圍繞 <strong className="text-foreground">AI Launcher</strong> 討論各種介面形式：
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground">• 實體鍵盤上的特定按鍵／按壓手勢</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground">• 觸控鍵盤不同區域的觸發行為</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground">• 螢幕邊緣的滑出入口／浮層</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground">• 系統狀態觸發的主動建議</p>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <p className="text-muted-foreground">AI Launcher 概念草圖與互動方式</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                最後整理成幾組概念：
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Before you start</h4>
                    <p className="text-sm text-muted-foreground">預先準備型情境</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">While you work</h4>
                    <p className="text-sm text-muted-foreground">共作支援型情境</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-primary">After you finish</h4>
                    <p className="text-sm text-muted-foreground">收斂總結型情境</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground mt-6">
                每一組都對應到：具體 AI 功能、需要的硬體支援、使用者感受與價值
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">AI PC 使用情境分層架構圖</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">對 PM 的直接幫助</h3>
              <div className="bg-primary/10 rounded-lg p-6">
                <p className="text-lg text-muted-foreground">
                  Phase 2 的輸出，成為 PM 的「新產品機會」簡報中的情境故事，以及評估 POC 時的<strong className="text-foreground">情境與驗收條件</strong>，而不只是規格數字
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.challenges.map((challenge, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Key Design Decisions</h2>
          <KeyDecisions decisions={project.decisions} />
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Impact</h2>
          <ImpactMetrics metrics={project.impact} />
        </div>
      </section>

      {/* AI & ESG Usage */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">我如何在過程中運用 AI 與思考 ESG</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">AI 在我工作流程中的角色</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                在這個專案中，我不是只把 AI 當成產品功能，也把它當成設計工具的一部分：
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>使用 GPT 協助整理 Kano 問卷中的開放式回應與訪談逐字稿，加速萃取關鍵期待與疑慮</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>請 AI 模擬不同 persona 的一天，當成工作坊情境草稿，之後再用真實資料修正</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>用生成式影像工具快速產生不同 AI Launcher / AI Agent 視覺方向，作為共創時的刺激素材</span>
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">AI 輔助設計流程示意圖</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">ESG：不是這個案子的核心，但成為未來延伸視角</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                這個專案本身沒有直接標榜 ESG，但在分析 AI PC 情境時，我額外保留了兩個視角，作為未來延伸的基礎：
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">環境（Environment）</h4>
                    <p className="text-muted-foreground">AI 工作負載與能耗高度相關，未來可以進一步設計能耗可視化與不造成負擔的節能模式建議</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">治理（Governance）</h4>
                    <p className="text-muted-foreground">AI PC 長期收集與預測使用脈絡，勢必牽涉資料隱私與使用者信任，可延伸為「AI 透明度與控制權」的 UX 設計主題</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">回顧：我從這個專案學到的事</h2>
          
          <div className="bg-primary/10 rounded-lg p-8 mb-8">
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
              在沒有人知道標準答案的題目裡，UX 的價值不是提供一個「完美解答」，而是設計一個<strong className="text-primary">「有憑有據、可以被討論與迭代的未來版本」</strong>。
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              在這個 AI PC 專案裡，我練習並驗證了幾件事：
            </p>
            <ul className="space-y-4 text-lg text-muted-foreground ml-6">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>研究不是為了寫厚厚的報告，而是為了讓決策有更好的問題 framing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>「說服高層」需要的不是更多畫面，而是更清楚的<strong className="text-foreground">故事與風險分層</strong>（Now / Next / Beyond）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>UX 如果能同時為 PM、ID 與新創夥伴提供可用的輸出，就能自然提升在組織裡的影響力</span>
              </li>
            </ul>
            <div className="bg-secondary/50 rounded-lg p-6 mt-8">
              <p className="text-lg text-foreground">
                這也是我希望在未來的 Senior / Staff 等級職位中持續扮演的角色：<strong className="text-primary">讓模糊的未來變得可以對話、可以決策，也可以一步步被實現。</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">NEXT PROJECT</p>
              <h3 className="text-3xl font-bold text-foreground">Drone UX</h3>
            </div>
            <Button size="lg" onClick={() => navigate(`/project/${project.nextProject}`)}>
              View Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
