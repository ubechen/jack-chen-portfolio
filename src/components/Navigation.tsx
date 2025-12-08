import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { label: "About", href: "#about", isPage: false },
    { label: "Projects", href: "#projects", isPage: false },
    { label: "AI × UX", href: "#ai-ux", isPage: false },
    { label: "Contact", href: "#contact", isPage: false },
  ];

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "projects", "ai-ux", "contact"];
    
    const handleScroll = () => {
      // 如果在頁面頂部（Hero 區域），清除所有 highlight
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }
      
      // 找出最接近視窗頂部的區塊
      let currentSection = "";
      const navHeight = 80;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 區塊頂部已經超過導航列下方，且還在視窗內
          if (rect.top <= navHeight + 100 && rect.bottom > navHeight) {
            currentSection = `#${id}`;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleLogoClick = () => {
    setActiveSection("");
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavigation = (href: string, isPage: boolean) => {
    if (isPage) {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }

    const isHomePage = location.pathname === "/";
    
    if (!isHomePage) {
      navigate(`/${href}`);
      setIsMenuOpen(false);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const getNavItemClass = (href: string) => {
    const isActive = activeSection === href;
    return `text-sm transition-colors ${
      isActive 
        ? "text-foreground font-semibold border-b-2 border-primary pb-1" 
        : "text-muted-foreground hover:text-foreground"
    }`;
  };

  const getMobileNavItemClass = (href: string) => {
    const isActive = activeSection === href;
    return `block w-full text-left py-3 transition-colors ${
      isActive 
        ? "text-foreground font-semibold" 
        : "text-muted-foreground hover:text-foreground"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            {isHomePage ? (
              "Jack Chen"
            ) : (
              <Home className="h-5 w-5" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className={getNavItemClass(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-in">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className={getMobileNavItemClass(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;