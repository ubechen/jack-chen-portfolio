import { cn } from "@/lib/utils";
import { Section } from "@/hooks/useScrollSpy";

interface ProjectQuickNavProps {
  sections: Section[];
  activeSection: string;
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

// Desktop: Left-side sticky vertical navigation
export const DesktopQuickNav = ({ sections, activeSection }: ProjectQuickNavProps) => {
  return (
    <nav className="hidden xl:block fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40 max-w-[180px]">
      <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          快速導覽
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "text-sm text-left w-full py-1.5 px-3 rounded-md transition-all duration-200",
                  "border-l-2",
                  activeSection === section.id
                    ? "border-l-primary text-foreground font-medium bg-primary/5"
                    : "border-l-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Mobile: Horizontal scrollable chip navigation
export const MobileQuickNav = ({ sections, activeSection }: ProjectQuickNavProps) => {
  return (
    <div className="xl:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3 px-4">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectQuickNav = ({ sections, activeSection }: ProjectQuickNavProps) => {
  return (
    <>
      <DesktopQuickNav sections={sections} activeSection={activeSection} />
      <MobileQuickNav sections={sections} activeSection={activeSection} />
    </>
  );
};

export default ProjectQuickNav;
