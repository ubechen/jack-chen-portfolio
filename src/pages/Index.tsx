import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const personWebsiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://taiyun.design/#jack-chen",
      "name": "Jack Chen",
      "alternateName": ["陳泰運", "Tai-Yun Chen", "Chen Tai-Yun", "taiyun"],
      "jobTitle": "Product / UX Designer",
      "url": "https://taiyun.design/",
      "sameAs": [
        "https://www.linkedin.com/in/tai-yun-chen/"
      ],
      "knowsAbout": [
        "Product Design",
        "UX Research",
        "B2B Systems",
        "Enterprise UX",
        "AI PC (Laptop) Concept Vision",
        "Drone Ground Control Station",
        "Service Robot Platform",
        "Fleet Management Dashboard",
        "ESG Storytelling",
        "Generative AI Workflow"
      ],
      "description": "Product / UX 設計師，專注 B2B 與系統型產品，涵蓋 AI PC 概念願景、無人機地面控制站、服務型機器人平台與 ESG 桌遊體驗"
    },
    {
      "@type": "WebSite",
      "@id": "https://taiyun.design/#website",
      "url": "https://taiyun.design/",
      "name": "Jack Chen Portfolio",
      "inLanguage": "zh-Hant",
      "publisher": { "@id": "https://taiyun.design/#jack-chen" }
    }
  ]
};

const featuredProjectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Featured Projects",
  "inLanguage": "zh-Hant",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "AI PC｜Research & Vision",
      "url": "https://taiyun.design/project/ai-pc",
      "description": "在 AI PC 尚未定義前，以研究與分析整理 10 項 AI 功能優先序與 3 組未來工作情境，協助 PM 建立產品藍圖與取捨依據"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Drone System｜Control Experience",
      "url": "https://taiyun.design/project/drone",
      "description": "與國內無人機大廠合作開發地面控制站，從競品研究到實機測試，設計操作者可依賴的控制器與介面"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AMR Robot｜Service System Design",
      "url": "https://taiyun.design/project/amr-robot",
      "description": "參與服務型機器人產品線，從後台管理系統到機器人端 App，設計支援多場域營運的完整體驗"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Wi-Thrive｜ESG Storytelling Game",
      "url": "https://taiyun.design/project/esg-board-game",
      "description": "與 ESG 辦公室、HR 與臺科大合作桌遊設計，結合 GenAI 圖像與 UX 調整，讓永續行動被玩懂"
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Head>
        {/* Primary SEO */}
        <title>Jack Chen（陳泰運）｜Product / UX 設計作品集｜B2B 系統・AI PC・無人機・服務型機器人・ESG</title>
        <meta name="description" content="Jack Chen（陳泰運 / Tai-Yun Chen）是 Product / UX 設計師，擅長 B2B 與系統型產品，作品涵蓋 AI PC 概念願景、無人機地面控制站、服務型機器人平台與 ESG 桌遊體驗，提供專案案例與履歷下載" />
        <meta name="author" content="Jack Chen" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href="https://taiyun.design/" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Jack Chen Portfolio" />
        <meta property="og:title" content="Jack Chen（陳泰運）｜Product / UX 設計作品集" />
        <meta property="og:description" content="B2B 系統・AI PC・無人機地面控制站・服務型機器人平台・ESG 桌遊｜專案案例、工作方式與履歷" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taiyun.design/" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jack Chen（陳泰運）｜Product / UX 設計作品集" />
        <meta name="twitter:description" content="B2B 系統・AI PC・無人機・服務型機器人・ESG｜專案案例與履歷" />
        <meta name="twitter:site" content="@jackchen_ux" />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
        
        {/* JSON-LD: Person + WebSite */}
        <script type="application/ld+json">{JSON.stringify(personWebsiteSchema)}</script>
        
        {/* JSON-LD: Featured Projects */}
        <script type="application/ld+json">{JSON.stringify(featuredProjectsSchema)}</script>
      </Head>
      <Navigation />
      <Hero />
      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="bg-background">
          <Projects />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="bg-background">
          <Contact />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Index;
