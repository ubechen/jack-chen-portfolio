import HeroAnimatedBackgroundMobile from "./HeroAnimatedBackgroundMobile";
import HeroAnimatedBackgroundDesktop from "./HeroAnimatedBackgroundDesktop";

const HeroAnimatedBackgroundResponsive = () => {
  return (
    <>
      {/* 手機版：lg 以下顯示（垂直佈局 400x800） */}
      <div className="lg:hidden w-full h-full">
        <HeroAnimatedBackgroundMobile />
      </div>
      
      {/* 桌機版：lg 以上顯示（橫向佈局 1200x600） */}
      <div className="hidden lg:block w-full h-full">
        <HeroAnimatedBackgroundDesktop />
      </div>
    </>
  );
};

export default HeroAnimatedBackgroundResponsive;
