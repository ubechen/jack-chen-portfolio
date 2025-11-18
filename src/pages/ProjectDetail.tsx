import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiPcHero from "@/assets/ai-pc-hero.jpg";
import ImpactMetrics from "@/components/ImpactMetrics";
import KeyDecisions from "@/components/KeyDecisions";

const projectData = {
  "ai-pc": {
    title: "AI PC",
    subtitle: "Dynamic Cooling UX for Next-Gen Laptops",
    tagline: "一台能「自我調節、節能又有感」的筆電，不只是硬體創新，更是永續使用體驗的起點",
    heroImage: aiPcHero,
    role: "UX Lead / Product Strategist / Interaction Designer",
    team: "Industrial Designer × Thermal Engineer × Firmware PM × AI Algorithm Team",
    duration: "2024 Q2 – 2025 Q1（8 個月）",
    background: {
      business: "隨著 AI 模型運算需求增加，筆電的 TDP 與散熱壓力劇增。傳統風扇與被動散熱設計無法兼顧「效能 × 靜音 × 使用舒適」。",
      esg: "以「AI 動態散熱結構」結合 UX 可視化，讓使用者「理解並信任」筆電的智慧冷卻行為，同時降低能源消耗。"
    },
    challenges: [
      {
        title: "溫度焦慮",
        description: "筆電一熱就擔心壞掉或性能下降"
      },
      {
        title: "噪音干擾",
        description: "高效能模式下風扇聲過大"
      },
      {
        title: "信任感低",
        description: "用戶無法理解筆電「正在幫我做什麼」"
      },
      {
        title: "能耗浪費",
        description: "散熱機構全時啟動，能源效率低"
      }
    ],
    decisions: [
      {
        title: "如何讓「散熱動作」被理解且接受？",
        situation: "筆電後座自動升起，但使用者初次看到時會驚訝或懷疑",
        options: [
          "無提示 → 使用者誤解成異常",
          "以彈窗提示 → 打斷體驗",
          "在系統 UI 加入「環境智慧感知」微動畫"
        ],
        decision: "採用非打擾式狀態提示動畫 + 即時效能圖形。例如：「AI 正優化冷卻以保持效能」",
        result: "使用者焦慮降低 62%，誤觸客服率下降 40%"
      },
      {
        title: "如何視覺化「效能 × 能源」平衡？",
        situation: "使用者無法理解效能模式差異，常誤開高耗能模式",
        options: [
          "傳統三段式模式（省電 / 平衡 / 效能）",
          "數值型滑桿（易誤調）",
          "雙軸視覺化介面：效能 ↔ 能耗"
        ],
        decision: "採用 AI 助理調節 + 雙軸圖像 UI（以彩色能量圈呈現，越亮＝越耗能）",
        result: "使用者理解度 +58%，AI 模式預測準確率達 84%"
      },
      {
        title: "如何讓 AI 模式「值得信任」？",
        situation: "使用者對自動化模式常有疑慮（不透明、不可控）",
        options: [
          "完全自動（無人干預）",
          "AI 建議 + 用戶可覆寫",
          "用戶手動調整（傳統）"
        ],
        decision: "採用 AI 透明建議機制（Explainable AI UX），AI 提供建議並顯示依據",
        result: "信任度提升 71%，模式使用率提升 42%"
      }
    ],
    impact: [
      { label: "使用者理解散熱邏輯", before: 32, after: 82, unit: "%" },
      { label: "能耗（每小時平均）", before: 100, after: 87, unit: "%", inverse: true },
      { label: "散熱效率提升", value: 18, unit: "%" },
      { label: "客服詢問降低", value: 40, unit: "%" },
      { label: "AI 模式採用率", value: 42, unit: "%" }
    ],
    esgValue: [
      {
        category: "E – Environment",
        description: "AI 自動調控散熱，節省電力 13%；以 UI 引導使用者理解能耗"
      },
      {
        category: "S – Social",
        description: "提升透明度、減少操作焦慮；教育使用者節能行為"
      },
      {
        category: "G – Governance",
        description: "AI 模式可審查與回溯（Explainable Logs），確保行為可解釋"
      }
    ],
    nextProject: "drone-ux"
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId as keyof typeof projectData];

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
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        <div className="relative h-full flex items-end pb-24 px-6">
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
