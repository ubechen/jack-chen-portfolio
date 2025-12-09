import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const visible = window.scrollY > 400;
      if (visible) {
        setShouldRender(true);
        // Small delay to trigger animation after render
        requestAnimationFrame(() => setIsVisible(true));
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handle animation end for slide-down
  const handleAnimationEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg 
                 bg-primary hover:bg-primary/90 text-primary-foreground
                 ${isVisible ? 'animate-slide-up' : 'animate-slide-down'}`}
      onAnimationEnd={handleAnimationEnd}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
