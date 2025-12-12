import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI PC",
      description: "用研究與情境故事勾勒 AI PC 願景，定義關鍵使用體驗與功能方向",
      tags: ["AI PC Vision", "Strategic UX", "UX Research"],
      projectId: "ai-pc",
    },
    {
      title: "Drone UX",
      description: "與無人機廠協作，打造易上手又可靠的地面控制站 UX 與操作流程",
      tags: ["Drone GCS UX", "Control UI", "B2B Partnering"],
      projectId: "drone-ux",
    },
    {
      title: "AMR Robot",
      description: "從競品研究到前後台與場域驗證，整合多場域服務機器人的完整體驗",
      tags: ["Service Robots", "Fleet Control", "Field UX Study"],
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
    <section id="projects" className="py-24 px-0 md:px-6 bg-muted/60">
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
