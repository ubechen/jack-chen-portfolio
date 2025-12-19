import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 px-6 bg-background">
<div className="max-w-2xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">About</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          我是 Jack，多數時間在 B2B 與系統型產品裡擔任 Product / UX 設計師。看題目時不只站在設計端，而是從公司與產品策略出發，關注的是「問題有沒有問對、決策會不會產生實際影響」。
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          我用研究和故事幫團隊判斷這題值不值得做、應該先做哪一步，並把它變成可落地的產品方向。
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          日常也把 AI 工具融入研究與設計流程，並持續進修取得 AI 相關專業證照。
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          如果你們正在探索下一代產品方向，或面對高不確定性的策略題目，歡迎聊聊，一起把事情往前推進。
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
    </section>
  );
};

export default AboutPreview;
