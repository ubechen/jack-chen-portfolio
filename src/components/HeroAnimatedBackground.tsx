const HeroAnimatedBackground = () => {
  return (
    <svg
      version="1.1"
      id="tech-ecosystem-bg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <style>{`
        /* --- 全域設定 --- */
        .st-line {
          fill: none;
          stroke: hsl(var(--primary));
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }
        .st-text {
          fill: hsl(var(--primary));
          font-family: 'Courier New', monospace, sans-serif;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        /* --- 動畫定義 Keyframes --- */
        
        /* 1. 線條流動效果 (Dash Offset Flow) */
        @keyframes flowAnimation {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .anim-flow {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: flowAnimation 20s linear infinite;
        }
        /* 反向流動 */
        .anim-flow-rev {
          stroke-dasharray: 1000;
          stroke-dashoffset: 0;
          animation: flowAnimation 25s linear infinite reverse;
        }

        /* 2. 浮動效果 (Floating) */
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .anim-float {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        .anim-float-slow {
          animation: floatAnimation 9s ease-in-out infinite;
        }

        /* 3. 旋轉效果 (Rotation) - 用於無人機 */
        @keyframes rotateAnimation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-spin {
          transform-box: fill-box;
          transform-origin: center;
          animation: rotateAnimation 2s linear infinite;
        }

        /* 4. 脈動效果 (Pulse) - 用於文字標籤 */
        @keyframes pulseOpacity {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .anim-pulse {
          animation: pulseOpacity 4s ease-in-out infinite;
        }
      `}</style>

      {/* 電路網絡背景線條 */}
      <g id="network-lines" className="st-line anim-flow" opacity="0.5">
        <path d="M100,0 v150 M300,0 v200 M200,100 v600 M80,600 v200 M320,500 v300" />
        <path d="M100,150 L200,200 L300,150" />
        <path d="M50,350 L350,350" />
        <path d="M200,500 L80,600 L200,700 L320,600" />
        <circle cx="100" cy="150" r="3" />
        <circle cx="300" cy="150" r="3" />
        <circle cx="200" cy="200" r="3" />
        <circle cx="200" cy="350" r="3" />
        <circle cx="200" cy="500" r="3" />
        <circle cx="80" cy="600" r="3" />
        <circle cx="320" cy="600" r="3" />
      </g>

      {/* 上層：無人機 + AI AGENT */}
      <g className="anim-float-slow" transform="translate(0, 50)">
        <g transform="translate(260, 80)">
          <g className="st-line anim-flow">
            <path d="M0,0 m-20,-20 l40,40 m-40,0 l40,-40 M0,-5 l0,10 m-5,-5 l10,0" />
            <circle className="anim-spin" cx="-20" cy="-20" r="8" />
            <circle className="anim-spin" cx="20" cy="-20" r="8" />
            <circle className="anim-spin" cx="-20" cy="20" r="8" />
            <circle className="anim-spin" cx="20" cy="20" r="8" />
          </g>
        </g>
        <text x="80" y="120" className="st-text anim-pulse">AI AGENT_</text>
      </g>

      {/* 中層：筆電 + UX 文字 */}
      <g className="anim-float" transform="translate(0, 100)">
        <text x="50" y="280" className="st-text anim-pulse" textAnchor="end">
          UX <tspan fontSize="10">research</tspan>
        </text>
        <text x="350" y="320" className="st-text anim-pulse" textAnchor="start">UI/UXR</text>

        {/* AI 筆電圖示 */}
        <g transform="translate(176, 326)">
          <g className="st-line anim-flow-rev">
            <path d="M4,8 L44,8 L48,36 L0,36 Z" />
            <path d="M4,8 L4,-28 L44,-28 L44,8" />
            <path d="M16,-16 h16 m-8,-8 v16 M20,-12 l8,8 m0,-8 l-8,8" opacity="0.7" />
          </g>
        </g>
        <text x="200" y="380" className="st-text anim-pulse" textAnchor="middle" fontSize="12">AI INNOVATION PC</text>
      </g>

      {/* 下層：機器人 + ESG */}
      <g className="anim-float-slow" transform="translate(0, 150)">
        {/* AMR 機器人 */}
        <g transform="translate(60, 550)">
          <g className="st-line anim-flow">
            <circle cx="10" cy="40" r="6" />
            <circle cx="38" cy="40" r="6" />
            <path d="M0,34 h48 v6 h-48 Z" />
            <path d="M8,34 L12,0 L36,0 L40,34" />
            <path d="M24,0 v-8 m-6,-4 a6,6 0 0 1 12,0" />
          </g>
        </g>

        {/* 人形機器人 */}
        <g transform="translate(280, 530)">
          <g className="st-line anim-flow-rev">
            <circle cx="24" cy="8" r="8" />
            <line x1="20" y1="8" x2="28" y2="8" strokeWidth="1" />
            <rect x="12" y="18" width="24" height="30" rx="4" />
            <path d="M12,24 L0,36 M36,24 L48,36" />
            <path d="M18,48 v16 M30,48 v16" />
          </g>
        </g>

        <text x="200" y="680" className="st-text anim-pulse" textAnchor="middle">ESG FOUNDATION</text>
        <text x="200" y="710" className="st-text anim-pulse" textAnchor="middle" fontSize="12">&lt;AI POWERED&gt;</text>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackground;
