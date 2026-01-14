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
        <style>
          {`
            .st-line-d {
              fill: none;
              stroke: hsl(var(--primary));
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              vector-effect: non-scaling-stroke;
            }
            .st-text-d {
              fill: hsl(var(--primary));
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
              animation: flowAnimationDesktop 25s linear infinite;
            }
            .anim-flow-rev-d {
              stroke-dasharray: 1500;
              stroke-dashoffset: 0;
              animation: flowAnimationDesktop 30s linear infinite reverse;
            }

            @keyframes floatAnimationDesktop {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .anim-float-d {
              animation: floatAnimationDesktop 7s ease-in-out infinite;
            }
            .anim-float-slow-d {
              animation: floatAnimationDesktop 10s ease-in-out infinite;
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
              0%, 100% { opacity: 0.5; }
              50% { opacity: 1; }
            }
            .anim-pulse-d {
              animation: pulseOpacityDesktop 4s ease-in-out infinite;
            }
          `}
        </style>
      </defs>

      {/* 橫向電路網絡背景線條 */}
      <g id="network-lines-desktop" className="st-line-d anim-flow-d" opacity="0.5">
        {/* 主要橫向連接線 */}
        <path d="M0,300 H350 L600,250 L850,300 H1200" />
        <path d="M0,350 H300 L600,400 L900,350 H1200" />
        {/* 垂直分支線 */}
        <path d="M150,0 V200 M150,280 V600" />
        <path d="M600,0 V180 M600,420 V600" />
        <path d="M1050,0 V250 M1050,400 V600" />
        {/* 對角連接線 */}
        <path d="M150,200 L350,300 M850,300 L1050,250" />
        <path d="M350,350 L600,400 L850,350" />
        {/* 節點 */}
        <circle cx="150" cy="200" r="4" />
        <circle cx="350" cy="300" r="3" />
        <circle cx="600" cy="250" r="5" />
        <circle cx="600" cy="400" r="4" />
        <circle cx="850" cy="300" r="3" />
        <circle cx="1050" cy="250" r="4" />
        <circle cx="1050" cy="400" r="3" />
      </g>

      {/* 左側區域：無人機 + AI AGENT */}
      <g className="anim-float-d" style={{ transform: 'translateY(0)' }}>
        <g transform="translate(150, 150)">
          <g className="st-line-d anim-flow-d">
            {/* 無人機機身 */}
            <path d="M0,0 m-25,-25 l50,50 m-50,0 l50,-50 M0,-6 l0,12 m-6,-6 l12,0" />
            {/* 螺旋槳 */}
            <circle className="anim-spin-d" cx="-25" cy="-25" r="10" />
            <circle className="anim-spin-d" cx="25" cy="-25" r="10" />
            <circle className="anim-spin-d" cx="-25" cy="25" r="10" />
            <circle className="anim-spin-d" cx="25" cy="25" r="10" />
          </g>
        </g>
        <text x="150" y="240" className="st-text-d anim-pulse-d" textAnchor="middle">AI AGENT_</text>
        <text x="150" y="260" className="st-text-d anim-pulse-d" textAnchor="middle" fontSize="10">AUTONOMOUS</text>
      </g>

      {/* 中間區域：AI 創新筆電 + UX/UI */}
      <g className="anim-float-slow-d" style={{ transform: 'translateY(0)' }}>
        {/* UX/UI 標籤 */}
        <text x="480" y="200" className="st-text-d anim-pulse-d" textAnchor="end">UX <tspan fontSize="10">research</tspan></text>
        <text x="720" y="200" className="st-text-d anim-pulse-d" textAnchor="start">UI/UXR</text>

        {/* AI 創新筆電 */}
        <g transform="translate(560, 280)">
          <g className="st-line-d anim-flow-rev-d">
            {/* 鍵盤底座 */}
            <path d="M5,10 L75,10 L80,50 L0,50 Z" />
            {/* 螢幕 */}
            <path d="M5,10 L5,-40 L75,-40 L75,10" />
            {/* AI 符號 */}
            <path d="M25,-20 h30 m-15,-12 v24 M35,-16 l12,12 m0,-12 l-12,12" opacity="0.7" />
          </g>
        </g>
        <text x="600" y="360" className="st-text-d anim-pulse-d" textAnchor="middle">AI INNOVATION HUB</text>
        <text x="600" y="380" className="st-text-d anim-pulse-d" textAnchor="middle" fontSize="10">&lt;DESIGN SYSTEM&gt;</text>
      </g>

      {/* 右側區域：機器人 + ESG */}
      <g className="anim-float-d" style={{ transform: 'translateY(0)' }}>
        {/* 人形機器人 */}
        <g transform="translate(950, 180)">
          <g className="st-line-d anim-flow-d">
            {/* 頭部 */}
            <circle cx="24" cy="8" r="10" />
            <line x1="20" y1="8" x2="28" y2="8" strokeWidth="1" />
            {/* 身體 */}
            <rect x="10" y="20" width="28" height="40" rx="5" />
            {/* 手臂 */}
            <path d="M10,28 L-5,45 M38,28 L53,45" />
            {/* 腿部 */}
            <path d="M16,60 v20 M32,60 v20" />
          </g>
        </g>

        {/* AMR 機器人 */}
        <g transform="translate(1050, 300)">
          <g className="st-line-d anim-flow-rev-d">
            {/* 輪子 */}
            <circle cx="12" cy="45" r="8" />
            <circle cx="48" cy="45" r="8" />
            {/* 底盤 */}
            <path d="M0,38 h60 v8 h-60 Z" />
            {/* 車身 */}
            <path d="M8,38 L14,0 L46,0 L52,38" />
            {/* 感測器 */}
            <path d="M30,0 v-10 m-8,-5 a8,8 0 0 1 16,0" />
          </g>
        </g>

        <text x="1000" y="420" className="st-text-d anim-pulse-d" textAnchor="middle">ESG FOUNDATION</text>
        <text x="1000" y="445" className="st-text-d anim-pulse-d" textAnchor="middle" fontSize="12">&lt;AI POWERED&gt;</text>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackgroundDesktop;
