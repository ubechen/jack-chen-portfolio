const HeroAnimatedBackgroundMobile = () => {
  return (
    <svg
      version="1.1"
      id="tech-ecosystem-bg-mobile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <style>{`
        /* --- 全域設定 --- */
        .st-line-m {
          fill: none;
          stroke: hsl(var(--primary));
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }
        .st-text-m {
          fill: hsl(var(--primary));
          font-family: 'Courier New', monospace, sans-serif;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        /* --- 動畫定義 Keyframes --- */
        
        /* 1. 線條流動效果 (Dash Offset Flow) */
        @keyframes flowAnimationM {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .anim-flow-m {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: flowAnimationM 20s linear infinite;
        }
        /* 反向流動 */
        .anim-flow-rev-m {
          stroke-dasharray: 1000;
          stroke-dashoffset: 0;
          animation: flowAnimationM 25s linear infinite reverse;
        }

        /* 2. 浮動效果 (Floating) */
        @keyframes floatAnimationM {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .anim-float-m {
          animation: floatAnimationM 6s ease-in-out infinite;
        }
        .anim-float-slow-m {
          animation: floatAnimationM 9s ease-in-out infinite;
        }

        /* 3. 旋轉效果 (Rotation) - 用於無人機 */
        @keyframes rotateAnimationM {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-spin-m {
          transform-box: fill-box;
          transform-origin: center;
          animation: rotateAnimationM 2s linear infinite;
        }

        /* 4. 脈動效果 (Pulse) - 用於文字標籤 */
        @keyframes pulseOpacityM {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .anim-pulse-m {
          animation: pulseOpacityM 4s ease-in-out infinite;
        }
      `}</style>

      {/* 電路網絡背景線條 - 中央淨空版本 */}
      <g id="network-lines-mobile-clear" className="st-line-m anim-flow-m" opacity="0.5">
        {/* 左右兩側垂直主線（避開中央） */}
        <path d="M50,0 V800" />
        <path d="M350,0 V800" />
        
        {/* 上方水平連接 */}
        <path d="M50,120 L260,120" />
        <path d="M260,0 V120" />
        
        {/* 下方水平連接 */}
        <path d="M50,600 L350,600" />
        <path d="M200,600 V800" />
        
        {/* 節點 */}
        <circle cx="50" cy="120" r="3" />
        <circle cx="260" cy="120" r="3" />
        <circle cx="50" cy="600" r="3" />
        <circle cx="350" cy="600" r="3" />
        <circle cx="200" cy="600" r="3" />
      </g>

      {/* 上層：無人機 + AI AGENT（向上移動） */}
      <g className="anim-float-slow-m" transform="translate(0, -20)">
        <g transform="translate(260, 120)">
          <g className="st-line-m anim-flow-m">
            <path d="M0,0 m-20,-20 l40,40 m-40,0 l40,-40 M0,-5 l0,10 m-5,-5 l10,0" />
            <circle className="anim-spin-m" cx="-20" cy="-20" r="8" />
            <circle className="anim-spin-m" cx="20" cy="-20" r="8" />
            <circle className="anim-spin-m" cx="-20" cy="20" r="8" />
            <circle className="anim-spin-m" cx="20" cy="20" r="8" />
          </g>
        </g>
        <text x="60" y="125" className="st-text-m anim-pulse-m">AI AGENT_</text>
      </g>

      {/* 下層：機器人 + ESG（向下移動） */}
      <g className="anim-float-slow-m" transform="translate(0, 200)">
        {/* AMR 機器人 */}
        <g transform="translate(60, 550)">
          <g className="st-line-m anim-flow-m">
            <circle cx="10" cy="40" r="6" />
            <circle cx="38" cy="40" r="6" />
            <path d="M0,34 h48 v6 h-48 Z" />
            <path d="M8,34 L12,0 L36,0 L40,34" />
            <path d="M24,0 v-8 m-6,-4 a6,6 0 0 1 12,0" />
          </g>
        </g>

        {/* 人形機器人 */}
        <g transform="translate(280, 530)">
          <g className="st-line-m anim-flow-rev-m">
            <circle cx="24" cy="8" r="8" />
            <line x1="20" y1="8" x2="28" y2="8" strokeWidth="1" />
            <rect x="12" y="18" width="24" height="30" rx="4" />
            <path d="M12,24 L0,36 M36,24 L48,36" />
            <path d="M18,48 v16 M30,48 v16" />
          </g>
        </g>

        <text x="200" y="680" className="st-text-m anim-pulse-m" textAnchor="middle">ESG FOUNDATION</text>
        <text x="200" y="710" className="st-text-m anim-pulse-m" textAnchor="middle" fontSize="12">&lt;AI POWERED&gt;</text>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackgroundMobile;