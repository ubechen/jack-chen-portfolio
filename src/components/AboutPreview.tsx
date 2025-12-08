import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
          我是 Jack，專注複雜系統與 B2B 產品的 Product / UX 設計師，看題目時不只站在設計端，而是從公司與產品策略的角度思考。
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          我用研究和故事幫團隊判斷「這題值不值得做、會帶來多大的影響」，再把它變成可落地的產品方向。
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate("/about")}
          className="text-lg"
        >
          認識我的設計思維
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default AboutPreview;
