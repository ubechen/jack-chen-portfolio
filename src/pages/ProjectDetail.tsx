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

      {/* Background */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Background</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">商業目標</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.background.business}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">ESG 連結</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.background.esg}
              </p>
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

      {/* AI × ESG Value */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">AI × ESG 加值</h2>
          <div className="space-y-6">
            {project.esgValue.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {item.category}
                  </h3>
                  <p className="text-lg text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
