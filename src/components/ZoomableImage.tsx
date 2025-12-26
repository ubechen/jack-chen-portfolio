import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ZoomIn, ZoomOut } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if image can be zoomed (natural size > displayed size)
  const checkCanZoom = useCallback(() => {
    if (!imgRef.current) return;
    
    const img = imgRef.current;
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const displayedWidth = img.clientWidth;
    const displayedHeight = img.clientHeight;

    // Only enable zoom if natural size is larger than displayed size
    const zoomable = naturalWidth > displayedWidth || naturalHeight > displayedHeight;
    setCanZoom(zoomable);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      checkCanZoom();
    }
    
    // Recheck on window resize
    window.addEventListener("resize", checkCanZoom);
    return () => window.removeEventListener("resize", checkCanZoom);
  }, [isLoaded, checkCanZoom]);

  // Prevent body scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  // Handle ESC key to close zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isZoomed) {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isZoomed]);

  const handleClick = () => {
    if (canZoom) {
      setIsZoomed(!isZoomed);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <figure ref={containerRef} className="-mx-4 md:mx-0">
        {/* Skeleton with shimmer effect */}
        <div className="relative">
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] transition-opacity duration-500 rounded-lg",
              isLoaded ? "opacity-0" : "opacity-100 animate-shimmer"
            )} 
          />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onClick={handleClick}
            className={cn(
              "w-full md:rounded-lg transition-all duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              canZoom && "cursor-zoom-in hover:opacity-90",
              className
            )}
            aria-label={canZoom ? `${alt} - 點擊放大圖片` : alt}
          />
          
          {/* Zoom indicator on hover */}
          {canZoom && isLoaded && (
            <div 
              className="absolute bottom-3 right-3 md:right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ opacity: 0.7 }}
            >
              <ZoomIn className="h-3 w-3" />
              <span>點擊放大</span>
            </div>
          )}
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
          onClick={handleClick}
          role="dialog"
          aria-modal="true"
          aria-label="放大圖片檢視"
        >
          {/* Close hint */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-md text-sm flex items-center gap-2">
            <ZoomOut className="h-4 w-4" />
            <span>點擊或按 ESC 關閉</span>
          </div>
          
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] object-contain animate-scale-in"
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
