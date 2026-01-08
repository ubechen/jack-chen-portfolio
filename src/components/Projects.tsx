import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI PC",
      subtitle: "Research & Vision",
      description: "在 AI PC 尚未被定義前，以研究與分析整理 10 項關鍵 AI 功能優先序與 3 組未來工作情境，協助 PM 規劃產品藍圖",
      roleInfo: "Role：Strategic UX / Product Designer｜Domain：AI PC, Laptop, Concept Vision",
      tags: ["AI PC Vision", "Strategic UX", "UX Research"],
      projectId: "ai-pc",
    },
    {
      title: "Drone System",
      subtitle: "Control Experience",
      description: "與國內無人機大廠合作開發地面控制站，從競品研究到實機測試，設計操作者在任務中可依賴的控制器與操作介面",
      roleInfo: "Role：Product / UX / UI Designer｜Domain：Drone, Ground Control Station",
      tags: ["Drone GCS UX", "Control System", "B2B"],
      projectId: "drone-ux",
    },
    {
      title: "AMR Robot",
      subtitle: "Service System Design",
      description: "參與新事業服務機器人產品線，從競品研究、後台管理系統到機器人端 App，設計支援賣場、飯店、醫院等多場域的完整體驗",
      roleInfo: "Role：Product / UX / UI Designer｜Domain：Service Robot, Fleet Management",
      tags: ["Service Robot", "Operations Dashboard", "B2B2C"],
      projectId: "amr-robot",
    },
    {
      title: "Wi-Thrive",
      subtitle: "ESG Storytelling Game",
      description: "與 ESG 辦公室、HR 與臺科大合作設計《緯你同行》桌遊，結合 GenAI 圖像與 UX 調整，讓同仁與應徵者在遊戲中理解公司永續行動",
      roleInfo: "Role: Lead Designer｜Domain: ESG, Board Game, Internal Training",
      tags: ["ESG Storytelling", "Board Game", "Gen AI Visuals"],
      projectId: "esg-board-game",
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-24 px-0 md:px-6 relative"
      style={{
        backgroundImage: 'url(/images/projects-bg.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'hsl(220 14% 96%)',
      }}
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto max-w-6xl relative z-10">
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
