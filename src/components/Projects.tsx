import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI PC",
      description: "智能個人電腦的使用者體驗設計，整合 AI 助手與工作流程優化",
      tags: ["AI", "Desktop", "Productivity"],
      projectId: "ai-pc",
    },
    {
      title: "Drone UX",
      description: "無人機操控介面設計，提升飛行安全與操作效率",
      tags: ["IoT", "Safety", "Interface"],
      projectId: "drone-ux",
    },
    {
      title: "AMR Robot",
      description: "自主移動機器人控制系統，實現智能物流與倉儲管理",
      tags: ["Robotics", "Automation", "Logistics"],
      projectId: "amr-robot",
    },
    {
      title: "ESG Board Game",
      description: "ESG 教育桌遊設計，透過遊戲化學習永續發展概念",
      tags: ["Education", "Sustainability", "Gamification"],
      projectId: "esg-board-game",
    },
    {
      title: "BabyFlow",
      description: "嬰幼兒照護應用程式，協助父母追蹤成長記錄與健康數據",
      tags: ["Healthcare", "Mobile", "Family"],
      projectId: "babyflow",
    },
  ];

  return (
    <section id="projects" className="py-24 px-0 md:px-6 bg-muted/70">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
