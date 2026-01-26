import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // SVG 圓形參數
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      // 計算滾動進度
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // 控制按鈕顯示/隱藏
      const visible = scrollTop > 400;
      if (visible) {
        setShouldRender(true);
        requestAnimationFrame(() => setIsVisible(true));
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnimationEnd = () => {
    if (!isVisible) setShouldRender(false);
  };

  if (!shouldRender) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 計算進度條偏移量
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 group
                  ${isVisible ? 'animate-slide-up' : 'animate-slide-down'}`}
      onAnimationEnd={handleAnimationEnd}
      aria-label="Scroll to top"
    >
      {/* 外層容器 */}
      <div className="relative" style={{ width: size, height: size }}>
        
        {/* SVG 圓形進度條 */}
        <svg
          className="absolute inset-0 -rotate-90"
          width={size}
          height={size}
        >
          {/* 背景軌道 - 淺灰色 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
          />
          {/* 進度條 - 主色藍色 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* 中央按鈕 */}
        <div className="absolute inset-1 rounded-full bg-primary 
                        group-hover:bg-primary/90 transition-colors
                        flex items-center justify-center shadow-lg">
          <ArrowUp className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTopButton;
