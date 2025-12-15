import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroState {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
}

const heroStates: HeroState[] = [
  {
    id: "ai-pc",
    label: "AI PC",
    title: "AI PC Envisioning",
    description: "用研究與情境故事勾勒 AI PC 願景，定義關鍵使用體驗與功能方向",
    tags: ["AI PC Vision", "Strategic UX", "UX Research"],
  },
  {
    id: "drone-ux",
    label: "Drone UX",
    title: "Drone UX｜Ground Control Station",
    description: "與無人機大廠協作，打造易上手又可靠的地面控制站 UX 與操作流程",
    tags: ["Drone GCS UX", "Control UI", "B2B Partnering"],
  },
  {
    id: "service-robots",
    label: "Service Robots",
    title: "AMR Robot｜Service Platform",
    description: "從競品研究到前後台與場域驗證，整合多場域服務機器人的完整體驗",
    tags: ["Service Robots", "Fleet Control", "Field UX Study"],
  },
];

const HeroInteractive = () => {
  const [activeId, setActiveId] = useState("ai-pc");
  const activeState = heroStates.find((s) => s.id === activeId) || heroStates[0];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Subtle tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Identity & Copy */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                幫團隊處理複雜題目的
                <br />
                Product / UX 設計夥伴
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                Jack Chen｜專注 B2B 與系統型產品，用研究與故事讓決策更踏實
              </h2>
              <p className="text-base text-muted-foreground/80 max-w-lg">
                多數時間在 B2B 與系統型產品裡擔任 Product / UX 設計師，看題目時不只站在設計端，而是從公司與產品策略的角度思考
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="text-base font-medium"
              >
                查看精選專案
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base font-medium"
              >
                <Link to="/about">認識我的設計思維</Link>
              </Button>
            </div>

            {/* Tag Filter Row */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">探索代表專案：</p>
              <div className="flex flex-wrap gap-3">
                {heroStates.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setActiveId(state.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      "border hover:scale-105 hover:shadow-md",
                      activeId === state.id
                        ? "bg-primary text-primary-foreground border-primary shadow-lg"
                        : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-muted/50"
                    )}
                  >
                    {state.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Dynamic Content Panel */}
          <div className="relative">
            <div
              key={activeState.id}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg animate-fade-in"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-center text-muted-foreground/60">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {activeState.title}
                </h3>
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
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInteractive;
