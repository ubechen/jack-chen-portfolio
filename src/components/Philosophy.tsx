import { Leaf, Users, Brain } from "lucide-react";

const Philosophy = () => {
  const philosophies = [
    {
      icon: Leaf,
      title: "Sustainable UX",
      description: "設計低碳、高效的數位產品，減少環境影響",
    },
    {
      icon: Users,
      title: "Inclusive Design",
      description: "創造無障礙、友善的使用體驗，讓每個人都能使用",
    },
    {
      icon: Brain,
      title: "AI Governance",
      description: "確保 AI 系統的透明度、公平性與可信賴性",
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          My Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
