import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/hooks/useScrollSpy";

interface ProjectQuickNavProps {
  sections: Section[];
  activeSection: string;
  isVisible: boolean;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Desktop: Left-side sticky vertical navigation with sliding highlight
export const DesktopQuickNav = ({ sections, activeSection, isVisible }: ProjectQuickNavProps) => {
  const activeIndex = sections.findIndex(s => s.id === activeSection);
  const itemHeight = 36; // Height of each nav item in pixels
  const headerHeight = 40; // Height of the header "快速導覽"

  return (
    <nav 
      className={cn(
        "hidden xl:block fixed left-6 2xl:left-10 top-24 z-40 max-w-[180px]",
        isVisible 
          ? "animate-slide-in-left" 
          : "animate-slide-out-left pointer-events-none"
      )}
    >
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm relative overflow-hidden">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          快速導覽
        </p>
        
        {/* Dynamic highlight background block - moves with active section */}
        <div 
          className="absolute left-0 right-4 h-9 bg-primary/5 border-l-2 border-l-primary transition-transform duration-150 ease-out"
          style={{ 
            transform: `translateY(${activeIndex * itemHeight + headerHeight}px)`,
          }}
        />
        
        <ul className="space-y-1 relative">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "text-sm text-left w-full py-1.5 px-3 transition-colors duration-200",
                  activeSection === section.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {index + 1}. {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Mobile: Horizontal scrollable chip navigation
export const MobileQuickNav = ({ sections, activeSection, isVisible }: ProjectQuickNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndex = sections.findIndex(s => s.id === activeSection);

  // Auto-scroll to active chip when active section changes
  useEffect(() => {
    if (scrollRef.current && activeIndex >= 0) {
      const container = scrollRef.current;
      const chips = container.querySelectorAll('button');
      const activeChip = chips[activeIndex] as HTMLElement;
      
      if (activeChip) {
        activeChip.scrollIntoView({ 
          behavior: 'smooth', 
          inline: 'center', 
          block: 'nearest' 
        });
      }
    }
  }, [activeIndex]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={cn(
        "xl:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-2 px-4",
        "animate-slide-in-top"
      )}
    >
      <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
        <div className="flex gap-2 min-w-max">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-150",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {index + 1}. {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectQuickNav = ({ sections, activeSection, isVisible }: ProjectQuickNavProps) => {
  return (
    <>
      <DesktopQuickNav sections={sections} activeSection={activeSection} isVisible={isVisible} />
      <MobileQuickNav sections={sections} activeSection={activeSection} isVisible={isVisible} />
    </>
  );
};

export default ProjectQuickNav;
