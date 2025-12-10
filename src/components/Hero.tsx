import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import heroImage from "@/assets/bg_index_hero.webp";

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
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(60, 131, 246, 0.5)' }} />
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white text-balance leading-[1.2] md:leading-normal" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
          幫團隊處理複雜題目的 Product / UX 設計夥伴
          <span className="block text-xl md:text-2xl font-normal text-white/80 mt-4 leading-[1.2] md:leading-normal" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)' }}>
            Jack Chen 專注多角色、多流程的 B2B 產品與系統設計
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="hero"
            onClick={() => scrollToSection("#projects")}
            className="text-lg"
          >
            <span className="relative z-10">View Projects</span>
          </Button>
          <a href="/cv.pdf" download>
            <Button
              size="lg"
              variant="heroOutline"
              className="text-lg w-full"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </span>
            </Button>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
