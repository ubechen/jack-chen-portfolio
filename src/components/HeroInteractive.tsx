import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface HeroState {
  id: string;
  projectId: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
}

const heroStates: HeroState[] = [
  {
    id: "ai-pc",
    projectId: "ai-pc",
    label: "AI PC",
    title: "AI PC｜Research & Vision",
    description: "用研究與情境故事勾勒 AI PC 願景，定義關鍵使用體驗與功能方向",
    tags: ["AI PC Vision", "Strategic UX", "UX Research"],
  },
  {
    id: "drone-ux",
    projectId: "drone-ux",
    label: "Drone UX",
    title: "Drone System｜Control Experience",
    description: "與無人機大廠協作，打造易上手又可靠的地面控制站 UX 與操作流程",
    tags: ["Drone GCS UX", "Control UI", "B2B Partnering"],
  },
  {
    id: "service-robots",
    projectId: "amr-robot",
    label: "Service Robots",
    title: "AMR Robot｜Service System Design",
    description: "從競品研究到前後台與場域驗證，整合多場域服務機器人的完整體驗",
    tags: ["Service Robots", "Fleet Control", "Field UX Study"],
  },
  {
    id: "esg-board-game",
    projectId: "esg-board-game",
    label: "ESG Game",
    title: "Wi-Thrive｜ESG Storytelling Game",
    description: "把企業永續轉成好玩易懂的 ESG 桌遊，串聯招募、內訓與品牌溝通",
    tags: ["ESG Storytelling", "Serious Game", "Generative AI Visuals"],
  },
];

const HeroInteractive = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
    <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden bg-muted/40">
      {/* Subtle tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile/Tablet Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh]">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.2] md:leading-[1.2]">
              幫團隊處理複雜題目的
              <br />
              Product / UX 設計夥伴
            </h1>
            <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
              Jack 專注 B2B 與系統型產品，用研究與故事讓決策更踏實
            </h2>
            <p className="text-base text-muted-foreground/80 max-w-lg mx-auto">
              多從「產品下一步要走哪裡」的角度思考設計，協助團隊對齊目標並做出可執行的選擇
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("#projects")}
              className="text-base font-medium"
            >
              <span className="relative z-10">View Projects</span>
            </Button>
            <Link to="/resume">
              <Button
                size="lg"
                variant="heroOutline"
                className="text-base font-medium"
              >
                <span className="relative z-10">View Resume</span>
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
                幫團隊處理複雜題目的
                <br />
                Product / UX 設計夥伴
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                Jack 專注 B2B 與系統型產品，用研究與故事讓決策更踏實
              </h2>
              <p className="text-base text-muted-foreground/80 max-w-lg">
                多從「產品下一步要走哪裡」的角度思考設計，協助團隊對齊目標並做出可執行的選擇
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="hero"
                onClick={() => scrollToSection("#projects")}
                className="text-base font-medium"
              >
                <span className="relative z-10">View Projects</span>
              </Button>
              <Link to="/resume">
                <Button
                  size="lg"
                  variant="heroOutline"
                  className="text-base font-medium"
                >
                  <span className="relative z-10">View Resume</span>
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
                          <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                            <div className="text-center text-muted-foreground/60">
                              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                              </div>
                              <p className="text-sm">Project Preview</p>
                            </div>
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
                          ? "bg-primary w-6"
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
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-foreground/60 hover:text-foreground transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroInteractive;
