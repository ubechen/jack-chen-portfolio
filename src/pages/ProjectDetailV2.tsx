import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Play, FolderSearch, Briefcase } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackgroundWithSkeleton from "@/components/HeroBackgroundWithSkeleton";
import { DesktopQuickNav, MobileQuickNav } from "@/components/projects/ProjectQuickNav";
import { useScrollSpy, Section } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import aiPcHero from "@/assets/bg_project_aipc.webp";
import droneHero from "@/assets/bg_projects_drone.webp";
import amrHero from "@/assets/bg_project_amr.webp";
import esgHero from "@/assets/bg_project_esg.webp";
import DroneUXContent from "@/components/projects/DroneUXContent";
import AMRRobotContent from "@/components/projects/AMRRobotContent";
import ESGBoardGameContent from "@/components/projects/ESGBoardGameContent";
import ZoomableImage from "@/components/ZoomableImage";
import imgAipc11 from "@/assets/img_aipc_1-1.webp";
import imgAipc311 from "@/assets/img_aipc_3-1-1.webp";
import imgAipc312 from "@/assets/img_aipc_3-1-2.webp";
import imgAipc321 from "@/assets/img_aipc_3-2-1.webp";
import imgAipc322 from "@/assets/img_aipc_3-2-2.webp";
import imgAipc41 from "@/assets/img_aipc_4-1.webp";
import imgAipc21 from "@/assets/img_aipc_2-1.webp";
import imgAipc51 from "@/assets/img_aipc_5-1-2.webp";
import imgAipc61 from "@/assets/img_aipc_6-1-2.webp";

const projectData = {
  "ai-pc": {
    title: "AI PC｜Research & Vision",
    subtitle: "用研究和故事，勾勒出下一代的 AI PC 藍圖",
    heroImage: aiPcHero,
    role: "Strategic UX · Research & Vision",
    type: "策略探索／未來產品願景",
    summary: "在 AI PC 還很模糊的探索期，我透過研究完成了 10 項創新功能的優先排序，還有 3 組實際的工作情境。這些成果讓 PM 可以拿去跟高層和國際品牌客戶提案，也讓 ID、ME 團隊和新創夥伴能用真實情境來評估新技術到底有沒有價值，加速了原型開發的進度",
    duration: "2024 Q2 – Q4",
    tags: ["AI PC Vision", "Strategic UX", "UX Research"],
    prevProject: {
      id: "esg-board-game",
      title: "Wi-Thrive",
    },
    nextProject: {
      id: "drone",
      title: "Drone System",
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "my-role", label: "My Role" },
      { id: "what-we-did", label: "What we did" },
      { id: "challenges", label: "Challenges & Impact" },
      { id: "ai-esg", label: "AI / ESG" },
      { id: "learnings", label: "What I learned" },
    ],
  },
  "drone": {
    title: "Drone System｜Control Experience",
    subtitle: "打造無人機地面控制站的使用體驗",
    heroImage: droneHero,
    role: "Product / UX / UI Designer",
    type: "B2B／國防與產業應用 · 控制站 UX",
    summary: "公司從 AMR 轉向無人機市場之際，與國內無人機大廠合作聚焦地面控制站(手持控制器+App)的 UX 與 POC：從競品研究到實機測試，設計任務中可靠、低誤操作的流程與介面，支援國際展會 demo 與國防標案，並延伸至後台管理系統規劃",
    duration: "2024 Q2 – 2025 Q1",
    tags: ["Drone GCS UX", "Control System", "B2B"],
    prevProject: {
      id: "ai-pc",
      title: "AI PC",
    },
    nextProject: {
      id: "amr-robot",
      title: "Wifundity AMR",
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "my-role", label: "My Role" },
      { id: "what-we-did", label: "What we did" },
      { id: "challenges", label: "Challenges & Impact" },
      { id: "learnings", label: "What I learned" },
    ],
  },
  "amr-robot": {
    title: "Wifundity AMR｜Service System Design",
    subtitle: "多場域服務型機器人平台與系統體驗設計",
    heroImage: amrHero,
    role: "Product / UX / UI Designer",
    type: "B2B2C · 服務型機器人 · 多場域解決方案",
    summary: "公司新事業從零打造服務型機器人品牌 Wifundity 的三年間，負責 AMR 產品體驗設計：競品研究、後台管理系統與機器人端 App，到品牌網站、展覽與影片。在成熟競品與市場不確定性下，以 UX 串連產品、營運流程與品牌溝通，推進多場域落地",
    duration: "2021 Q4 – 2024 Q1",
    tags: ["Service Robot", "Operations Dashboard", "B2B2C"],
    prevProject: {
      id: "drone",
      title: "Drone System",
    },
    nextProject: {
      id: "esg-board-game",
      title: "Wi-Thrive",
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "my-role", label: "My Role" },
      { id: "what-we-did", label: "What we did" },
      { id: "challenges", label: "Challenges & Impact" },
      { id: "learnings", label: "What I learned" },
    ],
  },
  "esg-board-game": {
    title: "Wi-Thrive｜ESG Storytelling Game",
    subtitle: "ESG 桌遊《緯你同行 Wi-Thrive》：把企業永續變成一場能被「玩懂」的體驗",
    heroImage: esgHero,
    heroVideo: "https://www.youtube.com/embed/LrH-OEzySV8?autoplay=1",
    role: "Lead Designer · Product / UX / Visual · 專案協調窗口",
    type: "ESG / 內訓與招募 · 桌遊體驗設計 · Generative AI 應用",
    summary: "為支援企業內訓、招募與品牌溝通，與 ESG、HR 及臺科大教育遊戲團隊合作，將既有規則原型重構為可量產桌遊《緯你同行 Wi-Thrive》。透過遊戲化把永續行動轉成可理解的情境與故事，並導入 AI 生成圖像工作流，在短時間內高效完成大量素材且維持風格一致與高品質",
    duration: "2023 Q3 – 2024 Q3",
    tags: ["ESG Storytelling", "Board Game", "Gen AI Visuals"],
    prevProject: {
      id: "amr-robot",
      title: "Wifundity AMR",
    },
    nextProject: {
      id: "ai-pc",
      title: "AI PC",
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "my-role", label: "My Role" },
      { id: "what-we-did", label: "What we did" },
      { id: "challenges", label: "Challenges & Impact" },
      { id: "learnings", label: "What I learned" },
    ],
  },
};

