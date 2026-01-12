import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isPinchingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    );
  }, []);
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

  // Auto-close on scroll (but not during pinch or drag)
  useEffect(() => {
    if (!isZoomed) return;
    const handleScroll = () => {
      if (isPinchingRef.current || isDraggingRef.current) return;
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
    }, 200);
  };

  // Touch event handlers for pinch-to-zoom and drag detection
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 1) {
      isPinchingRef.current = true;
    } else if (e.touches.length === 1) {
      // Record single-finger touch start position
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      isDraggingRef.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 1) {
      isPinchingRef.current = true;
      return;
    }
    
    if (touchStartRef.current && e.touches.length === 1) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
      
      // Movement over 10px is considered a drag
      if (deltaX > 10 || deltaY > 10) {
        isDraggingRef.current = true;
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    // Delay reset to prevent click event from firing immediately after pinch/drag
    setTimeout(() => {
      isPinchingRef.current = false;
      isDraggingRef.current = false;
    }, 150);
  };

  const handleOverlayClick = () => {
    if (isPinchingRef.current || isDraggingRef.current) return;
    handleClose();
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPinchingRef.current || isDraggingRef.current) return;
    handleClose();
  };

  // Render zoomed overlay via Portal to escape any parent stacking context
  const zoomedOverlay = isZoomed ? createPortal(
    <div 
      className={cn(
        "fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center cursor-zoom-out p-4",
        isClosing ? "animate-zoom-fade-out" : "animate-zoom-fade-in"
      )}
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] object-contain rounded-lg cursor-zoom-out",
          isClosing ? "animate-zoom-scale-out" : "animate-zoom-scale-in"
        )}
        onClick={handleImageClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {isTouchDevice && (
        <p className="text-white/60 text-sm mt-4 text-center pointer-events-none">
          雙指可縮放與拖曳圖片
        </p>
      )}
    </div>,
    document.body
  ) : null;

  return (
    <>
      <figure className={cn("-mx-4 md:mx-0", className)}>
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
              canZoom && "cursor-zoom-in"
            )}
          />
        </div>
        
        {figcaption && (
          <figcaption className="text-sm text-muted-foreground text-center mt-3 px-4">
            {figcaption}
          </figcaption>
        )}
      </figure>

      {zoomedOverlay}
    </>
  );
};

export default ZoomableImage;
