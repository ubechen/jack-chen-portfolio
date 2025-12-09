import { useState, useEffect } from "react";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const projectItems = [
    { label: "AI PC", href: "/project/ai-pc" },
    { label: "Drone UX", href: "/project/drone-ux" },
    { label: "AMR Robot", href: "/project/amr-robot" },
    { label: "ESG Board Game", href: "/project/esg-board-game" },
    { label: "BabyFlow", href: "/project/babyflow" },
  ];

  const menuItems = [
    { 
      label: "About", 
      href: "#about", 
      isPage: false,
      subItems: [
        { label: "我的工作方式", href: "/about" }
      ]
    },
    { 
      label: "Projects", 
      href: "#projects", 
      isPage: false,
      subItems: projectItems
    },
    { label: "Contact", href: "#contact", isPage: false },
  ];

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "projects", "contact"];
    
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (isAtBottom) {
        setActiveSection("#contact");
        return;
      }
      
      let currentSection = "";
      const navHeight = 80;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const handleNavigation = (href: string, isPage: boolean = false) => {
    if (href.startsWith("/project/") || href === "/about") {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }

    if (isPage) {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }

    const currentIsHomePage = location.pathname === "/";
    
    if (!currentIsHomePage) {
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

  const toggleMobileExpand = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
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
              item.subItems ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className={`${getNavItemClass(item.href)} flex items-center gap-1 focus:outline-none`}>
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background border border-border shadow-lg">
                    <DropdownMenuItem 
                      onClick={() => handleNavigation(item.href, item.isPage)}
                      className="cursor-pointer"
                    >
                      {item.label === "About" ? "About 總覽" : "Projects 總覽"}
                    </DropdownMenuItem>
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem 
                        key={subItem.label}
                        onClick={() => handleNavigation(subItem.href)}
                        className="cursor-pointer"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href, item.isPage)}
                  className={getNavItemClass(item.href)}
                >
                  {item.label}
                </button>
              )
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
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className={`${getMobileNavItemClass(item.href)} flex items-center justify-between w-full`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobile === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedMobile === item.label && (
                      <div className="pl-4 border-l border-border ml-2">
                        <button
                          onClick={() => handleNavigation(item.href, item.isPage)}
                          className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {item.label === "About" ? "About 總覽" : "Projects 總覽"}
                        </button>
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavigation(subItem.href)}
                            className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href, item.isPage)}
                    className={getMobileNavItemClass(item.href)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
