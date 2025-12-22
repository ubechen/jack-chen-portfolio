import { useState, useEffect } from "react";
import { Home, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isProjectPage = location.pathname.startsWith("/project/");

  const projectItems = [
    { label: "AI PC", href: "/project/ai-pc" },
    { label: "Drone System", href: "/project/drone-ux" },
    { label: "Wifundity AMR", href: "/project/amr-robot" },
    { label: "Wi-Thrive ESG Game", href: "/project/esg-board-game" },
    { label: "BabyFlow", href: "/project/babyflow" },
  ];

  const menuItems = [
    { 
      label: "About", 
      href: "#about", 
      isPage: false,
      subItems: [
        { label: "How I Work", href: "/about" },
        { label: "Resume", href: "/resume" }
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
    if (href.startsWith("/project/") || href === "/about" || href === "/resume") {
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

  const getNavItemClass = (href: string, isParentMenu?: boolean) => {
    let isActive = activeSection === href;
    
    // Highlight based on current page
    if (isParentMenu) {
      if (href === "#about" && isAboutPage) isActive = true;
      if (href === "#projects" && isProjectPage) isActive = true;
    }
    
    // Always include pb-1 border-b-2 to prevent text shift, only change border color
    return `text-sm transition-colors pb-1 border-b-2 ${
      isActive 
        ? "text-foreground font-semibold border-primary" 
        : "text-muted-foreground hover:text-foreground border-transparent"
    }`;
  };

  const getMobileNavItemClass = (href: string, isParentMenu?: boolean) => {
    let isActive = activeSection === href;
    
    // Highlight based on current page
    if (isParentMenu) {
      if (href === "#about" && isAboutPage) isActive = true;
      if (href === "#projects" && isProjectPage) isActive = true;
    }
    
    return `block w-full text-left py-3 transition-colors ${
      isActive 
        ? "text-foreground font-semibold" 
        : "text-muted-foreground hover:text-foreground"
    }`;
  };

  const toggleMobileExpand = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setExpandedMobile(null);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border",
      isMenuOpen && "shadow-[0px_4px_10px_rgba(0,0,0,0.15)] md:shadow-none"
    )}>
      <div className="container mx-auto px-6 py-0 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="text-xl font-semibold flex items-center gap-2 px-3 py-1.5 rounded-md group"
          >
            {isHomePage ? (
              <span 
                className="relative transition-all duration-500 ease-out"
                style={{
                  backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 50%, hsl(var(--primary)) 50%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0';
                }}
              >
                Jack Chen
              </span>
            ) : (
              <Home className="h-5 w-5 transition-colors duration-300 text-foreground group-hover:text-primary" />
            )}
          </button>

          {/* Desktop Menu - Custom hover dropdown */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => handleNavigation(item.href, item.isPage)}
                    className={`${getNavItemClass(item.href, true)} flex items-center gap-1`}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border shadow-lg p-2 min-w-[160px] rounded-lg">
                      <ul className="space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <button
                              onClick={() => handleNavigation(subItem.href)}
                              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:font-semibold transition-colors"
                            >
                              {subItem.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            className={cn(
              "md:hidden relative w-11 h-11 rounded-full flex items-center justify-center transition-colors",
              isMenuOpen 
                ? "bg-muted" 
                : "bg-transparent hover:bg-muted/50"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span className={cn(
                "block h-0.5 w-4 bg-foreground rounded-full transition-all duration-300 origin-center",
                isMenuOpen && "rotate-45 translate-y-[5px]"
              )} />
              <span className={cn(
                "block h-0.5 w-4 bg-foreground rounded-full transition-all duration-300",
                isMenuOpen && "opacity-0 scale-x-0"
              )} />
              <span className={cn(
                "block h-0.5 w-4 bg-foreground rounded-full transition-all duration-300 origin-center",
                isMenuOpen && "-rotate-45 -translate-y-[5px]"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - fade in from top */}
        {isMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 animate-fade-in-down bg-background border-t border-border"
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className={`${getMobileNavItemClass(item.href, true)} flex items-center justify-between w-full`}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        expandedMobile === item.label && "rotate-180"
                      )} />
                    </button>
                    {expandedMobile === item.label && (
                      <div className="pl-4 border-l border-border ml-2">
                        {item.subItems.map((subItem) => {
                          const isActiveSubItem = location.pathname === subItem.href;
                          return (
                            <button
                              key={subItem.label}
                              onClick={() => handleNavigation(subItem.href)}
                              className={cn(
                                "block w-full text-left py-2 text-sm transition-colors",
                                isActiveSubItem 
                                  ? "text-primary font-bold" 
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {subItem.label}
                            </button>
                          );
                        })}
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