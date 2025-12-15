import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

const ImageWithSkeleton = ({ src, alt, className, skeletonClassName }: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton with shimmer effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100 animate-shimmer",
          skeletonClassName
        )} 
      />
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
};

export default ImageWithSkeleton;
