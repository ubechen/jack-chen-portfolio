import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Jack Chen｜Product / UX 設計作品集｜系統型與產品體驗</title>
        <meta name="description" content="Jack Chen 的作品集，擅長在複雜題目中用研究、敘事與原型協助團隊對齊目標與下一步，涵蓋 AI 筆電概念、無人機控制站、服務機器人與 ESG 體驗專案" />
        <meta property="og:title" content="Jack Chen｜Product / UX 設計作品集｜系統型與產品體驗" />
        <meta property="og:description" content="以研究、敘事與原型協助團隊在複雜題目中對齊目標與下一步，精選 AI 筆電、無人機控制站、服務機器人與 ESG 體驗專案" />
        <meta name="twitter:title" content="Jack Chen｜Product / UX 設計作品集｜系統型與產品體驗" />
        <meta name="twitter:description" content="以研究、敘事與原型協助團隊在複雜題目中對齊目標與下一步，精選 AI 筆電、無人機控制站、服務機器人與 ESG 體驗專案" />
      </Helmet>
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
