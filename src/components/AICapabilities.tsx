import { Search, Lightbulb, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AICapabilities = () => {
  const capabilities = [
    {
      icon: Search,
      title: "AI Research",
      description: "運用 AI 工具進行使用者研究與數據分析",
    },
    {
      icon: Lightbulb,
      title: "AI Ideation",
      description: "透過 AI 輔助腦力激盪與創意發想",
    },
    {
      icon: GitBranch,
      title: "AI Evaluate Flow",
      description: "使用 AI 評估與優化使用者流程",
    },
  ];

  return (
    <section id="ai-ux" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          AI × UX 能力
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          整合 AI 技術提升設計效率與品質
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="hover-lift animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
