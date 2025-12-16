import { useState, useEffect, useCallback } from "react";

export interface Section {
  id: string;
  label: string;
}

export const useScrollSpy = (sections: Section[], offset = 120) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    // Use getBoundingClientRect for accurate viewport-relative positions
    const overviewSection = document.getElementById("overview");
    if (overviewSection) {
      const rect = overviewSection.getBoundingClientRect();
      // Show nav when Overview's top reaches or passes the offset threshold
      setShowNav(rect.top <= offset);
    }
    
    // Find active section using getBoundingClientRect
    let currentSection = sections[0]?.id || "";
    
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If section's top has passed the offset threshold, mark it as active
        if (rect.top <= offset) {
          currentSection = section.id;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, [sections, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { activeSection, showNav };
};
