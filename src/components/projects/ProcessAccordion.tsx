import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubSection {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface ProcessAccordionProps {
  sectionTitle: React.ReactNode;
  introContent: React.ReactNode;
  subSections: SubSection[];
  sectionId?: string;
  className?: string;
}

const ProcessAccordion = ({ 
  sectionTitle, 
  introContent, 
  subSections,
  sectionId = "what-we-did",
  className
}: ProcessAccordionProps) => {
  // Track which subsections are expanded - default all collapsed
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id={sectionId} className={cn("py-16 md:py-24 px-4 md:px-6", className)}>
      <div className="container mx-auto max-w-4xl">
        {/* Main section title - always visible */}
        {sectionTitle}
        
        {/* Intro paragraph - always visible */}
        <div className="mb-10">
          {introContent}
        </div>

        {/* Sub-sections - titles always visible, content collapsible */}
        <div className="space-y-4">
          {subSections.map((sub) => {
            const isExpanded = expandedSections.has(sub.id);
            return (
              <div key={sub.id} className="border-l-2 border-border hover:border-primary/50 transition-colors">
                {/* Sub-section title - clickable to expand/collapse */}
                <button
                  onClick={() => toggleSection(sub.id)}
                  className="w-full flex items-center justify-between text-left py-3 px-6 group hover:bg-muted/30 transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`subsection-content-${sub.id}`}
                >
                  <div className="flex-1">{sub.title}</div>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 flex-shrink-0 ml-4",
                      isExpanded && "rotate-180"
                    )} 
                  />
                </button>
                
                {/* Sub-section content - collapsible */}
                <div
                  id={`subsection-content-${sub.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isExpanded 
                      ? "max-h-[5000px] opacity-100" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6 pt-2">
                    {sub.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordion;
