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
    if (!isHomePage) return;

    const sectionIds = ["about", "projects", "ai-ux", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleLogoClick = () => {
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