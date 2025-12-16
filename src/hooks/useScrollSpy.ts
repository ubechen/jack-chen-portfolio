import { useState, useEffect, useCallback } from "react";

export interface Section {
  id: string;
  label: string;
}

export const useScrollSpy = (sections: Section[], offset = 120) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    // Determine if nav should be visible (when Overview section reaches top)
    const overviewSection = document.getElementById("overview");
    if (overviewSection) {
      const overviewTop = overviewSection.offsetTop;
      setShowNav(scrollPosition >= overviewTop);
    }
    
    // Find the current section by checking each section's bounds
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sections[i].id);
          return;
        }
      }
    }
    
    // Fallback: find the closest section above current scroll position
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i].id);
        return;
      }
    }
    
    // Default to first section if none found
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, [sections, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { activeSection, showNav };
};
