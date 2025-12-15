import { useState } from "react";
import HeroClassic from "./HeroClassic";
import HeroInteractive from "./HeroInteractive";

const Hero = () => {
  const [version, setVersion] = useState<"interactive" | "classic">("interactive");

  return (
    <>
      {/* Version switcher - for development/preview */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => setVersion("interactive")}
          className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
            version === "interactive"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-background/80 text-foreground border border-border hover:bg-muted"
          }`}
        >
          ✨ 新版 Interactive
        </button>
        <button
          onClick={() => setVersion("classic")}
          className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
            version === "classic"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-background/80 text-foreground border border-border hover:bg-muted"
          }`}
        >
          🏠 原版 Classic
        </button>
      </div>

      {version === "interactive" ? <HeroInteractive /> : <HeroClassic />}
    </>
  );
};

export default Hero;
