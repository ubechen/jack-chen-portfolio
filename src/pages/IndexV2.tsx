import { useCallback, useEffect, useState, useRef } from "react";
import { Head } from "vite-react-ssg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import HeroAnimatedBackgroundResponsive from "@/components/HeroAnimatedBackgroundResponsive";
import JackAbout from "@/assets/Jack_about.webp";
import heroAiPc from "@/assets/bg_index_hero_aipc.webp";
import heroDrone from "@/assets/bg_index_hero_drone.webp";
import heroAmr from "@/assets/bg_index_hero_amr.webp";
import heroEsg from "@/assets/bg_index_hero_esg.webp";

interface HeroState {
  id: string;
  projectId: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const heroStates: HeroState[] = [
  {
    id: "ai-pc",
    projectId: "ai-pc",
    label: "AI PC",
    title: "AI PC｜Research & Vision",
    description: "以研究與情境敘事勾勒 AI PC 願景，定義體驗與功能優先序",
    tags: ["AI PC Vision", "Strategic UX", "UX Research"],
    image: heroAiPc,
  },
  {
    id: "drone",
    projectId: "drone",
    label: "Drone UX",
    title: "Drone System｜Control Experience",
    description: "與無人機大廠協作，設計高可靠控制站 UX 與操作流程",
    tags: ["Drone GCS UX", "Control System", "B2B"],
    image: heroDrone,
  },
  {
    id: "service-robots",
    projectId: "amr-robot",
    label: "Service Robots",
    title: "Wifundity AMR｜Service System Design",
    description: "從競品研究到前後台設計，跨商場醫院飯店驗證營運體驗",
    tags: ["Service Robot", "Operations Dashboard", "B2B2C"],
    image: heroAmr,
  },
  {
    id: "esg-board-game",
    projectId: "esg-board-game",
    label: "ESG Game",
    title: "Wi-Thrive｜ESG Storytelling Game",
    description: "將永續議題做成易懂 ESG 桌遊，支援招募內訓與品牌溝通",
    tags: ["ESG Storytelling", "Board Game", "Gen AI Visuals"],
    image: heroEsg,
  },
];

// 經歷卡片資料
const experienceCards = [
  {
    title: "8+ 年系統產品經驗",
    content: "B2B2C、B2B、B2C 都做過\n從 0 到 1 有落地、也有失敗",
  },
  {
    title: "研究轉化為影響力",
    content: "未來產品功能、情境流程優先序\n支援國際提案，讓 UX 成為策略夥伴",
  },
  {
    title: "概念走到市場",
    content: "緯創概念筆電、無人機於國際展出\n復健產品跨域推廣",
  },
];

// 價值卡片資料
const valueCards = [
  {
    title: "UX 專業能力",
    items: [
      "User Research：訪談、問卷、工作坊",
      "資訊架構與流程設計",
      "Wireframe、Prototype 到 GUI 交付",
      "易用性測試與迭代優化",
    ],
  },
  {
    title: "決策前段的角色",
    items: [
      "對 PM：提案故事骨架、功能優先序",
      "對工程/硬體：情境轉流程、考慮技術範圍",
      "對決策者：複雜問題翻譯成可理解的選項",
    ],
  },
  {
    title: "我帶來的專案影響",
    items: [
      "降低不確定性：先對齊目標再開始設計",
      "促進跨部門合作：在不同角色之間搭橋",
      "從全局思考：平衡各方需求展現設計價值",
    ],
  },
];

const IndexV2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);

  const activeState = heroStates[selectedIndex];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Jack Chen | Product / UX 設計夥伴</title>
        <meta
          name="description"
          content="我是 Jack，8+ 年複雜產品設計經驗。專注在決策前段，幫團隊把問題想清楚，用研究和故事讓方向可以被討論與執行。"
        />
        <meta property="og:title" content="Jack Chen | Product / UX 設計夥伴" />
        <meta
          property="og:description"
          content="把模糊變明確的 Product / UX 設計夥伴"
        />
        <meta property="og:image" content="/images/og-index.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jack-chen-portfolio.lovable.app/index-v2" />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden bg-muted/40">
        {/* Subtle tech-inspired background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        {/* 動態 SVG 背景 */}
        <div className="text-muted-foreground absolute inset-0 pointer-events-none z-0">
          <HeroAnimatedBackgroundResponsive />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Mobile/Tablet Layout (< 1024px) */}
          <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh]">
            <div className="space-y-4 relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.2] md:leading-[1.2]">
                把模糊變明確的
                <br />
                Product / UX 設計夥伴
              </h1>
              <div className="space-y-2 text-base md:text-lg text-muted-foreground/80">
                <p>我是 Jack，8+ 年複雜產品設計經驗</p>
                <p>專注在決策前段，幫團隊把問題想清楚</p>
                <p>用研究和故事，讓方向可以被討論與執行</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="hero"
                onClick={() => scrollToSection("#projects")}
                className="text-base font-medium"
              >
                <span className="relative z-10">精選案例</span>
              </Button>
              <Link to="/resume">
                <Button
                  size="lg"
                  variant="heroOutline"
                  className="text-base font-medium"
                >
                  <span className="relative z-10">履歷表</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Identity & Copy */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] md:leading-[1.2] lg:leading-[1.2]">
                  把模糊變明確的
                  <br />
                  Product / UX 設計夥伴
                </h1>
                <div className="space-y-2 text-base md:text-lg text-muted-foreground/80">
                  <p>我是 Jack，8+ 年複雜產品設計經驗</p>
                  <p>專注在決策前段，幫團隊把問題想清楚</p>
                  <p>用研究和故事，讓方向可以被討論與執行</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={() => scrollToSection("#projects")}
                  className="text-base font-medium"
                >
                  <span className="relative z-10">精選案例</span>
                </Button>
                <Link to="/resume">
                  <Button
                    size="lg"
                    variant="heroOutline"
                    className="text-base font-medium"
                  >
                    <span className="relative z-10">履歷表</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Project Carousel */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                {/* Image Carousel Area */}
                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="flex">
                      {heroStates.map((state) => (
                        <div key={state.id} className="flex-[0_0_100%] min-w-0">
                          <Link to={`/project/${state.projectId}`}>
                            <div className="aspect-video rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                              {state.image ? (
                                <img
                                  src={state.image}
                                  alt={state.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                                  <div className="text-center text-muted-foreground/60">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                      <span className="text-2xl">🎯</span>
                                    </div>
                                    <p className="text-sm">Project Preview</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-md"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-md"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Content - Updates based on carousel position */}
                <div className="space-y-4">
                  <Link
                    to={`/project/${activeState.projectId}`}
                    className="block hover:text-primary transition-colors"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {activeState.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeState.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeState.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-2 pt-4">
                    {heroStates.map((state, index) => (
                      <button
                        key={state.id}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          selectedIndex === index
                            ? "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-end))] w-6"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll down arrow */}
        <button
          onClick={() => scrollToSection("#about-me")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-foreground/60 hover:text-foreground transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* 我是誰（不顯示區塊標題） */}
      <ScrollReveal>
        <section id="about-me" className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* 圓形人物照 */}
              <div className="flex-shrink-0">
                <img
                  src={JackAbout}
                  alt="Jack Chen"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                />
              </div>
              {/* 文字內容 */}
              <div className="space-y-4 text-center md:text-left">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  過去在科技製造業主要開發系統型和複雜產品，經常參與專案的早期階段，當需求很模糊、方向還沒定的時候
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我的角色通常不是衝最快的執行者，而是幫團隊少走叉路、避免做錯關鍵決定的人
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 我的經歷 */}
      <ScrollReveal>
        <section className="py-16 md:py-24 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              我的經歷
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {experienceCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 我帶來的價值 */}
      <ScrollReveal>
        <section className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              我帶來的價值
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {valueCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {card.title}
                    </h3>
                    <ul className="space-y-2">
                      {card.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-muted-foreground text-sm leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* CTA Button */}
            <div className="text-center">
              <Link to="/about">
                <Button size="lg" variant="outline" className="group">
                  How I Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default IndexV2;
