import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
}

const ZoomableImage = ({ src, alt, className, figcaption }: ZoomableImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [canZoom, setCanZoom] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Recheck canZoom on window resize
  useEffect(() => {
    const checkCanZoom = () => {
      if (!imgRef.current || !isLoaded) return;
      const img = imgRef.current;
      setCanZoom(img.naturalWidth > img.clientWidth || img.naturalHeight > img.clientHeight);
    };

    window.addEventListener("resize", checkCanZoom);
    return () => window.removeEventListener("resize", checkCanZoom);
  }, [isLoaded]);

  // Prevent body scroll when zoomed
  useEffect(() => {
    document.body.style.overflow = isZoomed ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  // Handle ESC key to close zoom
  useEffect(() => {
    if (!isZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setCanZoom(img.naturalWidth > img.clientWidth || img.naturalHeight > img.clientHeight);
    setIsLoaded(true);
  };

  return (
    <>
      <figure className="-mx-4 md:mx-0">
        <div className="relative">
          {/* Skeleton with shimmer effect */}
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] transition-opacity duration-500 rounded-lg",
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100 animate-shimmer"
            )} 
          />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onClick={() => canZoom && setIsZoomed(true)}
            className={cn(
              "w-full md:rounded-lg transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              canZoom && "cursor-zoom-in",
              className
            )}
          />
        </div>
        
        {figcaption && (
          <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
            {figcaption}
          </figcaption>
        )}
      </figure>

      {/* Zoomed overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] object-contain animate-scale-in cursor-zoom-out"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          />
          
          {figcaption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md text-sm max-w-[90vw] text-center">
              {figcaption}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
