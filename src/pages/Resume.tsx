import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Globe, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

// JSON-LD structured data for Resume page
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jack Chen",
  "jobTitle": "Product / UX Designer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Taipei",
    "addressCountry": "Taiwan"
  },
  "sameAs": [
    "https://www.linkedin.com/in/tai-yun-chen/"
  ],
  "description": "Product / UX Designer focused on B2B systems, robotics, AI PC, drones, and ESG experiences."
};

const Resume = () => {

  const workExperience = [
    {
      company: "Wistron Corporation 緯創資通",
      title: "Assistant Technical Manager (UX / Product Design)",
      period: "2016/07 – 2025/02",
      location: "Taipei",
      type: "Full-time",
      responsibilities: [
        "負責企業內部多項產品設計策略與 UX 流程主導，帶領跨部門合作完成硬體結合軟體產品（創新筆電、服務型機器人、無人機等）之體驗定義與驗證，並推動生成式 AI 工具導入設計工作流",
        "AI 筆電與雙螢幕裝置 UX 策略探索：規劃 Creator / Gamer 等目標族群與情境研究，定義雙螢幕與 AI 筆電的使用情境、功能需求與互動模式",
        "研究 AI 筆電中 AI Agent 的使用模式與導入邏輯，建立初步 UX 指導架構，支援 AI PC 願景與產品路線規劃，並參與 CES 展出與國際客戶簡報",
        "服務型機器人 AMR 產品與系統設計：設計後台管理系統與機器人端 UI/UX，涵蓋商場、醫院、飯店等多場域應用，透過實測與錯誤回報持續優化操作體驗",
        "無人機地面控制站介面設計：整合實體搖桿與觸控介面，設計遙控器端 UI/UX，與操作人員與工程團隊協作調整配置與任務流程",
        "生成式 AI 設計應用導入：將 Midjourney、Photoshop Firefly 等工具導入 ESG 桌遊與展場影片，建立多人協作的 AI 圖像工作流，在有限時程下維持視覺風格一致與高品質輸出"
      ]
    },
    {
      company: "Reborn Academy",
      title: "UI / UX Design Mentor (約聘)",
      period: "2021/09 – 2022/03",
      location: "Taipei",
      type: "",
      responsibilities: [
        "指導對 UX 設計有興趣的大學生，協助理解產品設計流程、與業界合作模式及職涯規劃",
        "舉辦設計工作坊與一對一諮詢，說明使用者流程、介面設計與跨部門協作實務",
        "回饋學生作品集內容，引導建立自我敘事與設計觀點，提升應徵與面試準備"
      ]
    },
    {
      company: "Taipei Digital Group",
      title: "Senior Web Designer (Front-End Designer / Developer)",
      period: "2014/01 – 2016/07",
      location: "Taipei",
      type: "Full-time",
      responsibilities: [
        "負責企業形象網站、活動頁與 CMS 模板產品設計，兼具視覺設計與前端切版（HTML / CSS、RWD）",
        "設計並維護 20+ 網站專案，運用模組化版型提升製作效率與維護性",
        "與行銷部門合作優化活動頁流程與視覺呈現，提升停留時間與轉換率",
        "協助推動 SEO 架構優化，提升多個企業網站搜尋排行與自然流量"
      ]
    },
    {
      company: "UrWay Integrated Design",
      title: "Visual Designer",
      period: "2008/12 – 2009/12",
      location: "Taipei",
      type: "Full-time",
      responsibilities: [
        "1 年內完成 40+ 項設計專案，包含 Flash 活動網站／遊戲、企業網站與維護、品牌主視覺與 CIS",
        "作為對客戶窗口，協助提案簡報與需求對焦，降低修正次數與溝通成本",
        "參與優化內部設計流程，提高專案執行效率並縮短專案週期"
      ]
    }
  ];

  const projects = [
    {
      title: "AI PC｜Next-Gen Laptop – Research & Vision",
      description: "在 AI PC 尚未被清楚定義的階段，整合市場研究、問卷與未來情境，協助團隊提出兼顧前瞻性與可落地性的 AI PC 願景與分階段產品策略",
      link: "/project/ai-pc"
    },
    {
      title: "Drone｜Ground Control Station – Interaction & UX",
      description: "與無人機廠合作設計地面控制站（手持控制器＋ App）操作體驗，以任務為主重新整理流程與資訊層級，降低操作負擔並提升情境判讀清晰度",
      link: "/project/drone"
    },
    {
      title: "Wifundity AMR Robot｜Service Platform – Product & System UX",
      description: "從車隊管理後台到機器人端 App，設計多場域服務機器人的整體體驗，並透過賣場、飯店、醫院場域實測持續調整，平衡營運效率與現場體驗",
      link: "/project/amr-robot"
    },
    {
      title: "Wi-Thrive ESG Storytelling Game｜Experience & Visual System",
      description: "主導 ESG 桌遊《緯你同行 Wi-Thrive》體驗與視覺系統設計，將 ESG 行動轉化為卡牌與遊戲流程，用於招募說明會、內訓與對外品牌溝通，同時建立整套生成式 AI 插畫工作流",
      link: "/project/esg-board-game"
    }
  ];

  const skillsUX = [
    "UX 研究（訪談、問卷、分析、可用性測試）",
    "資訊架構（IA）與 Task flow 設計",
    "複雜系統與後台管理介面設計",
    "裝置端 App 與軟硬體整合體驗設計",
    "工作坊設計與利害關係人對齊",
    "故事敘事與簡報（面向管理層與客戶）"
  ];

  const skillsTools = [
    "UI / UX：Figma / FigJam、Adobe XD、Axure RP、Notion、NotebookLM",
    "Adobe CC：Photoshop / Illustrator、Premiere Pro、After Effects",
    "Generative AI：Midjourney、Photoshop Firefly、Kling、Suno"
  ];

  const certifications = [
    "經濟部 iPAS｜AI 應用規劃師 初級",
    "資策會｜生成式 AI 能力認證"
  ];

  const patents = [
    {
      title: "Joint Bending State Determining Device and Method",
      numbers: "TW I710355 (2020)｜EP 3825647 (2021)｜US 11,672,443 (2023)｜CN ZL201911248385.2 (2024)"
    },
    {
      title: "Systems and Methods for Retrofitting Exercise Machines with Smart Functions",
      numbers: "TW I783663 (2022)｜JP 7241147 (2023)｜US 11,857,839 (2024)｜EP 4108301 (2024)"
    },
    {
      title: "Brewing Guide Device and Method and Computer-readable Media Thereof",
      numbers: "TW I768508 (2022)｜US 11,751,719 (2023)｜EP 3984419 (2023)｜CN ZL202011330044.2 (2024)"
    }
  ];

  const education = [
    {
      school: "National Taipei University of Technology",
      degree: "Master's Degree, Industrial and Product Design",
      period: "2010 – 2013"
    },
    {
      school: "National Taiwan University of Arts",
      degree: "Bachelor's Degree, Visual Communication Design",
      period: "2003 – 2007"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Jack Chen – Product / UX Designer in Taipei | Resume & Portfolio</title>
        <meta name="description" content="Jack Chen is a Product / UX Designer based in Taipei, focused on B2B systems, robotics, AI PC, drones, and ESG experiences. View his resume, projects, and download Chinese / English PDFs." />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Hero Section */}
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resume 履歷
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Jack Chen｜Product / UX 設計師（B2B & 系統產品）
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                擁有 10 年以上產品與使用者體驗設計經驗，橫跨 B2B／B2B2C、複雜系統與軟硬體整合（創新筆電、服務型機器人、無人機、ESG 專案等），擅長在高不確定題目裡用研究與故事協助團隊釐清方向，讓產品決策更有依據
              </p>
              
              {/* Meta Bar */}
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  台北，台灣
                </span>
                <a href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Globe className="h-4 w-4" />
                  作品集網站
                </a>
                <a href="https://www.linkedin.com/in/tai-yun-chen/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="mailto:taiyun0614@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="py-4 px-4 md:px-6 bg-secondary/50 rounded-lg mb-12 print:hidden">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-medium text-foreground">
                  履歷下載
                </h3>
                <Button variant="hero" size="default" asChild>
                  <a href="/Resume_Tai-Yun_Chen_Jack_tw.pdf" download>
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      下載履歷 PDF
                    </span>
                  </a>
                </Button>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Profile｜個人簡介
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我是 Jack，一位<strong className="text-foreground">擅長將複雜需求與新技術轉化為可落地體驗</strong>的 Product / UX 設計師。累積<strong className="text-foreground">10+ 年設計實務經驗</strong>，其中<strong className="text-foreground">8 年在緯創</strong>參與多端與系統型產品，橫跨<strong className="text-foreground">創新筆電、服務型機器人、無人機、醫療復健與 ESG</strong>專案。我習慣<strong className="text-foreground">先把題目問清楚、對齊目標與成功指標</strong>，再用<strong className="text-foreground">研究、流程設計與驗證降低不確定性</strong>，推進<strong className="text-foreground">跨部門共識</strong>，將方向落實為<strong className="text-foreground">可上線、可驗證、能帶來成效</strong>的產品體驗。下一步希望在<strong className="text-foreground">不設限產業<span className="whitespace-nowrap">（B2B/B2C 皆可）</span></strong>的前提下，加入重視協作與落地的團隊，做出同時<strong className="text-foreground">改善使用者體驗</strong>、也能<strong className="text-foreground">帶動產品目標與成效</strong>的設計。
              </p>
            </section>
          </ScrollReveal>

          {/* Work Experience Section */}
          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Work Experience｜工作經歷
              </h2>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.company}｜{job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {job.period} · {job.location}{job.type && ` · ${job.type}`}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Selected Projects Section */}
          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Selected Projects｜精選專案
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Link 
                    key={index} 
                    to={project.link}
                    className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Skills & Tools｜技能與工具
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">UX / Product</h3>
                  <ul className="space-y-2">
                    {skillsUX.map((skill, index) => (
                      <li key={index} className="text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tools & Workflow</h3>
                  <ul className="space-y-2">
                    {skillsTools.map((tool, index) => (
                      <li key={index} className="text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Certifications & Patents Section */}
          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Certifications & Patents｜證照與專利
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Certifications｜證照</h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Patents｜專利</h3>
                  <div className="space-y-4">
                    {patents.map((patent, index) => (
                      <div key={index}>
                        <p className="font-medium text-foreground text-sm">{patent.title}</p>
                        <p className="text-sm text-muted-foreground">{patent.numbers}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Education Section */}
          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Education｜學歷
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Languages Section */}
          <ScrollReveal>
            <section className="py-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Languages｜語言
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                中文母語；英文可閱讀技術文件、撰寫簡報、參與會議（TOEIC 約 700）
              </p>
            </section>
          </ScrollReveal>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
