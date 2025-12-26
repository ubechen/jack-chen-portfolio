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
  const [isClosing, setIsClosing] = useState(false);
  const [canZoom, setCanZoom] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Listen for global close event - only one image can be zoomed at a time
  useEffect(() => {
    const handleCloseAll = () => {
      if (isZoomed) {
        setIsZoomed(false);
        setIsClosing(false);
      }
    };
    window.addEventListener("zoomable-close-all", handleCloseAll);
    return () => window.removeEventListener("zoomable-close-all", handleCloseAll);
  }, [isZoomed]);

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
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  // Auto-close on scroll
  useEffect(() => {
    if (!isZoomed) return;
    const handleScroll = () => {
      handleClose();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isZoomed]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setCanZoom(img.naturalWidth > img.clientWidth || img.naturalHeight > img.clientHeight);
    setIsLoaded(true);
  };

  const handleOpen = () => {
    if (!canZoom) return;
    // Close any other zoomed images first
    window.dispatchEvent(new CustomEvent("zoomable-close-all"));
    // Small delay to ensure other images close before this one opens
    setTimeout(() => setIsZoomed(true), 10);
  };

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsClosing(false);
    }, 200); // Match animation duration
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
            onClick={handleOpen}
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

      {/* Zoomed overlay - z-[100] to be above all other UI elements */}
      {isZoomed && (
        <div 
          className={cn(
            "fixed inset-0 z-[100] bg-black/90 flex items-center justify-center cursor-zoom-out",
            "transition-opacity duration-200 ease-out",
            isClosing ? "opacity-0" : "opacity-100 animate-zoom-fade-in"
          )}
          onClick={handleClose}
        >
          <img
            src={src}
            alt={alt}
            className={cn(
              "max-w-[95vw] max-h-[95vh] object-contain rounded-lg cursor-zoom-out",
              "transition-transform duration-200 ease-out",
              isClosing ? "scale-90 opacity-0" : "animate-zoom-scale-in"
            )}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
