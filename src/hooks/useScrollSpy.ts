import { useState, useEffect, useCallback } from "react";

export interface Section {
  id: string;
  label: string;
}

export const useScrollSpy = (sections: Section[], offset = 120) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    // Find the current section by checking from bottom to top
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

  return activeSection;
};
