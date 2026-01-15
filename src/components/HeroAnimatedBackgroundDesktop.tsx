const HeroAnimatedBackgroundDesktop = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full pointer-events-none absolute top-0 left-0"
    >
      <defs>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blurOut" />
          <feColorMatrix
            in="blurOut"
            type="matrix"
            values="
              0.9 0 0 0 0.1
              0 0.9 0 0 0.1
              0 0 1 0 0.2
              0 0 0 0.8 0"
            result="glowColor"
          />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        /* --- 全域樣式設定 --- */
        .abstract-bg-content {
            /* 中度飽和的藍色，更明顯可見 */
            color: hsl(210, 50%, 50%);
            /* 提高透明度讓動畫清晰可見 */
            opacity: 0.4;
          /* 套用發光濾鏡 */
          filter: url(#soft-glow);
          transition: opacity 0.8s ease;
        }

        /* 曲線樣式 */
        .st-curve {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }
        
        /* 節點樣式 */
        .st-node {
          fill: currentColor;
          stroke: none;
        }

        /* 文字樣式 (維持科技感但更淡) */
        .st-text-abstract {
          fill: currentColor;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.8;
        }
        
        /* --- 動畫定義 --- */
        /* 緩慢的光流動動畫 */
        @keyframes flowSoft { 
          from { stroke-dashoffset: 2000; } 
          to { stroke-dashoffset: 0; } 
        }
        .anim-flow-soft { 
          stroke-dasharray: 2000; 
          stroke-dashoffset: 2000; 
          animation: flowSoft 40s linear infinite; 
        }
        .anim-flow-soft-rev { 
          stroke-dasharray: 2000; 
          stroke-dashoffset: 0; 
          animation: flowSoft 45s linear infinite reverse; 
        }

        /* 有機的浮動與脈動 */
        @keyframes pulseOrganic { 
          0%, 100% { opacity: 0.4; transform: scale(1); } 
          50% { opacity: 1; transform: scale(1.05); } 
        }
        .anim-pulse-node { 
          transform-box: fill-box; 
          transform-origin: center; 
          animation: pulseOrganic 6s ease-in-out infinite; 
        }

        @keyframes floatAbstract { 
          0%, 100% { transform: translate(0, 0); } 
          50% { transform: translate(10px, -15px); } 
        }
        .anim-float-abs { 
          animation: floatAbstract 10s ease-in-out infinite; 
        }

        /* 旋轉動畫 */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-spin {
          transform-box: fill-box;
          transform-origin: center;
          animation: spinSlow 15s linear infinite;
        }
      `}</style>

      <g className="abstract-bg-content">
        {/* 主要流動曲線 */}
        <g className="anim-flow-soft" opacity="0.8">
          <path className="st-curve" d="M-100,100 C100,250 300,50 500,200 C700,350 900,150 1300,300" />
          <path className="st-curve" d="M-50,500 C150,550 350,300 600,350 C850,400 1050,100 1250,150" />
        </g>
        
        {/* 輔助流動曲線 */}
        <g className="anim-flow-soft-rev" opacity="0.6">
          <path className="st-curve" d="M200,300 C300,450 500,550 700,450" strokeWidth="1" />
          <path className="st-curve" d="M800,200 C900,50 1100,100 1200,50" strokeWidth="1" />
        </g>

        {/* 左側節點簇 - AI Agent */}
        <g className="anim-float-abs" transform="translate(150, 180)">
          <g className="anim-pulse-node">
            <circle className="st-node" cx="0" cy="0" r="5" />
            <circle className="st-node" cx="15" cy="-10" r="3" opacity="0.7" />
            <circle className="st-node" cx="-12" cy="12" r="3" opacity="0.7" />
            <circle className="st-node" cx="20" cy="15" r="2" opacity="0.5" />
          </g>
          <text x="30" y="5" className="st-text-abstract">AI Agent_</text>
        </g>

        {/* 中央節點簇 - AI Innovation Core */}
        <g className="anim-float-abs" transform="translate(600, 300)" style={{ animationDelay: '-3s' }}>
          <g className="anim-pulse-node">
            <circle className="st-node" cx="0" cy="0" r="8" />
            <circle className="st-node" cx="20" cy="0" r="4" />
            <circle className="st-node" cx="-20" cy="0" r="4" />
            <circle className="st-node" cx="0" cy="-20" r="4" />
            <circle className="st-node" cx="0" cy="20" r="4" />
            <ellipse className="st-curve anim-spin" cx="0" cy="0" rx="40" ry="20" strokeWidth="1" opacity="0.4" />
          </g>
          <text x="0" y="60" className="st-text-abstract" textAnchor="middle">AI Innovation Core</text>
          <text x="-50" y="-40" className="st-text-abstract" textAnchor="end" fontSize="10">UXR/Design</text>
        </g>

        {/* 右側節點簇 - Robotics & ESG */}
        <g className="anim-float-abs" transform="translate(1000, 400)" style={{ animationDelay: '-6s' }}>
          <g className="anim-pulse-node">
            <circle className="st-node" cx="0" cy="0" r="6" />
            <circle className="st-node" cx="18" cy="8" r="4" opacity="0.8" />
            <circle className="st-node" cx="-10" cy="15" r="4" opacity="0.8" />
            <line className="st-curve" x1="0" y1="0" x2="18" y2="8" strokeWidth="1" />
            <line className="st-curve" x1="0" y1="0" x2="-10" y2="15" strokeWidth="1" />
          </g>
          <text x="30" y="10" className="st-text-abstract">Robotics & ESG</text>
        </g>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackgroundDesktop;
