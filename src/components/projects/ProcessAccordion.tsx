import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessAccordionProps {
  title: React.ReactNode;
  introContent: React.ReactNode;
  detailContent: React.ReactNode;
  sectionId?: string;
  className?: string;
}

const ProcessAccordion = ({ 
  title, 
  introContent, 
  detailContent,
  sectionId = "what-we-did",
  className
}: ProcessAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id={sectionId} className={cn("py-16 md:py-24 px-4 md:px-6", className)}>
      <div className="container mx-auto max-w-4xl">
        {/* Title - always visible */}
        {title}
        
        {/* Intro paragraph - always visible */}
        <div className="mb-8">
          {introContent}
        </div>

        {/* Expand/Collapse button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "flex items-center gap-2 text-primary font-medium mb-8",
            "hover:underline underline-offset-4 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-md px-2 py-1 -ml-2"
          )}
          aria-expanded={isExpanded}
          aria-controls="process-detail-content"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-5 w-5" />
              收合內容
            </>
          ) : (
            <>
              <ChevronDown className="h-5 w-5" />
              展開更多內容
            </>
          )}
        </button>

        {/* Detail content - collapsible */}
        <div
          id="process-detail-content"
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out",
            isExpanded 
              ? "max-h-[20000px] opacity-100" 
              : "max-h-0 opacity-0"
          )}
        >
          {detailContent}
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordion;
