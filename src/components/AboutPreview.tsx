import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import JackAbout from "@/assets/Jack_about.webp";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">關於 Jack</h2>
        
        {/* 手機版動畫圖片 - 標題下方置中 */}
        <div className="md:hidden flex justify-center mb-6">
          <div className="w-24 aspect-square rounded-full overflow-hidden shadow-md">
            <img 
              src={JackAbout} 
              alt="Jack" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* 左圖右文佈局 */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          
          {/* 圓形動畫圖片 - 手機版隱藏 */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-48 lg:w-56 xl:w-64 aspect-square rounded-full overflow-hidden">
              <img 
                src={JackAbout} 
                alt="Jack" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* 文字內容 */}
          <div className="flex-1 text-left">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              8+ 年 Product/UX 設計師，經驗涵蓋 B2B/B2B2C 產品。於緯創擔任創新筆電、服務型機器人、無人機、ESG 等專案核心設計角色，也參與智慧咖啡秤、醫療監測後台等從 0 到 1 的跨領域專案
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              擅長在高不確定性的前期階段把問題釐清、縮小選項，用研究推動跨部門共識，讓決策更有脈絡地前進，幫助團隊少走叉路。不只關注使用者體驗細節，更協助團隊做出有依據的決策、達成商業目標
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => navigate("/about")}
              className="text-lg"
            >
              <span className="relative z-10 flex items-center">
                How I Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
