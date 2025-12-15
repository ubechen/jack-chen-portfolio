import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundWithSkeletonProps {
  src: string;
  scrollY: number;
  className?: string;
}

const HeroBackgroundWithSkeleton = ({ src, scrollY, className }: HeroBackgroundWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Skeleton shimmer background */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] transition-opacity duration-700",
          isLoaded ? "opacity-0" : "opacity-100 animate-shimmer"
        )}
      />
      
      {/* Actual background image */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{ 
          backgroundImage: `url(${src})`,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>
      
      {/* Hidden img to detect load completion */}
      <img 
        src={src} 
        alt="" 
        className="hidden" 
        onLoad={() => setIsLoaded(true)} 
      />
    </>
  );
};

export default HeroBackgroundWithSkeleton;
