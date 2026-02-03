import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import ZoomableImage from "@/components/ZoomableImage";
import portraitImage from "@/assets/portrait-jack.webp";
import bgAboutMe from "@/assets/bg_about-me.webp";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

// 產品類型資料
const productTypes = [
  {
    title: "B2B2C 系統產品",
    description: "服務型機器人後台系統與機器人端 app、無人機地面控制站 app、醫療復健新創流程"
  },
  {
    title: "B2B 系統產品",
    description: "醫療照護系統後台"
  },
  {
    title: "B2C 產品",
    description: "智慧咖啡秤 app"
  },
  {
    title: "市場研究與概念提案",
    description: "AI 筆電、雙螢幕/彎曲螢幕筆電、醫療復健產品、未來機器人新技術等"
  }
];

// 工作流程資料
const workflowSteps = [
  {
    title: "在決策前段幫團隊想清楚",
    description: "當專案剛開始，我會先釐清：這個問題值不值得花資源解決？解決後對誰有價值？我們怎麼知道做對了？透過訪談、問卷分析、工作坊等方法，把「老闆說想做」或「客戶要求」這種模糊的需求，拆解成可以評估、可以選擇的選項"
  },
  {
    title: "把研究轉化成決策工具",
    description: "經常協助 PM 組成提案骨架（問題、機會、方案、路線），整理功能優先序與風險評估，提供不同方案的假設，讓高層、客戶、內部團隊都能用自己熟悉的語言理解「我們為什麼要這樣做」、「為什麼不做另一個」"
  },
  {
    title: "用 AI 工具加速，但不取代思考",
    description: "我會用 AI 協助整理訪談逐字稿和問卷開放式回答，也用生成式影像、影片做概念視覺提案，讓討論更具體。育嬰留停期間，我持續探索 AI 工具和 UX 之間的進化，考取了 iPAS AI 應用規劃師初級與資策會生成式 AI 能力認證"
  }
];

// 個人特質資料
const personalTraits = [
  {
    emoji: "🧩",
    title: "個性偏 ISFJ 型",
    description: "守護者喜歡安靜觀察與內省，注重細節並且樂於助人"
  },
  {
    emoji: "👶",
    title: "新手爸爸 & 女兒奴",
    description: "陪女兒玩、觀察她怎麼跟世界互動，偶爾也會變成設計靈感的一部分"
  },
  {
    emoji: "☕️",
    title: "咖啡成癮 + 模型車收藏",
    description: "現在少手沖，多半靠外帶或膠囊；模型車則是在忙碌生活裡保留的小小儀式感"
  },
  {
    emoji: "🔵",
    title: "藍色控 + 細節龜毛",
    description: "偏愛各種藍色，也很享受在易用性測試裡當 debug 達人，把問題點抓出來整理好"
  },
  {
    emoji: "🎤",
    title: "幕前幕後切換自如",
    description: "習慣待在幕後整理不同角色的聲音；但在需要有人登場 pitch、主持工作坊或對外簡報時，也願意站到台前，讓團隊的成果被看見"
  }
];

const AboutV2 = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>How I Work｜我的工作方式｜Jack Chen</title>
        <meta name="description" content="介紹我的工作方式：從釐清題目與成功指標出發，透過研究與工作坊收斂方向，再用敘事、原型與驗證把策略轉成可執行的產品決策與體驗落地" />
        <link rel="canonical" href="https://taiyun.design/about-v2" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Navigation />
      
      {/* Section 1: 開場白 - 全寬 */}
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
              我是 Jack，Product / UX 設計師，過去 8 年在科技製造業打滾，擅長在高不確定性和跨部門協作中，把模糊題目整理成可以執行的方向。經手專案大多為系統型和複雜產品，如 AI PC、創新筆電、服務型機器人、無人機、醫療復健產品等
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              經常參與從 0 到 1 階段的專案，當前期需求方向還沒定案，我扮演的角色在協助把問題釐清、縮小選項，讓決策可以更有脈絡地前進
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              我通常不是衝最快的執行者，而是幫團隊少走冤枉路、避免做錯關鍵決定的人，對產品而言關注使用者體驗價值，同時對團隊也會對齊目標和成效
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

      {/* Section 2: 我主要做過的產品類型 - 2x2 Grid */}
      <ScrollReveal>
        <section className="py-16 px-6 bg-muted/70 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我主要做過的產品類型
            </h2>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {productTypes.map((product, index) => (
                <Card key={index} className="bg-card border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CES 2022 獨立段落 */}
            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                過去我參與的雙螢幕電競/創作者筆電概念設計，讓緯創概念機在 <strong className="text-foreground">CES 2022</strong> 與國際知名品牌並列展出
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                也有不少中途被迫停止的專案。不過這些失敗經驗讓我更清楚什麼樣的設計能存活，什麼樣的提案會在商業現實面前遇到挑戰
              </p>
            </div>
            
            {/* 工作場景拼貼圖片 */}
            <ZoomableImage 
              src={bgAboutMe} 
              alt="Jack 的工作場景拼貼：展場、工作坊、簡報、易用性測試等多元經驗"
              className="rounded-xl overflow-hidden shadow-lg"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: 我的工作流程 - 3 欄卡片 */}
      <ScrollReveal delay={100}>
        <section className="py-16 px-6 bg-primary/10 shadow-sm">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我的工作流程
            </h2>
            
            {/* 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <Card key={index} className="bg-card border border-border h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 4: 我的工作風格 - 全寬段落 */}
      <ScrollReveal delay={100}>
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我的工作風格
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                多數時候，我是那個安靜觀察的人。我會先把不同角色的顧慮聽完、拼成一張完整的圖，再幫大家一起縮小不確定性
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我傾向穩穩地往前推，而不是把團隊拉去做很前衛、但落不了地的東西
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                如果用人格類型來形容偏向 <strong className="text-foreground">ISFJ 型</strong>：重視信任感和長期合作關係，默默把該顧的細節顧好，願意撐住專案的底線
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                但當需要有人站出來時，我也能切換到台前：主持工作坊、對外 pitch、跟客戶簡報
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 5: 我期待的下一步 - 全寬 + CTA */}
      <ScrollReveal delay={100}>
        <section className="py-16 px-6 bg-muted/70 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              我期待的下一步
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                接下來我希望持續站在這個「決策前段」的位置
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                和 PM、工程、商業角色一起，把複雜問題想清楚，再把設計與產品推進到對的方向
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我期待加入一個有願景、隨著時代進步的團隊，擔任開發新產品或推廣產品的任務。不限制軟硬體與產業類型，只希望自己認同做的事情對自己和社會有所幫助和貢獻
              </p>
            </div>
            
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

      {/* Section 6: A bit more about me - 2 欄 Grid */}
      <ScrollReveal delay={100}>
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              A bit more about me
            </h2>
            
            {/* 2 Column Grid - 最後一個 item 全寬 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalTraits.slice(0, 4).map((trait, index) => (
                <Card key={index} className="bg-muted/50 border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{trait.emoji}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-foreground">{trait.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* 最後一個特質 - 全寬 */}
            <Card className="bg-muted/50 border border-border mt-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{personalTraits[4].emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{personalTraits[4].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{personalTraits[4].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default AboutV2;
