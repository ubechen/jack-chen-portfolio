import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import JackAbout from "@/assets/Jack_about.webp";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">About</h2>
        
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
              我是 Jack，Product / UX 設計師，專注把複雜需求與新技術整理成清楚可行的產品體驗。我在意的不只是設計端，而是題目有沒有被問對：先對齊目標與判斷標準，再透過研究與快速試作，把不確定的地方提早釐清，讓團隊更踏實地做選擇並推進
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              近年我也持續把生成式 AI 納入日常流程，提升探索與迭代效率，並以相關證照作為學習成果的驗證
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              我能為團隊帶來的是：把使用者需求、工程限制與產品目標對齊，讓設計不只好用，也能更快推進交付並產生成效
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
