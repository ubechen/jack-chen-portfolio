import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import aiPcHero from "@/assets/bg_project_aipc.webp";
import DroneUXContent from "@/components/projects/DroneUXContent";

const projectData = {
  "ai-pc": {
    title: "AI PC Envisioning",
    subtitle: "用研究和故事，勾勒出下一代的 AI PC 藍圖",
    heroImage: aiPcHero,
    role: "Strategic UX · Research & Vision",
    type: "策略探索／未來產品願景",
    summary: "在 AI PC 定義尚未成熟的階段，透過研究與分析 10 個創新功能排序與 3 組代表情境，幫助 PM 組成向高層提案的藍圖，也讓 ID、ME 團隊與新創夥伴以情境評估新技術價值，加速進入原型開發",
    duration: "2024 Q2 – Q4",
    nextProject: {
      id: "drone-ux",
      title: "Drone UX",
    },
  },
  "drone-ux": {
    title: "Drone UX",
    subtitle: "打造無人機地面控制站的使用體驗",
    heroImage: aiPcHero, // 暫用 AI PC 圖片，待替換
    role: "Product / UX / UI Designer（跨公司協作）",
    type: "B2B／國防與產業應用 · 控制站 UX",
    summary: "在公司從 AMR Robot 轉向無人機市場之際，與國內無人機大廠合作，聚焦地面控制站（手持控制器＋App）的 UX 與 POC，支援國際展會 demo 與國防標案機會，後續延伸至後台管理系統。",
    duration: "2024 Q2 – 2025 Q1",
    nextProject: {
      id: "amr-robot",
      title: "AMR Robot",
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
      <section className="relative min-h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.heroImage})`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        <div className="relative h-full flex items-end pt-32 pb-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Button
              variant="ghost"
              className="mb-8 relative overflow-hidden border border-white/50 text-white before:content-[''] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-white/20 before:transition-transform before:duration-300 before:ease-out hover:before:origin-left hover:before:scale-x-100 hover:bg-transparent hover:text-white"
              onClick={() => navigate("/#projects")}
            >
              <span className="relative z-10 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Projects
              </span>
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-6">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      <ScrollReveal>
        {/* Project Meta */}
        <section className="py-8 md:py-12 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">角色</h3>
                <p className="text-foreground font-medium">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">類型</h3>
                <p className="text-foreground">{project.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">期間</h3>
                <p className="text-foreground">{project.duration}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">簡述</h3>
              <p className="text-foreground leading-relaxed">{project.summary}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Conditional Content Rendering */}
      {projectId === "drone-ux" && <DroneUXContent />}

      {projectId === "ai-pc" && (
      <>
      <ScrollReveal delay={100}>
        {/* Section 1: Overview */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              1. Overview
              <span className="block text-xl font-normal text-muted-foreground mt-2">AI PC 在市場尚未被真正說清楚時</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                當時市場上對於「AI PC」的認知大多停留在：
              </p>
              
              <ul className="space-y-3 text-lg text-muted-foreground ml-4">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>微軟 Copilot+ 個人助理</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>具備 NPU，可在本地端離線處理 AI 任務</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>鍵盤上多了一顆 Copilot 專屬按鍵</span>
                </li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 my-8">
                <p className="text-xl text-foreground font-medium">
                  但還沒有人說得清楚 — 對使用者而言，AI PC 在日常工作中，實際能帶來什麼幫助？
                </p>
              </div>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">市場現況與競品分析示意圖</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  AI PC 市場定義與主要競品功能比較
                </figcaption>
              </figure>

              <div className="bg-secondary/50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">內部背景與挑戰</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  同時，內部 ID 與 ME 已設計出新型態散熱模組，並接觸國際新創夥伴（觸控實體鍵盤）；對 ODM 公司而言，更關鍵的問題是：
                </p>
                <p className="text-xl text-primary font-semibold">
                  值得投入長期資源的 AI PC，如何定義未來面貌？
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">我的任務</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  站在 UX 的位置，與不同利害關係人協作與溝通：
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">先幫公司定義一版<mark className="bg-primary/20 text-foreground px-1 rounded">「合理又有前瞻性」</mark>的 AI PC 願景</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">用研究與故事，幫 PM 組成一套可以<mark className="bg-primary/20 text-foreground px-1 rounded">說服高層的提案基礎</mark></p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">讓內部 ID 與 ME 團隊可以<mark className="bg-primary/20 text-foreground px-1 rounded">根據具體情境</mark>，而非只看規格評估新技術的價值</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">與新創夥伴用<mark className="bg-primary/20 text-foreground px-1 rounded">情境對齊</mark>可能合作方向</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-8 mt-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">核心觀點</p>
                <p className="text-2xl text-foreground font-semibold leading-relaxed">
                  「AI PC 是一台會主動幫使用者工作、懂得情境脈絡的好夥伴，而不僅是一台『裝了 AI app』的電腦」
                </p>
                <p className="text-muted-foreground mt-4">
                  這也決定了之後研究與提案的方向：先定義「什麼值得做？」
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section 2: My Role */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              2. My Role
              <span className="block text-xl font-normal text-muted-foreground mt-2">服務不同對象，協助大家看清題目</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              身為 <strong className="text-foreground">Senior UX / Product Designer</strong>，我在這個專案主要扮演三個角色：
            </p>

            <div className="space-y-6">
              {/* Role 1 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">01</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">研究架構設計者</h3>
                      <p className="text-muted-foreground mb-4">規劃三階段方法：</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Phase 1</p>
                          <p className="text-sm text-muted-foreground">市場調查與 TA 訪談 → 分析市場和一手/二手資料</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Phase 2</p>
                          <p className="text-sm text-muted-foreground">Kano 問卷與分析 → 量化不同族群對 AI PC 創新功能的優先序</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Phase 3</p>
                          <p className="text-sm text-muted-foreground">實機團體訪談＋腦力激盪共創 → 針對具體情境展開 AI Agent / Launcher 概念</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 2 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">02</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">故事與決策框架設計者</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>把研究結果整理成 PM 可直接拿去提案的<mark className="bg-primary/20 text-foreground px-1 rounded">「新產品機會敘事」</mark></span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>協助把模糊的 AI 願景，拆成<mark className="bg-primary/20 text-foreground px-1 rounded">短、中、長期三層路線</mark></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 3 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">03</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">UX 價值推進者</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>全盤考量如何同時幫助 PM、ID／ME 團隊與新創夥伴各自的決策需求</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>讓 UX 在之後 AI 類專案中，從<mark className="bg-primary/20 text-foreground px-1 rounded">「後期支援」</mark>轉變為<mark className="bg-primary/20 text-foreground px-1 rounded">「一開始就要一起定義題目的夥伴」</mark></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image Placeholder */}
            <figure className="-mx-4 md:mx-0 mt-10">
              <div className="aspect-[16/9] bg-muted md:rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">專案角色與協作關係圖</p>
              </div>
              <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                與 PM、ID、ME 及新創夥伴的協作網絡
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            3. What we did
            <span className="block text-xl font-normal text-muted-foreground mt-2">說出一個高層聽得懂、願意投資的故事</span>
          </h2>

          {/* 3.1 Kano */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-primary/20">3.1</span>
              <h3 className="text-2xl font-semibold text-foreground">Kano 問卷：釐清「什麼 AI 功能值得先做」</h3>
            </div>

            <div className="space-y-6">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>以問卷評估 <strong className="text-foreground">10 個潛在 AI PC 功能</strong>（主軸關於與 AI 助理互動模式、情境切換、主動散熱等）</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>將結果分類為<mark className="bg-primary/20 text-foreground px-1 rounded">基本、期望、吸引、無差異、反向型</mark>功能，整理創新功能排序清單</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>幫助 PM 用數據去判斷「先從哪幾個 AI 功能開始」</span>
                </li>
              </ul>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">Kano 問卷設計與功能分類圖表</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  10 個潛在功能的 Kano 分類結果
                </figcaption>
              </figure>

              {/* Kano Types */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-primary mb-1">Must-be 基本型</p>
                  <p className="text-sm text-muted-foreground">沒有會生氣、有了覺得理所當然</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-primary mb-1">Performance 期望型</p>
                  <p className="text-sm text-muted-foreground">多一點會加分，少一點會扣分</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-primary mb-1">Delighter 魅力型</p>
                  <p className="text-sm text-muted-foreground">有會驚喜、沒有也不會抱怨</p>
                </div>
              </div>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-[16/10] bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">Top 10 AI PC 功能排序表格</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  創新功能優先序與投資建議
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-16"></div>

          {/* 3.2 Workshop */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-primary/20">3.2</span>
              <h3 className="text-2xl font-semibold text-foreground">實機工作坊：模擬未來 AI PC 情境</h3>
            </div>

            <div className="space-y-6">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>結合<mark className="bg-primary/20 text-foreground px-1 rounded">主動式自適應散熱樣機</mark>與<mark className="bg-primary/20 text-foreground px-1 rounded">觸控實體鍵盤</mark>，舉辦團體訪談＋腦力激盪工作坊</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>以<strong className="text-foreground">「一天的流程」</strong>探討：AI 助理應在何時、用什麼方式主動協助使用者</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>發展出 AI Agent 與 AI Launcher 的 <strong className="text-foreground">3 組核心情境</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>情境以 PM 提案故事為主軸，也讓 ID 以真實情境評估新硬體設計方向</span>
                </li>
              </ul>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">工作坊現場照片與互動過程</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  結合實機樣品的團體訪談與腦力激盪
                </figcaption>
              </figure>

              {/* 3 Scenarios */}
              <div className="bg-secondary/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-6 text-foreground">AI Agent / AI Launcher 三組核心情境</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <h5 className="text-lg font-semibold text-primary mb-2">Before you start</h5>
                      <p className="text-sm text-muted-foreground">預先準備型情境：AI 在你開始工作前，主動準備好需要的資料與脈絡</p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <h5 className="text-lg font-semibold text-primary mb-2">While you work</h5>
                      <p className="text-sm text-muted-foreground">共作支援型情境：AI 在你工作過程中即時提供協助與建議</p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <h5 className="text-lg font-semibold text-primary mb-2">After you finish</h5>
                      <p className="text-sm text-muted-foreground">收斂總結型情境：AI 協助整理成果、回顧與歸檔</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-[16/9] bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">AI Agent 概念草圖與互動方式</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  AI Launcher 與 Agent 的情境展開
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      {/* Section 4: Challenges & Impact */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            4. Challenges & Impact
            <span className="block text-xl font-normal text-muted-foreground mt-2">實際帶來的改變</span>
          </h2>

          <div className="space-y-8">
            {/* Challenge 1 */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 1</span>
              </div>
              <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                避免變成「酷炫但沒資源做」的幻想
              </h3>
              <div className="bg-primary/5 rounded-lg p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">解決方式：</strong>所有功能與情境解釋其優先順序，讓決策者可以討論<mark className="bg-primary/20 text-foreground px-1 rounded">「先做哪幾步」</mark>，有階段性的 POC 規劃
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 2</span>
              </div>
              <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                讓 UX 成果不只是研究報告
              </h3>
              <div className="bg-primary/5 rounded-lg p-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">解決方式：</strong>針對不同對象（PM、ID/ME、新創夥伴）輸出可直接溝通的成果，滿足不同目的與需求
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">成果：</strong>後續 AI 類型專案啟動時，提升 UX 被重視程度，<mark className="bg-primary/20 text-foreground px-1 rounded">更早被邀請參與</mark>，被視為決策過程的一部分，而非單純支援角色
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <figure className="-mx-4 md:mx-0">
              <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">專案成果與影響力示意圖</p>
              </div>
              <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                研究成果如何轉化為決策工具
              </figcaption>
            </figure>

            {/* Impact Summary */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">10</p>
                <p className="text-sm text-muted-foreground">AI PC 創新功能<br />完成優先序排序</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">3</p>
                <p className="text-sm text-muted-foreground">AI Agent 核心情境<br />概念發展</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">↑</p>
                <p className="text-sm text-muted-foreground">UX 影響力提升<br />更早參與策略討論</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      {/* Section 5: AI & ESG */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            5. How I used AI / ESG as a lens
          </h2>

          {/* 5.1 AI */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-primary/20">5.1</span>
              <h3 className="text-2xl font-semibold text-foreground">AI 在這個專案是對象也同時是工具</h3>
            </div>

            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>整理質性問卷中的開放式回應與訪談逐字稿，<mark className="bg-primary/20 text-foreground px-1 rounded">加速統整分析見解</mark></span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>模擬不同 persona 的一天產出工作坊情境稿，再加入真實研究修正</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>使用生成式影像工具產出情境圖、AI Launcher / Agent 的方向，作爲共創素材</span>
              </li>
            </ul>

            {/* Image Placeholder */}
            <figure className="-mx-4 md:mx-0 mt-8">
              <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">AI 輔助設計流程示意圖</p>
              </div>
              <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                運用生成式 AI 加速研究與共創
              </figcaption>
            </figure>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-16"></div>

          {/* 5.2 ESG */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-primary/20">5.2</span>
              <h3 className="text-2xl font-semibold text-foreground">ESG 評估是未來延伸視角</h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              這個專案沒有直接以 ESG 為目標，但在思考 AI PC 情境時，保留兩個可能性：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-green-600">Environment 環境</h4>
                  <p className="text-muted-foreground">
                    高負載 AI 工作與能耗高度相關，未來可延伸爲<mark className="bg-green-500/20 text-foreground px-1 rounded">「能耗可視化與節能模式」</mark>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">Governance 治理</h4>
                  <p className="text-muted-foreground">
                    AI Agent 若長期在背景運作，勢必牽涉<mark className="bg-blue-500/20 text-foreground px-1 rounded">資料治理與透明度</mark>，值得在下一階段深入的主題
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      {/* Section 6: What I learned */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            6. What I learned
          </h2>

          <div className="bg-primary/10 rounded-xl p-8 mb-10">
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
              在沒有人知道正確答案的題目裡，UX 的價值不僅在於提升使用者體驗，而是有根據的設計出<mark className="bg-primary/30 text-foreground px-2 py-1 rounded">「可被討論與落地的未來版本」</mark>
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              讓 PM/高層、ID/ME、與合作夥伴願意一起往同一個方向前進
            </p>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              UX 如果能<strong className="text-foreground">同時滿足不同關係人的需求、提供可用的輸出</strong>，就能自然提升在組織裡的影響力
            </p>
            <p className="leading-relaxed">
              這也是我希望在未來的 Senior / Staff 等級職位中持續扮演的角色：
            </p>
            <div className="bg-background border-l-4 border-l-primary rounded-r-lg p-6">
              <p className="text-xl text-foreground font-medium">
                讓模糊的未來變得可以對話、可以決策，也可以一步步實現產品藍圖
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <figure className="-mx-4 md:mx-0 mt-10">
            <div className="aspect-[16/9] bg-muted md:rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center px-4">專案總結與個人成長回顧</p>
            </div>
            <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
              從策略探索到組織影響力提升
            </figcaption>
          </figure>
        </div>
      </section>
      </ScrollReveal>
      </>
      )}

      {/* Next Project */}
      {project.nextProject && (
        <section className="py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-muted-foreground mb-4">Next Project</p>
            <Button
              variant="heroOutline"
              size="lg"
              className="text-2xl md:text-3xl font-bold py-8 px-12"
              onClick={() => navigate(`/project/${project.nextProject.id}`)}
            >
              <span className="relative z-10 flex items-center">
                {project.nextProject.title}
                <ArrowRight className="ml-2 h-6 w-6" />
              </span>
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