// Process Accordion Component with individual subsection collapse
interface SubSection {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

const ProcessAccordion = ({ 
  sectionTitle,
  introContent, 
  subSections
}: { 
  sectionTitle: React.ReactNode; 
  introContent: React.ReactNode; 
  subSections: SubSection[];
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      {sectionTitle}
      <div className="mb-10">{introContent}</div>
      
      {/* Sub-sections - titles always visible, content collapsible */}
      <div className="space-y-4">
        {subSections.map((sub) => {
          const isExpanded = expandedSections.has(sub.id);
          return (
            <div key={sub.id} className="border-l-2 border-border hover:border-primary/50 transition-colors">
              {/* Sub-section title - clickable */}
              <button
                onClick={() => toggleSection(sub.id)}
                className="w-full flex items-center justify-between text-left py-3 px-6 group hover:bg-muted/30 transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="flex-1">{sub.title}</div>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 flex-shrink-0 ml-4",
                    isExpanded && "rotate-180"
                  )} 
                />
              </button>
              
              {/* Sub-section content - collapsible */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-2">
                  {sub.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const ProjectDetailV2 = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId as keyof typeof projectData];
  const [scrollY, setScrollY] = useState(0);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  const sections: Section[] = project?.sections || [];
  const { activeSection, showNav } = useScrollSpy(sections, 150);

  // Scroll handler only
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    const recommendedProjects = Object.entries(projectData).slice(0, 3);
    
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Helmet>
          <title>找不到這個專案｜Jack Chen（陳泰運）作品集</title>
          <meta name="description" content="這個專案連結可能已更新或暫時不公開。你可以回到 Projects 列表，瀏覽 AI PC、Drone System、Wifundity AMR、Wi-Thrive ESG 等案例" />
          <link rel="canonical" href="https://taiyun.design/projects/not-found" />
          <meta name="robots" content="noindex,follow" />
          <meta property="og:locale" content="zh_TW" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Jack Chen（陳泰運）作品集" />
          <meta property="og:title" content="找不到這個專案｜Jack Chen（陳泰運）作品集" />
          <meta property="og:description" content="此專案連結可能已更新或暫時不公開。回到 Projects 列表瀏覽其他案例" />
          <meta property="og:url" content="https://taiyun.design/projects/not-found" />
          <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="找不到這個專案｜Jack Chen（陳泰運）作品集" />
          <meta name="twitter:description" content="此專案連結可能已更新或暫時不公開。回到 Projects 列表瀏覽其他案例" />
          <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
        </Helmet>
        
        <Navigation />
        
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-2xl">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <FolderSearch className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            
            {/* Content */}
            <h1 className="text-4xl font-bold text-foreground mb-2">Project Not Found</h1>
            <h2 className="text-xl text-muted-foreground mb-4">找不到這個專案</h2>
            <p className="text-muted-foreground mb-8">
              抱歉，您所尋找的專案可能已被移除或網址有誤。<br />
              以下是一些您可能感興趣的內容：
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    瀏覽所有專案
                  </span>
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => window.history.back()}>
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回上一頁
                </span>
              </Button>
            </div>
            
            {/* Recommended Projects */}
            <div className="border-t border-border pt-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-6">或直接查看這些專案</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendedProjects.map(([id, proj]) => (
                  <Link 
                    key={id} 
                    to={`/project/${id}`}
                    className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors text-left group"
                  >
                    <h4 className="font-medium text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">{proj.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{proj.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  const seoData: Record<string, { title: string; description: string; ogDescription: string }> = {
    "ai-pc": {
      title: "AI PC｜Research & Vision｜Jack Chen 專案",
      description: "在 AI PC 尚未被明確定義前，透過研究與分析整理關鍵 AI 功能優先序與未來工作情境，協助產品藍圖規劃，並以情境與原型支持跨部門決策與提案",
      ogDescription: "以研究與分析整理 AI 功能優先序與未來工作情境，協助產品藍圖規劃，並用情境與原型支持跨部門決策與提案"
    },
    "drone": {
      title: "Drone System｜Control Experience｜Jack Chen 專案",
      description: "與無人機團隊合作打造地面控制站體驗，從競品研究到實機測試，設計控制器與介面流程，讓操作者在任務中能更清楚掌握狀態、降低誤操作並提升效率",
      ogDescription: "從競品研究到實機測試，設計控制器與介面流程，讓操作者在任務中更清楚掌握狀態、降低誤操作並提升效率"
    },
    "amr-robot": {
      title: "Wifundity AMR Robot｜Service System Design｜Jack Chen 專案",
      description: "參與服務型機器人產品線，涵蓋競品研究、後台管理系統與機器人端 App，支援賣場、飯店、醫院等多場域導入，建立可營運、可擴充的服務體驗與流程",
      ogDescription: "從競品研究到後台與機器人端 App，支援多場域導入，建立可營運、可擴充的服務體驗與流程"
    },
    "esg-board-game": {
      title: "Wi-Thrive｜ESG Storytelling Game｜Jack Chen 專案",
      description: "與 ESG、HR 與學研團隊合作設計《緯你同行》桌遊，結合 GenAI 圖像與 UX 微調，把永續行動轉成可被「玩懂」的故事體驗，支援招募、內訓與對外溝通",
      ogDescription: "結合 GenAI 圖像與 UX 微調，把永續行動轉成可被玩懂的故事體驗，支援招募、內訓與對外溝通"
    }
  };

  const seo = seoData[projectId as string] || {
    title: `${project.title} | Jack Chen – Product / UX Designer`,
    description: project.summary,
    ogDescription: project.summary
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary,
    "author": {
      "@type": "Person",
      "name": "Jack Chen",
      "jobTitle": "Product / UX Designer"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.ogDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <Navigation />
      
      {/* Desktop Quick Nav */}
      <DesktopQuickNav sections={sections} activeSection={activeSection} isVisible={showNav} />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <HeroBackgroundWithSkeleton 
          src={project.heroImage}
          scrollY={scrollY}
        />
        <div className="relative h-full flex items-end pt-32 pb-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Button
              variant="ghost"
              className="mb-8 relative overflow-hidden border border-white/50 text-white before:content-[''] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-white/20 before:transition-transform before:duration-300 before:ease-out hover:before:origin-left hover:before:scale-x-100 hover:bg-transparent hover:text-white animate-fade-in"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
              onClick={() => navigate("/#projects")}
            >
              <span className="relative z-10 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Projects
              </span>
            </Button>
            <h1 
              className="text-3xl md:text-5xl font-bold mb-2 text-foreground animate-fade-in"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              {project.title.split('｜')[0]}
            </h1>
            <p 
              className="text-xl md:text-3xl font-medium text-foreground/70 mb-4 animate-fade-in"
              style={{ animationDelay: '250ms', animationFillMode: 'both' }}
            >
              {project.title.split('｜')[1]}
            </p>
            <p 
              className="text-lg md:text-xl text-primary mb-4 animate-fade-in"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              {project.subtitle}
            </p>
            {/* Tags */}
            {'tags' in project && project.tags && (
              <div 
                className="flex flex-wrap gap-x-4 gap-y-1 mb-6 animate-fade-in"
                style={{ animationDelay: '350ms', animationFillMode: 'both' }}
              >
                {(project.tags as string[]).map((tag: string) => (
                  <span key={tag} className="text-sm" style={{ color: 'rgba(70, 70, 70, 0.6)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            {/* Video Button for ESG project */}
            {'heroVideo' in project && project.heroVideo && (
              <Button
                size="lg"
                variant="hero"
                className="text-base font-medium animate-fade-in"
                style={{ animationDelay: '400ms', animationFillMode: 'both' }}
                onClick={() => setVideoDialogOpen(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  🎥 觀看桌遊介紹影片
                </span>
              </Button>
            )}
            
            {/* Previous/Next Project Navigation */}
            <div className="flex items-center gap-3 mt-6 justify-end animate-fade-in" style={{ animationDelay: '450ms', animationFillMode: 'both' }}>
              {'prevProject' in project && project.prevProject && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => navigate(`/project/${project.prevProject.id}`)}
                        className="w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-md"
                      >
                        <ChevronLeft className="h-5 w-5 text-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Previous: {project.prevProject.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              
              {'nextProject' in project && project.nextProject && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => navigate(`/project/${project.nextProject.id}`)}
                        className="w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-md"
                      >
                        <ChevronRight className="h-5 w-5 text-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Next: {project.nextProject.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        {/* Project Meta */}
        <section className="py-8 md:py-12 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              {/* 角色 - flexible width */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">角色</h3>
                <p className="text-foreground font-medium">{project.role}</p>
              </div>
              
              {/* Vertical divider */}
              <div className="hidden md:block w-px h-12 bg-border/60 self-center flex-shrink-0" />
              
              {/* 類型 - flexible width */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">類型</h3>
                <p className="text-foreground">{project.type}</p>
              </div>
              
              {/* Vertical divider */}
              <div className="hidden md:block w-px h-12 bg-border/60 self-center flex-shrink-0" />
              
              {/* 期間 - shrink to fit */}
              <div className="flex-shrink-0 md:w-auto">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">期間</h3>
                <p className="text-foreground whitespace-nowrap">{project.duration}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">簡述</h3>
              <p className="text-foreground leading-relaxed">{project.summary}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mobile Quick Nav - Below meta section */}
      <MobileQuickNav sections={sections} activeSection={activeSection} isVisible={showNav} />

      {/* AI-PC Content with Quick Nav IDs */}
      {projectId === "ai-pc" && (
        <>
          {/* Section 1: Overview */}
          <ScrollReveal delay={100}>
            <section id="overview" className="py-16 md:py-24 px-4 md:px-6">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-foreground">
                  1. Overview
                  <span className="block text-xl font-normal text-muted-foreground mt-2">AI PC 在市場尚未被真正說清楚時</span>
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    當時市場上對「AI PC」的認知大概就是：
                  </p>
                  
                  <ul className="space-y-3 text-lg text-muted-foreground ml-4">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>微軟 Copilot+ 個人助理</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>有 NPU，可以在本地離線處理 AI 任務</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>鍵盤上多了一顆 Copilot 按鍵</span>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 my-8">
                    <p className="text-xl text-foreground font-medium">
                      但沒有人真的說得清楚：對使用者來說，AI PC 在日常工作裡到底能幫上什麼忙？
                    </p>
                  </div>

                  <ZoomableImage
                    src={imgAipc11}
                    alt="AI PC 市場定義與主要競品功能比較"
                    figcaption="AI PC 市場定義與主要競品功能比較"
                  />

                  <div className="bg-secondary/50 rounded-xl p-8 my-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">內部背景與挑戰</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      同一時間，公司內部的 ID 和 ME 已經設計出新型態散熱模組，還接觸了國際新創夥伴（做觸控實體鍵盤）。對 ODM 公司來說，更關鍵的問題是：
                    </p>
                    <p className="text-xl text-primary font-semibold">
                      值得投入長期資源的 AI PC，該長什麼樣子？
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-foreground">我的任務</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      站在 UX 的位置，我需要跟不同的人協作和溝通：
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background border border-border rounded-lg p-5">
                        <p className="text-muted-foreground">先幫公司定義一版<mark className="bg-primary/20 text-foreground px-1 rounded">「合理又有前瞻性」</mark>的 AI PC 願景</p>
                      </div>
                      <div className="bg-background border border-border rounded-lg p-5">
                        <p className="text-muted-foreground">用研究和故事，幫 PM 組成一套<mark className="bg-primary/20 text-foreground px-1 rounded">能說服高層的提案</mark></p>
                      </div>
                      <div className="bg-background border border-border rounded-lg p-5">
                        <p className="text-muted-foreground">讓 ID 和 ME 團隊可以用<mark className="bg-primary/20 text-foreground px-1 rounded">具體情境</mark>來評估新技術的價值，而不是只看規格數字</p>
                      </div>
                      <div className="bg-background border border-border rounded-lg p-5">
                        <p className="text-muted-foreground">跟新創夥伴用<mark className="bg-primary/20 text-foreground px-1 rounded">情境對齊</mark>可能的合作方向</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-xl p-8 mt-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">核心觀點</p>
                    <p className="text-2xl text-foreground font-semibold leading-relaxed">
                      「AI PC 應該是一台會主動幫你工作、懂得前後脈絡的好夥伴，而不只是一台『裝了 AI app』的電腦」
                    </p>
                    <p className="text-muted-foreground mt-4">
                      這個觀點決定了後續研究和提案的方向：先定義「什麼值得做」
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2: My Role */}
          <ScrollReveal delay={100}>
            <section id="my-role" className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-foreground">
                  2. My Role
                  <span className="block text-xl font-normal text-muted-foreground mt-2">服務不同對象，協助大家看清題目</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  身為 <strong className="text-foreground">Senior UX / Product Designer</strong>，我在這個專案主要扮演三個角色：
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-primary overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl font-bold text-primary/30">01</span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-4 text-foreground">研究架構設計者</h3>
                          <p className="text-muted-foreground mb-4">規劃三階段方法：</p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-secondary/50 rounded-lg p-4">
                              <p className="text-sm font-semibold text-primary mb-1">Phase 1</p>
                              <p className="text-sm text-muted-foreground">市場調查與 TA 訪談 → 分析市場和一手/二手資料</p>
                            </div>
                            <div className="bg-secondary/50 rounded-lg p-4">
                              <p className="text-sm font-semibold text-primary mb-1">Phase 2</p>
                              <p className="text-sm text-muted-foreground">Kano 問卷與分析 → 量化不同族群對 AI PC 創新功能的優先序</p>
                            </div>
                            <div className="bg-secondary/50 rounded-lg p-4">
                              <p className="text-sm font-semibold text-primary mb-1">Phase 3</p>
                              <p className="text-sm text-muted-foreground">實機團體訪談＋腦力激盪共創 → 針對具體情境展開 AI Agent / Launcher 概念</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl font-bold text-primary/30">02</span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-4 text-foreground">故事與決策框架設計者</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                              <span className="text-primary">•</span>
                              <span>把研究結果整理成 PM 可直接拿去提案的<mark className="bg-primary/20 text-foreground px-1 rounded">「新產品機會敘事」</mark></span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary">•</span>
                              <span>協助把模糊的 AI 願景，拆成<mark className="bg-primary/20 text-foreground px-1 rounded">短、中、長期三層路線</mark></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl font-bold text-primary/30">03</span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-4 text-foreground">UX 價值推進者</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                              <span className="text-primary">•</span>
                              <span>全盤考量如何同時幫助 PM、ID／ME 團隊與新創夥伴各自的決策需求</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary">•</span>
                              <span>讓 UX 在之後 AI 類專案中，從<mark className="bg-primary/20 text-foreground px-1 rounded">「後期支援」</mark>轉變為<mark className="bg-primary/20 text-foreground px-1 rounded">「一開始就要一起定義題目的夥伴」</mark></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <ZoomableImage
                  src={imgAipc21}
                  alt="專案角色與協作關係圖"
                  figcaption="與 PM、ID、ME 及新創夥伴的協作網絡"
                  className="mt-10"
                />

              </div>
            </section>
          </ScrollReveal>

          {/* Section 3: What we did - with Accordion */}
          <ScrollReveal delay={100}>
            <section id="what-we-did" className="py-16 md:py-24 px-4 md:px-6">
              <div className="container mx-auto max-w-4xl">
                <ProcessAccordion
                  sectionTitle={
                    <h2 className="text-4xl font-bold mb-12 text-foreground">
                      3. What we did
                      <span className="block text-xl font-normal text-muted-foreground mt-2">說出一個高層聽得懂、願意投資的故事</span>
                    </h2>
                  }
                  introContent={
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      透過 Kano 問卷研究與實機工作坊，我們發展出可供 PM 提案、ID/ME 評估新技術的具體情境與功能排序。
                    </p>
                  }
                  subSections={[
                    {
                      id: "3.1",
                      title: (
                        <div className="flex items-center gap-4">
                          <span className="text-4xl font-bold text-primary/30">3.1</span>
                          <h3 className="text-xl font-semibold text-foreground">Kano 問卷：釐清「什麼 AI 功能值得先做」</h3>
                        </div>
                      ),
                      content: (
                        <div className="space-y-6">
                          <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>以問卷評估 <strong className="text-foreground">10 個潛在 AI PC 功能</strong>（主軸關於與 AI 助理互動模式、情境切換、主動散熱等）</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>將結果分類為<mark className="bg-primary/20 text-foreground px-1 rounded">基本、期望、吸引、無差異、反向型</mark>功能，整理創新功能排序清單</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>幫助 PM 用數據去判斷「先從哪幾個 AI 功能開始」</span>
                            </li>
                          </ul>

                          <ZoomableImage
                            src={imgAipc311}
                            alt="Kano 問卷設計與功能分類圖表"
                            figcaption="10 個潛在功能的 Kano 分類結果"
                          />

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-secondary/50 rounded-lg p-5 text-center">
                              <p className="text-sm font-semibold text-primary mb-1">Must-be 基本型</p>
                              <p className="text-sm text-muted-foreground">沒有會生氣、有了覺得理所當然</p>
                            </div>
                            <div className="bg-secondary/50 rounded-lg p-5 text-center">
                              <p className="text-sm font-semibold text-primary mb-1">One-dimensional 期望型</p>
                              <p className="text-sm text-muted-foreground">多一點會加分，少一點會扣分</p>
                            </div>
                            <div className="bg-secondary/50 rounded-lg p-5 text-center">
                              <p className="text-sm font-semibold text-primary mb-1">Attractive 吸引型</p>
                              <p className="text-sm text-muted-foreground">有會驚喜、沒有也不會抱怨</p>
                            </div>
                          </div>

                          <ZoomableImage
                            src={imgAipc312}
                            alt="Top 10 AI PC 功能排序表格"
                            figcaption="創新功能優先序與投資建議"
                          />
                        </div>
                      )
                    },
                    {
                      id: "3.2",
                      title: (
                        <div className="flex items-center gap-4">
                          <span className="text-4xl font-bold text-primary/30">3.2</span>
                          <h3 className="text-xl font-semibold text-foreground">實機工作坊：模擬未來 AI PC 情境</h3>
                        </div>
                      ),
                      content: (
                        <div className="space-y-6">
                          <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>結合<mark className="bg-primary/20 text-foreground px-1 rounded">主動式自適應散熱樣機</mark>與<mark className="bg-primary/20 text-foreground px-1 rounded">觸控實體鍵盤</mark>，舉辦團體訪談＋腦力激盪工作坊</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>以<strong className="text-foreground">「一天的流程」</strong>探討：AI 助理應在何時、用什麼方式主動協助使用者</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>發展出 AI Agent 與 AI Launcher 的 <strong className="text-foreground">3 組核心情境</strong></span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-bold">→</span>
                              <span>情境以 PM 提案故事為主軸，也讓 ID 以真實情境評估新硬體設計方向</span>
                            </li>
                          </ul>

                          <ZoomableImage
                            src={imgAipc321}
                            alt="工作坊腦力激盪討論與便利貼整理"
                            figcaption="結合實機樣品的團體訪談與腦力激盪"
                          />

                          <div className="bg-secondary/50 rounded-xl p-8">
                            <h4 className="text-xl font-semibold mb-6 text-foreground">AI Agent / AI Launcher 三組核心情境</h4>
                            <div className="grid md:grid-cols-3 gap-6">
                              <Card className="border-t-4 border-t-primary">
                                <CardContent className="p-6">
                                  <h5 className="text-lg font-semibold text-primary mb-2">Before you start</h5>
                                  <p className="text-sm text-muted-foreground">預先準備型情境：AI 在你開始工作前，主動準備好需要的資料與脈絡</p>
                                </CardContent>
                              </Card>
                              <Card className="border-t-4 border-t-primary">
                                <CardContent className="p-6">
                                  <h5 className="text-lg font-semibold text-primary mb-2">While you work</h5>
                                  <p className="text-sm text-muted-foreground">共作支援型情境：AI 在你工作過程中即時提供協助與建議</p>
                                </CardContent>
                              </Card>
                              <Card className="border-t-4 border-t-primary">
                                <CardContent className="p-6">
                                  <h5 className="text-lg font-semibold text-primary mb-2">After you finish</h5>
                                  <p className="text-sm text-muted-foreground">收斂總結型情境：AI 協助整理成果、回顧與歸檔</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <ZoomableImage
                            src={imgAipc322}
                            alt="AI Hotkey 與概念設計方案"
                            figcaption="AI Launcher 與 Agent 的情境展開"
                          />
                        </div>
                      )
                    }
                  ]}
                />
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4: Challenges & Impact */}
          <ScrollReveal delay={100}>
            <section id="challenges" className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-foreground">
                  4. Challenges & Impact
                  <span className="block text-xl font-normal text-muted-foreground mt-2">實際帶來的改變</span>
                </h2>

                <div className="space-y-8">
                  <div className="bg-background rounded-xl p-8 border border-border">
                    <div className="flex items-start gap-4">
                      <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 1</span>
                    </div>
                    <h3 className="text-2xl font-semibold mt-4 mb-2 text-foreground">
                      避免變成「酷炫但沒資源做」的幻想
                    </h3>
                    <p className="text-muted-foreground mb-4">高層用量產思維檢視前衛概念、團隊也擔心最後做不出來</p>
                    <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                      <div>
                        <p className="text-lg text-foreground leading-relaxed">
                          <strong>解決方式：</strong>把「願景」拆成可被討論的決策工具
                        </p>
                        <ul className="mt-3 space-y-2 text-muted-foreground">
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span>針對 10 項功能與 3 組情境，交代為何先做、先驗證什麼</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span>讓討論從「好不好／太前衛」轉成<mark className="bg-primary/20 text-foreground px-1 rounded">「先做哪幾步」</mark>，建立分階段 POC 路線與停損點</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span>讓 ID／ME 可以用情境檢視技術價值，而不是只看規格或單點創新</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">成果：</strong>決策者更容易對齊開發順序，也降低概念案被一句話打回票的機率
                      </p>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-8 border border-border">
                    <div className="flex items-start gap-4">
                      <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 2</span>
                    </div>
                    <h3 className="text-2xl font-semibold mt-4 mb-2 text-foreground">
                      讓 UX 成果不只是研究報告
                    </h3>
                    <p className="text-muted-foreground mb-4">同一份研究要同時能說服高層/客戶，也要讓內部有人接得住</p>
                    <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                      <div>
                        <p className="text-lg text-foreground leading-relaxed">
                          <strong>解決方式：</strong>把研究輸出「改寫」成不同角色拿了就能用的溝通版本
                        </p>
                        <ul className="mt-3 space-y-2 text-muted-foreground">
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span><strong className="text-foreground">PM：</strong>可直接提案的故事骨架（問題→取捨→路線）與功能優先序依據</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span><strong className="text-foreground">ID／ME：</strong>以工作流驗證新硬體方向的情境檢核與設計原則</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">→</span>
                            <span><strong className="text-foreground">新創夥伴：</strong>用情境對齊合作切入點與必要能力，避免變成只在賣零件</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">成果：</strong>後續 AI 類型專案啟動時，UX 更早被邀請參與策略討論，開始被視為<mark className="bg-primary/20 text-foreground px-1 rounded">決策過程的一部分</mark>，而非後期支援角色
                      </p>
                    </div>
                  </div>

                  <ZoomableImage
                    src={imgAipc41}
                    alt="五階層技術創新藍圖與價值轉換漏斗"
                    figcaption="研究成果如何轉化為決策工具"
                  />

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-primary mb-2">10</p>
                      <p className="text-sm text-muted-foreground">AI PC 創新功能<br />完成優先序排序</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-primary mb-2">3</p>
                      <p className="text-sm text-muted-foreground">AI Agent 核心情境<br />概念工作流發展</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-primary mb-2">↑</p>
                      <p className="text-sm text-muted-foreground">UX 影響力提升<br />更早參與策略討論</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5: AI & ESG */}
          <ScrollReveal delay={100}>
            <section id="ai-esg" className="py-16 md:py-24 px-4 md:px-6">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-foreground">
                  5. How I used AI / ESG as a lens
                </h2>

                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-6xl font-bold text-primary/20">5.1</span>
                    <h3 className="text-2xl font-semibold text-foreground">AI 在這個專案是對象也同時是工具</h3>
                  </div>

                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>整理質性問卷中的開放式回應與訪談逐字稿，<mark className="bg-primary/20 text-foreground px-1 rounded">加速統整分析見解</mark></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>模擬不同 persona 的一天產出工作坊情境稿，再加入真實研究修正</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>使用生成式影像工具產出情境圖、AI Launcher / Agent 的方向，作爲共創素材</span>
                    </li>
                  </ul>

                </div>

                <div className="border-t border-border my-16"></div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-6xl font-bold text-primary/20">5.2</span>
                    <h3 className="text-2xl font-semibold text-foreground">ESG 評估是未來延伸視角</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    這個專案沒有直接以 ESG 為目標，但在思考 AI PC 情境時，保留兩個可能性：
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3 text-green-600">Environment 環境</h4>
                        <p className="text-muted-foreground">
                          高負載 AI 工作與能耗高度相關，未來可延伸爲<mark className="bg-green-500/20 text-foreground px-1 rounded">「能耗可視化與節能模式」</mark>
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3 text-blue-600">Governance 治理</h4>
                        <p className="text-muted-foreground">
                          AI Agent 若長期在背景運作，勢必牽涉<mark className="bg-blue-500/20 text-foreground px-1 rounded">資料治理與透明度</mark>，值得在下一階段深入的主題
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <ZoomableImage
                    src={imgAipc51}
                    alt="AI / ESG Lens - AI 作為對象與工具，以及 ESG 評估的未來延伸視角"
                    figcaption="透過 AI / ESG 視角審視專案的雙重價值"
                    className="mt-10"
                  />
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6: What I learned */}
          <ScrollReveal delay={100}>
            <section id="learnings" className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-foreground">
                  6. What I learned
                </h2>

                {/* 開頭引言 - 最重要的觀點 */}
                <div className="bg-primary/10 rounded-xl p-8 mb-10">
                  <p className="text-2xl text-foreground font-semibold leading-relaxed">
                    在沒有人知道標準答案的題目裡，UX 的價值不只是把介面畫得漂亮、把流程做得順，而是有根有據地設計出一個<mark className="bg-primary/30 text-foreground px-2 py-1 rounded">「可被討論、可被質疑、也可被落地的未來版本」</mark>
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    讓 PM / 高層、ID / ME、合作夥伴願意一起朝那個方向前進
                  </p>
                </div>

                {/* 專案確認的價值 */}
                <div className="space-y-6 text-lg text-muted-foreground mb-10">
                  <p className="leading-relaxed">
                    這個專案讓我再次確認：
                  </p>
                  <div className="bg-background border-l-4 border-l-primary rounded-r-lg p-6">
                    <p className="text-xl text-foreground font-medium leading-relaxed">
                      當 UX 能同時滿足不同利害關係人的需求：幫 PM 串出提案故事、幫決策者看見風險與機會、幫 ID / ME 用情境思考新技術的價值：設計就不再只是輸出畫面，而是參與產品策略與投資判斷的一部分
                    </p>
                  </div>
                </div>

                {/* CES 經驗與未來展望 */}
                <div className="space-y-6 text-lg text-muted-foreground mb-10">
                  <p className="leading-relaxed">
                    在 2022 年，同一客戶的雙螢幕電競 / 創作者筆電專案中，我參與的 UX 研究與概念設計，曾讓 Wistron 概念機在 CES 與 MSI、Razer、ROG、Acer、Dell 等品牌並列展出。那次經驗對我來說是一個提醒：
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">AI PC Envisioning 雖然還停留在願景和探索階段，但本質上，仍然是在為公司下一次被看見、被採用、拿到訂單的機會鋪路。</strong>先把一個可信、說得動人的未來版本設計出來，才有機會真的走到展場和市場。
                  </p>
                </div>

                {/* CES 圖片 */}
                <ZoomableImage
                  src={imgAipc61}
                  alt="2022 CES 展場舞台上，多個國際品牌筆電排成一列，左側一台螢幕顯示 Wistron 字樣的雙螢幕概念筆電，與 MSI、Razer、ROG、Acer、Dell 等品牌並列展示"
                  figcaption="2022 年，在同一客戶的雙螢幕電競 / 創作者筆電專案中，我參與的概念機曾在 CES 與各大品牌並列展出。這畫面對我來說，也是 AI PC 願景專案正在為公司累積的下一個目標"
                  className="mb-12"
                />

                {/* 個人職涯願景 */}
                <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 mt-4">
                  <p className="text-xl text-foreground font-medium leading-relaxed">
                    對未來的 Senior / Staff 職位，我希望持續扮演這樣的角色：讓模糊的未來變得可以對話、可以決策，也可以一步步被實現
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </>
      )}

      {/* Drone UX Content */}
      {projectId === "drone" && <DroneUXContent />}

      {/* AMR Robot Content */}
      {projectId === "amr-robot" && <AMRRobotContent />}

      {/* ESG Board Game Content */}
      {projectId === "esg-board-game" && <ESGBoardGameContent />}

      {/* Next Project Navigation */}
      {project.nextProject && (
        <section className="py-16 md:py-24 px-4 md:px-6 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">下一個專案</p>
            <Button 
              variant="heroOutline" 
              size="lg"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-6 sm:py-8 px-6 sm:px-8 md:px-12 max-w-full"
              onClick={() => navigate(`/project/${project.nextProject!.id}`)}
            >
              <span className="relative z-10 flex items-center truncate">
                {project.nextProject.title}
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
              </span>
            </Button>
          </div>
        </section>
      )}

      {/* Video Dialog for ESG project */}
      {'heroVideo' in project && project.heroVideo && (
        <Dialog open={videoDialogOpen} onOpenChange={(open) => {
          setVideoDialogOpen(open);
        }}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none">
            <DialogTitle className="sr-only">桌遊介紹影片</DialogTitle>
            <div className="aspect-video">
              {videoDialogOpen && (
                <iframe
                  src={project.heroVideo}
                  title="桌遊介紹影片"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetailV2;
