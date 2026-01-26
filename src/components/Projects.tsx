import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

// 專案縮圖
import bgAipc from "@/assets/bg_index_hero_aipc.webp";
import bgDrone from "@/assets/bg_index_hero_drone.webp";
import bgAmr from "@/assets/bg_index_hero_amr.webp";
import bgEsg from "@/assets/bg_index_hero_esg.webp";

const Projects = () => {
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate parallax when section is visible
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return;
      }
      
      // Calculate how far into the section we've scrolled (0 = just entering, 1 = leaving)
      const sectionProgress = Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height));
      
      // Apply parallax: move background UP as we scroll down (max 120px)
      const maxParallax = 120;
      const newParallaxY = Math.min(sectionProgress * maxParallax * 1.5, maxParallax);
      
      setParallaxY(newParallaxY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "AI PC",
      subtitle: "Research & Vision",
      description: "在 AI PC 還很模糊的探索期，透過研究完成 10 項創新功能優先排序與 3 組實際工作情境，讓 PM 可以拿去提案，也讓 ID、ME 能用情境評估新技術價值",
      roleInfo: "Strategic UX / Product Designer",
      tags: ["AI PC Vision", "Strategic UX", "UX Research"],
      projectId: "ai-pc",
      thumbnail: bgAipc,
    },
    {
      title: "Drone System",
      subtitle: "Control Experience",
      description: "與國內無人機大廠合作開發地面控制站，從競品研究到實機測試，設計任務中可靠、低誤操作的控制器與操作介面",
      roleInfo: "Product / UX / UI Designer",
      tags: ["Drone GCS UX", "Control System", "B2B"],
      projectId: "drone",
      thumbnail: bgDrone,
    },
    {
      title: "AMR Robot",
      subtitle: "Service System Design",
      description: "參與服務機器人產品線，從競品研究到前後台與機器人端 App，打造支援賣場／飯店／醫院的多場域營運體驗",
      roleInfo: "Product / UX / UI Designer",
      tags: ["Service Robot", "Operations Dashboard", "B2B2C"],
      projectId: "amr-robot",
      thumbnail: bgAmr,
    },
    {
      title: "Wi-Thrive",
      subtitle: "ESG Storytelling Game",
      description: "與 ESG、HR 與臺科大合作《緯你同行》桌遊，結合生成式圖像與體驗調整，讓同仁與應徵者在遊戲中理解永續行動",
      roleInfo: "Lead Designer",
      tags: ["ESG Storytelling", "Board Game", "Gen AI Visuals"],
      projectId: "esg-board-game",
      thumbnail: bgEsg,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 px-0 md:px-6 relative overflow-hidden"
    >
      {/* 背景圖層（帶模糊 + 視差效果） */}
      <div 
        className="absolute -top-[20%] left-0 right-0 -bottom-[20%]"
        style={{
          backgroundImage: 'url(/images/projects-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          transform: `translateY(-${parallaxY}px)`,
        }}
      />
      {/* 主藍色遮罩 50% */}
      <div className="absolute inset-0 bg-primary/50" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
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
