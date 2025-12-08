import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 px-6 bg-muted">
<div className="max-w-2xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">About</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          我是 Jack，專注複雜系統與 B2B 產品的 Product / UX 設計師，關注的不只是畫面、而是「這題有沒有被問對、做了之後能創造多大影響」。
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          我習慣用研究、訪談和工作坊幫團隊釐清方向，再把模糊的題目變成可以落地的產品決策。也在過程中持續鑽研 AI 工具的設計應用，並通過 iPAS AI 應用規劃師初級與資策會生成式 AI 能力認證。
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          如果你們正在探索下一代產品方向、面對高不確定性的策略題目，歡迎聊聊，一起把事情往前推進。
        </p>
        <Button
          variant="heroOutline"
          size="lg"
          onClick={() => navigate("/about")}
          className="text-lg"
        >
          <span className="relative z-10 flex items-center">
            認識我的設計思維
            <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default AboutPreview;
