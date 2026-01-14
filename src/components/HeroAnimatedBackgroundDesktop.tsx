const HeroAnimatedBackgroundDesktop = () => {
  return (
    <svg
      version="1.1"
      id="tech-ecosystem-bg-desktop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full pointer-events-none absolute top-0 left-0"
    >
      <defs>
        {/* 高斯模糊濾鏡 */}
        <filter id="subtle-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
        <style>
          {`
            /* 背景內容群組 - 統一套用淡雅風格 */
            .bg-content-d {
              color: hsl(220, 20%, 80%);
              opacity: 0.15;
              filter: url(#subtle-blur);
              transition: opacity 0.5s ease;
            }
            
            .st-line-d {
              fill: none;
              stroke: currentColor;
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              vector-effect: non-scaling-stroke;
            }
            .st-text-d {
              fill: currentColor;
              font-family: 'Courier New', monospace, sans-serif;
              font-size: 14px;
              font-weight: bold;
              letter-spacing: 1px;
            }
            
            @keyframes flowAnimationDesktop {
              from { stroke-dashoffset: 1500; }
              to { stroke-dashoffset: 0; }
            }
            .anim-flow-d {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
              animation: flowAnimationDesktop 30s linear infinite;
            }
            .anim-flow-rev-d {
              stroke-dasharray: 1500;
              stroke-dashoffset: 0;
              animation: flowAnimationDesktop 35s linear infinite reverse;
            }

            @keyframes floatAnimationDesktop {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .anim-float-d {
              animation: floatAnimationDesktop 7s ease-in-out infinite;
            }

            @keyframes rotateAnimationDesktop {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .anim-spin-d {
              transform-box: fill-box;
              transform-origin: center;
              animation: rotateAnimationDesktop 2s linear infinite;
            }

            @keyframes pulseOpacityDesktop {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
            .anim-pulse-d {
              animation: pulseOpacityDesktop 5s ease-in-out infinite;
            }
          `}
        </style>
      </defs>

      {/* 包裹所有內容的淡雅風格群組 */}
      <g className="bg-content-d">
        {/* 斜向電路網絡背景線條 */}
        <g id="network-lines-desktop" className="st-line-d anim-flow-d">
          <path d="M100,150 L400,150 L600,300 L900,300 L1100,450" />
          <path d="M200,450 L400,300 L600,300 L800,150 L1000,150" />
          <path d="M600,100 V500" />
          {/* 節點 */}
          <circle cx="400" cy="150" r="3" />
          <circle cx="600" cy="300" r="4" />
          <circle cx="900" cy="300" r="3" />
        </g>

        {/* 左側區域：無人機 + AI AGENT */}
        <g className="anim-float-d" style={{ transform: 'translateY(0)' }}>
          <g transform="translate(150, 200)">
            <g transform="translate(0, -40)">
              <g className="st-line-d anim-flow-d">
                {/* 無人機機身 */}
                <path d="M0,0 m-20,-20 l40,40 m-40,0 l40,-40 M0,-5 l0,10 m-5,-5 l10,0" />
                {/* 螺旋槳 */}
                <circle className="anim-spin-d" cx="-20" cy="-20" r="8" />
                <circle className="anim-spin-d" cx="20" cy="-20" r="8" />
                <circle className="anim-spin-d" cx="-20" cy="20" r="8" />
                <circle className="anim-spin-d" cx="20" cy="20" r="8" />
              </g>
            </g>
            <text x="-40" y="40" className="st-text-d anim-pulse-d">AI AGENT_</text>
          </g>
        </g>

        {/* 中間區域：AI 創新筆電 + UX/UI */}
        <g className="anim-float-d" style={{ transform: 'translateY(0)' }}>
          <g transform="translate(600, 300)">
            <g transform="translate(-24, -20)">
              <g className="st-line-d anim-flow-rev-d">
                {/* 鍵盤底座 */}
                <path d="M4,8 L44,8 L48,36 L0,36 Z" />
                {/* 螢幕 */}
                <path d="M4,8 L4,-28 L44,-28 L44,8" />
                {/* AI 符號 */}
                <path d="M16,-16 h16 m-8,-8 v16 M20,-12 l8,8 m0,-8 l-8,8" opacity="0.7" />
              </g>
            </g>
            <text x="0" y="50" className="st-text-d anim-pulse-d" textAnchor="middle" fontSize="16">AI INNOVATION HUB</text>
            <text x="-120" y="0" className="st-text-d anim-pulse-d" textAnchor="end">UX/UI Design</text>
            <text x="120" y="0" className="st-text-d anim-pulse-d" textAnchor="start">UXR</text>
          </g>
        </g>

        {/* 右側區域：機器人 + ESG */}
        <g className="anim-float-d" style={{ transform: 'translateY(0)' }}>
          <g transform="translate(950, 350)">
            {/* AMR 機器人 */}
            <g transform="translate(-100, 20)">
              <g className="st-line-d anim-flow-d">
                {/* 輪子 */}
                <circle cx="10" cy="40" r="6" />
                <circle cx="38" cy="40" r="6" />
                {/* 底盤 */}
                <path d="M0,34 h48 v6 h-48 Z" />
                {/* 車身 */}
                <path d="M8,34 L12,0 L36,0 L40,34" />
                {/* 感測器 */}
                <path d="M24,0 v-8 m-6,-4 a6,6 0 0 1 12,0" />
              </g>
            </g>

            {/* 人形機器人 */}
            <g transform="translate(50, 0)">
              <g className="st-line-d anim-flow-rev-d">
                {/* 頭部 */}
                <circle cx="24" cy="8" r="8" />
                <line x1="20" y1="8" x2="28" y2="8" strokeWidth="1" />
                {/* 身體 */}
                <rect x="12" y="18" width="24" height="30" rx="4" />
                {/* 手臂 */}
                <path d="M12,24 L0,36 M36,24 L48,36" />
                {/* 腿部 */}
                <path d="M18,48 v16 M30,48 v16" />
              </g>
            </g>

            <text x="0" y="120" className="st-text-d anim-pulse-d" textAnchor="middle">ESG FOUNDATION</text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackgroundDesktop;
