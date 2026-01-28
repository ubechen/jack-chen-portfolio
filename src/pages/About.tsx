import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import ZoomableImage from "@/components/ZoomableImage";
import portraitImage from "@/assets/portrait-jack.webp";
import bgAboutMe from "@/assets/bg_about-me.webp";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const About = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    navigate(`/${href}`);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>How I Work｜我的工作方式｜Jack Chen</title>
        <meta name="description" content="介紹我的工作方式：從釐清題目與成功指標出發，透過研究與工作坊收斂方向，再用敘事、原型與驗證把策略轉成可執行的產品決策與體驗落地" />
        <link rel="canonical" href="https://taiyun.design/about" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="author" content="Jack Chen" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="How I Work｜我的工作方式｜Jack Chen" />
        <meta property="og:description" content="從題目釐清到研究收斂，再到原型驗證與落地，整理我如何把策略轉成可執行的產品決策與體驗" />
        <meta property="og:url" content="https://taiyun.design/about" />
        <meta property="og:site_name" content="Jack Chen Portfolio" />
        <meta property="og:image" content="https://taiyun.design/images/og-about.png" />
        <meta property="og:image:alt" content="Jack Chen 工作方式介紹頁面" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How I Work｜我的工作方式｜Jack Chen" />
        <meta name="twitter:description" content="從題目釐清到研究收斂，再到原型驗證與落地，整理我如何把策略轉成可執行的產品決策與體驗" />
        <meta name="twitter:image" content="https://taiyun.design/images/og-about.png" />
      </Head>
      <Navigation />
      
      {/* Hero Section - White background */}
      <section className="pt-32 pb-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground animate-fade-in">
            About & How I Work
          </h1>
          
          {/* Profile Image with Mask */}
          <div 
            className="relative w-48 h-48 md:w-56 md:h-56 mb-8 animate-fade-in group"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            <div 
              className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-lg"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))`
              }}
            >
              <img 
                src={portraitImage} 
                alt="Jack Chen – Product / UX Designer portrait"
                className="w-full h-full object-cover"
              />
              {/* Flowing light hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            {/* Decorative border ring */}
            <div 
              className="absolute -inset-2 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-2 border-primary/20 -z-10"
            />
          </div>
          
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              我是 Jack，Product / UX 設計師，過去 8 年在科技製造業打滾，擅長在高不確定性和跨部門協作中，把模糊題目整理成可以執行的方向。我習慣先對齊目標和成功指標，再用研究、訪談和快速試作降低風險，讓團隊更快收斂選項並推進交付
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              我在意的不只是介面好不好看，而是設計能不能真的帶來使用者價值，同時對應產品目標和成效
            </p>
          </div>
          
          {/* View Resume Button */}
          <Link 
            to="/resume"
            className="animate-fade-in inline-block"
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
          >
            <Button variant="heroOutline" size="lg" className="text-lg">
              <span className="relative z-10">View Resume</span>
            </Button>
          </Link>
        </div>
      </section>

      <ScrollReveal>
        {/* Section: 題目有沒有被問對 - Muted background */}
        <section className="py-16 px-6 bg-muted/70 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              現在我關注的不再是「UI 畫得多吸睛」，而是「題目有沒有被問對」
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              這幾年在科技製造和 B2B 產品環境裡，我長期待在一個尷尬、但很有價值的位置：介於 <strong className="text-foreground">業務/PM/高層</strong> 和 <strong className="text-foreground">ID/ME/RD</strong> 之間
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              很多時候，我被丟到一個模糊題目裡，例如：
            </p>
            
            <ul className="space-y-3 mb-8 pl-6">
              <li className="text-lg text-muted-foreground">• 「我們也要做 AI PC，但下一代要做什麼？」</li>
              <li className="text-lg text-muted-foreground">• 「這個新硬體模組有前景，能不能發展落地應用？」</li>
              <li className="text-lg text-muted-foreground">• 「老闆說想要更前瞻性的未來機器人，可是講不清楚要什麼」</li>
            </ul>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              我習慣做的第一件事是：
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-6">
              <p className="text-lg text-foreground italic">
                先把題目拆開、對齊「為什麼要做」和「做了之後怎麼判斷有價值」，再用研究和設計去幫團隊減少決策的不確定性
              </p>
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: 面對的產品與情境 - White background */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我主要面對的，是這幾種產品與情境
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">複雜系統與 B2B / B2B2C 產品</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                  例如：創新筆電、無人機/機器人/AMR、企業內部系統、醫療復健系統等具備多角色、多流程的服務
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-2">過去專案落地經驗包含：</p>
                <ul className="space-y-2 pl-6 mb-4">
                  <li className="text-lg text-muted-foreground">• B2B2C 系統產品：服務型機器人後台系統與機器人端 app、無人機地面控制站 app</li>
                  <li className="text-lg text-muted-foreground">• B2B 系統產品：醫療照護系統後台</li>
                  <li className="text-lg text-muted-foreground">• B2C 產品：智慧咖啡秤 app</li>
                  <li className="text-lg text-muted-foreground">• 市場研究與概念提案：AI 筆電、雙螢幕/彎曲螢幕筆電、醫療復健產品、機器人新技術等</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mb-2">這些產品的共通點是：</p>
                <ul className="space-y-2 pl-6 mb-4">
                  <li className="text-lg text-muted-foreground">• 決策牽涉多個利害關係人</li>
                  <li className="text-lg text-muted-foreground">• 影響的不只是一個畫面，而是一整條流程和商業模式</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  其中也包含從 0 到 1 的創新醫療復健產品落地，還有不少中途被迫停止的專案，這些經驗讓我深刻感受到設計與商業之間的妥協，也更清楚什麼樣的設計能真的活下來
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">軟硬體整合的體驗</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  和 ID、ME、韌體團隊合作，把感測器、控制器這種「看起來很技術」的東西，化成使用者看得懂、容易使用的體驗。我喜愛參與軟硬體整合產品開發，期望這些硬體產品能讓生活更好
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">高不確定性的探索題目</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  像是 AI PC 的未來形態、新技術模組應用，或 ESG/永續相關的新服務方向。這些題目通常還沒有標準答案，需要一邊研究、一邊幫團隊找出可以嘗試的路徑
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Work Scene Collage Image */}
      <ScrollReveal delay={100}>
        <section className="py-8 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <ZoomableImage 
              src={bgAboutMe} 
              alt="Jack 的工作場景拼貼：展場、工作坊、簡報、易用性測試等多元經驗"
              className="rounded-xl overflow-hidden shadow-lg"
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: 工作方式 - Primary accent background */}
        <section className="py-16 px-6 bg-primary/10 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我怎麼工作：Research × Story × Decision
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              我比較像是「拿著研究和故事，陪團隊做選擇」的設計師
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">研究與問題釐清</h3>
                  <ul className="space-y-2">
                    <li className="text-lg text-muted-foreground">• 規劃訪談、問卷分析、工作坊等方法</li>
                    <li className="text-lg text-muted-foreground">• 不只是蒐集 insight，而是幫忙回答：<span className="text-foreground italic">「這個問題『值不值得』花資源解決？解決後『對誰』有價值？」</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">用故事把複雜的東西說清楚</h3>
                  <ul className="space-y-2">
                    <li className="text-lg text-muted-foreground">• 把研究、數據、技術限制整理成「決策者聽得懂的語言」</li>
                    <li className="text-lg text-muted-foreground">• 習慣幫 PM 組成提案骨架，例如：新產品機會敘事、功能優先序與路線圖、不同方案的風險與投資報酬假設</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">與工程與硬體團隊一起把方向落地</h3>
                  <ul className="space-y-2">
                    <li className="text-lg text-muted-foreground">• 把情境轉成具體 flow、元件規格與狀態</li>
                    <li className="text-lg text-muted-foreground">• 與工程、ID、ME 一起確認：哪些是短期可以實作的 MVP，哪些是中期可拆解的技術路線</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">善用 AI 工具加速，而不是取代思考</h3>
                  <ul className="space-y-2">
                    <li className="text-lg text-muted-foreground">• 用 AI 協助整理訪談與問卷開放式回答，加速看見模式和共通點</li>
                    <li className="text-lg text-muted-foreground">• 用生成式影像做概念視覺提案，讓工作坊和評估討論更具體</li>
                    <li className="text-lg text-muted-foreground">• 設計 prompt 結構或分享教學，幫助團隊熟悉並穩定運用 AI 工具</li>
                    <li className="text-lg text-muted-foreground">• 也因此投入系統化學習，並通過 iPAS AI 應用規劃師初級、與資策會生成式 AI 能力認證</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              多數時候，我比較像安靜觀察的人：先把不同角色的顧慮聽完、拼成一張完整的圖，再幫大家一起縮小不確定性。我傾向穩穩地往前推，而不是把團隊拉去做很炫、但落不了地的東西
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              如果用人格來形容，大概是偏向 ISFJ 型：重視信任感、默默把該顧的細節顧好，也願意撐住專案的底線
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: 關注的主題 - White background */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我現在關注的主題
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">複雜產品與 B2B 服務的體驗優化</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  不管是 AI PC、機器人還是內部系統，我特別在意的是：能不能真的讓不同角色「少一點摩擦」，能不能幫產品團隊看見新的商機或模式
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">負責任的產品決策</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  包含：在導入 AI 或自動化時，不只是追求「能做」，也討論「應不應該做、做到什麼程度」；在有 ESG、永續或治理議題時，及早把這些限制納入設計和溝通，而不是最後才補一塊說明
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">把 UX 從「輸出螢幕」變成「輸出決策品質」</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我希望 UX 在組織裡，不只是畫 UI、做 usability、維護設計系統，而是：<span className="text-foreground italic">幫團隊問對問題、做對選擇，並把這些選擇做得清楚、好用又可被信任</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: CTA - Muted background */}
        <section className="py-16 px-6 bg-muted/70 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              如果你們正在找這樣的人…
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              隨著個人心境轉變以及 AI 時代的跳躍式演進，我不想限制在只負責 UI/UX 任務的框架內
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              我期望未來可以加入一個具有願景、隨著時代進步的團隊，擔任開發新產品、推廣與產品迭代的任務，不限制軟硬體與產業類型，只希望自己認同做的事情對自己和社會有所幫助和貢獻
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">如果你面對的是：</p>
            <ul className="space-y-3 mb-8 pl-6">
              <li className="text-lg text-muted-foreground">• <strong className="text-foreground">複雜產品、B2B / B2B2C、跨部門決策很多的題目</strong></li>
              <li className="text-lg text-muted-foreground">• 需要有人能：和 PM 一起定義問題與路線圖、和工程/ID/ME 一起把東西做出來、和利害關係人講清楚「我們為什麼要這樣做」</li>
            </ul>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              那麼我們可以聊一聊喔
            </p>
            
            {/* 3 Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:taiyun0614@gmail.com">
                <Button size="lg" variant="contactLink" className="text-lg w-full">
                  <span className="relative z-10 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/tai-yun-chen/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="contactLink" className="text-lg w-full">
                  <span className="relative z-10 flex items-center">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </span>
                </Button>
              </a>
              <a href="https://medium.com/@taiyunchen" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="contactLink" className="text-lg w-full">
                  <span className="relative z-10 flex items-center">
                    <MediumIcon />
                    <span className="ml-2">Medium</span>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: AI & Continuous Learning */}
        <section className="py-16 px-6 bg-primary/15 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              AI & Continuous Learning
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">AI 工具融入設計流程</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    在緯創專案期間，我主動將生成式 AI 工具（如 Midjourney、Photoshop Firefly）導入 ESG 桌遊與展場影片製作，建立可複製的 AI 圖像工作流，讓團隊在壓縮的時程下維持高品質和風格一致的產出
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    育嬰留停期間，我也持續探索 AI 工具和 AI 與 UX 之間的進化，並考取 AI 相關證書作為自我挑戰。我喜愛吸收新知、願意嘗試新事物、也樂於分享我所看到或學到的，擴展橫向領域專長也是我的特質之一，當挑戰來臨的時候能夠勇於面對
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📜</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">AI 相關認證</h3>
                  <ul className="space-y-2">
                    <li className="text-lg text-muted-foreground">• 經濟部 iPAS｜AI 應用規劃師 初級</li>
                    <li className="text-lg text-muted-foreground">• 資策會｜生成式 AI 能力認證</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">持續學習 & Side Project</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    這個作品集網站是我用 No-Code 工具（Lovable）打造的 side project，探索如何透過 AI 協作快速將想法轉化為成品。未來我希望能進一步探索 AI agent、No-code / Low-code 工具融入設計工作流程上的可能性
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* Section: A bit more about me - Redesigned to match AI section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              A bit more about me
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🧩</span>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    個性偏 ISFJ 型：安靜觀察多一點、搶話少一點，重視信任和長期合作關係
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👶</span>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    新手爸爸 & 女兒奴：下班最期待的就是陪女兒玩，觀察她怎麼跟世界互動，偶爾也會變成設計靈感的一部分
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">☕️</span>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    咖啡成癮 + 模型車收藏：現在少手沖，多半靠外帶或膠囊續命；模型車則是在忙碌生活裡保留的小小儀式感
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔵</span>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    藍色控 + 細節龜毛：偏愛各種藍色，也很享受在易用性測試裡當「debug 達人」，一條一條把問題點抓出來整理好
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎤</span>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    幕前幕後切換自如：習慣待在幕後穩住局面、整理不同角色的聲音；但在需要有人登場 pitch、主持工作坊或對外簡報時，也願意站到台前，讓團隊的成果被看見
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default About;
