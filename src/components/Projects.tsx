import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI PC",
      subtitle: "Research & Vision",
      description: "在 AI PC 尚未定義前，以研究與分析整理 10 項 AI 功能優先序與 3 組未來工作情境，協助 PM 建立產品藍圖與取捨依據",
      roleInfo: "Strategic UX / Product Designer",
      tags: ["AI PC Vision", "Strategic UX", "UX Research"],
      projectId: "ai-pc",
    },
    {
      title: "Drone System",
      subtitle: "Control Experience",
      description: "與國內無人機大廠合作開發地面控制站，從競品研究到實機測試，設計任務中可靠、低誤操作的控制器與操作介面",
      roleInfo: "Product / UX / UI Designer",
      tags: ["Drone GCS UX", "Control System", "B2B"],
      projectId: "drone-ux",
    },
    {
      title: "AMR Robot",
      subtitle: "Service System Design",
      description: "參與服務機器人產品線，從競品研究到前後台與機器人端 App，打造支援賣場／飯店／醫院的多場域營運體驗",
      roleInfo: "Product / UX / UI Designer",
      tags: ["Service Robot", "Operations Dashboard", "B2B2C"],
      projectId: "amr-robot",
    },
    {
      title: "Wi-Thrive",
      subtitle: "ESG Storytelling Game",
      description: "與 ESG、HR 與臺科大合作《緯你同行》桌遊，結合生成式圖像與體驗調整，讓同仁與應徵者在遊戲中理解永續行動",
      roleInfo: "Lead Designer",
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
