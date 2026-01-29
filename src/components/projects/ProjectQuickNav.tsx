import { useRef, useEffect, useState, useLayoutEffect } from "react";
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
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Desktop: Left-side sticky vertical navigation with dynamic highlight
export const DesktopQuickNav = ({ sections, activeSection, isVisible }: ProjectQuickNavProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, height: 0 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  // Dynamically calculate highlight position based on actual button positions
  useLayoutEffect(() => {
    if (listRef.current && hasBeenVisible) {
      const buttons = listRef.current.querySelectorAll('button');
      const activeIndex = sections.findIndex(s => s.id === activeSection);
      const activeButton = buttons[activeIndex] as HTMLElement;
      
      if (activeButton) {
        setHighlightStyle({
          top: activeButton.offsetTop,
          height: activeButton.offsetHeight
        });
      }
    }
  }, [activeSection, sections, hasBeenVisible]);

  if (!hasBeenVisible) {
    return null;
  }

  return (
    <nav 
      className={cn(
        "hidden xl:block fixed top-24 z-40 max-w-[180px]",
        isVisible 
          ? "animate-slide-in-left" 
          : "animate-slide-out-left pointer-events-none"
      )}
      style={{ 
        left: 'clamp(1rem, calc((100vw - 1400px) / 2 + 24px), 224px)'
      }}
    >
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          快速導覽
        </p>
        
        <div className="relative">
          {/* Dynamic highlight - uses actual button positions */}
          <div 
            className="absolute left-0 right-0 bg-primary/5 border-l-gradient transition-all duration-150 ease-out"
            style={{ 
              top: `${highlightStyle.top}px`,
              height: `${highlightStyle.height}px`
            }}
          />
          
          <ul ref={listRef} className="relative space-y-0.5">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-sm text-left w-full py-1.5 px-3 transition-colors duration-200 relative z-10",
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
      </div>
    </nav>
  );
};

// Mobile: Horizontal scrollable chip navigation with flowing highlight
export const MobileQuickNav = ({ sections, activeSection, isVisible }: ProjectQuickNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chipsContainerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = sections.findIndex(s => s.id === activeSection);
  
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const [highlightPos, setHighlightPos] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  // Check overflow and gradient visibility
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        const hasOverflow = scrollWidth > clientWidth;
        setIsOverflowing(hasOverflow);
        // Left gradient: show when scrolled right more than 5px
        setShowLeftGradient(hasOverflow && scrollLeft > 5);
        // Right gradient: show when not at the end
        setShowRightGradient(hasOverflow && scrollLeft < scrollWidth - clientWidth - 5);
      }
    };
    
    // Delayed check to ensure DOM is rendered
    const timer = setTimeout(checkOverflow, 50);
    
    window.addEventListener('resize', checkOverflow);
    
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkOverflow);
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', checkOverflow);
      }
    };
  }, [sections, hasBeenVisible]);

  // Calculate flowing highlight position using getBoundingClientRect for accuracy
  useLayoutEffect(() => {
    if (chipRefs.current[activeIndex] && chipsContainerRef.current) {
      const chip = chipRefs.current[activeIndex];
      const container = chipsContainerRef.current;
      if (chip && container) {
        const chipRect = chip.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        setHighlightPos({
          left: chipRect.left - containerRect.left + container.scrollLeft,
          width: chipRect.width
        });
      }
    }
  }, [activeIndex, hasBeenVisible, isOverflowing]);

  // Auto-scroll to active chip
  useEffect(() => {
    if (scrollRef.current && activeIndex >= 0 && isVisible) {
      const activeChip = chipRefs.current[activeIndex];
      if (activeChip) {
        activeChip.scrollIntoView({ 
          behavior: 'smooth', 
          inline: 'center', 
          block: 'nearest' 
        });
      }
    }
  }, [activeIndex, isVisible]);

  if (!hasBeenVisible) {
    return null;
  }

  return (
    <div 
      className={cn(
        "xl:hidden sticky top-[45px] md:top-[58px] z-30 bg-background/95 backdrop-blur-sm border-b border-border py-[0.2rem] px-3",
        isVisible
          ? "animate-slide-in-top"
          : "animate-slide-out-top pointer-events-none"
      )}
    >
      <div className="relative">
        {/* Left gradient mask */}
        <div 
          className={cn(
            "absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-background/95 to-transparent z-10 pointer-events-none transition-opacity duration-200",
            showLeftGradient ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Scrollable container */}
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div 
            ref={chipsContainerRef}
            className={cn(
              "flex gap-1.5 relative",
              isOverflowing ? "min-w-max" : "justify-center w-full"
            )}
          >
            {/* Flowing highlight bar */}
            <div 
              className="absolute top-0 bottom-0 bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ 
                left: `${highlightPos.left}px`,
                width: `${highlightPos.width}px`
              }}
            />
            
            {sections.map((section, index) => (
              <button
                key={section.id}
                ref={el => chipRefs.current[index] = el}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative z-10 px-2.5 py-[0.2rem] rounded-full text-xs whitespace-nowrap transition-colors duration-200",
                  activeSection === section.id
                    ? "text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {index + 1}. {section.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Right gradient mask */}
        <div 
          className={cn(
            "absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-background/95 to-transparent z-10 pointer-events-none transition-opacity duration-200",
            showRightGradient ? "opacity-100" : "opacity-0"
          )}
        />
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
