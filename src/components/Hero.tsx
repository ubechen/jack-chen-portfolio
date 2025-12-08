import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/ai-pc-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/85" />
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-snug text-foreground text-balance">
          Jack｜幫團隊處理複雜題目的 Product / UX 設計夥伴
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          專注複雜系統與 B2B 產品，用研究與故事讓決策更踏實
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="hero"
            onClick={() => scrollToSection("#projects")}
            className="text-lg"
          >
            <span className="relative z-10 flex items-center">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="heroOutline"
            onClick={() => scrollToSection("#contact")}
            className="text-lg"
          >
            <span className="relative z-10">Contact</span>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
