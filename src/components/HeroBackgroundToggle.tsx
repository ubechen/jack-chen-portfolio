import { Eye, EyeOff } from "lucide-react";

interface HeroBackgroundToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

const HeroBackgroundToggle = ({ isOn, onToggle }: HeroBackgroundToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed right-2 bottom-1/3 z-50 w-8 h-8 rounded-full 
        bg-background/60 backdrop-blur border border-border/50 
        flex items-center justify-center 
        hover:bg-background/80 transition-colors
        text-muted-foreground hover:text-foreground
        shadow-sm lg:hidden"
      aria-label={isOn ? "Hide animated background" : "Show animated background"}
      title={isOn ? "隱藏動態背景" : "顯示動態背景"}
    >
      {isOn ? <Eye size={14} /> : <EyeOff size={14} />}
    </button>
  );
};

export default HeroBackgroundToggle;
