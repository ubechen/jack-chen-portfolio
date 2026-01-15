const HeroAnimatedBackgroundMobile = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <filter id="soft-glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurOut" />
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
        /* --- 樣式沿用桌機版設定 --- */
        .abstract-bg-content-mobile {
            color: hsl(210, 50%, 50%); /* 中度飽和藍色 */
            opacity: 0.4; /* 提高透明度 */
          filter: url(#soft-glow-mobile);
          transition: opacity 0.8s ease;
        }
        
        .st-curve { 
          fill: none; 
          stroke: currentColor; 
          stroke-width: 1.5; 
          stroke-linecap: round; 
          vector-effect: non-scaling-stroke; 
        }
        
        .st-node { 
          fill: currentColor; 
          stroke: none; 
        }
        
        .st-text-abstract {
          fill: currentColor;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 10px; /* 手機版字體稍小 */
          font-weight: 500; 
          letter-spacing: 2px; 
          text-transform: uppercase; 
          opacity: 0.8;
        }
        
        /* --- 動畫定義 (針對垂直方向調整) --- */
        @keyframes flowVert { 
          from { stroke-dashoffset: 1500; } 
          to { stroke-dashoffset: 0; } 
        }
        .anim-flow-vert { 
          stroke-dasharray: 1500; 
          stroke-dashoffset: 1500; 
          animation: flowVert 30s linear infinite; 
        }
        .anim-flow-vert-rev { 
          stroke-dasharray: 1500; 
          stroke-dashoffset: 0; 
          animation: flowVert 35s linear infinite reverse; 
        }

        @keyframes pulseOrganic { 
          0%, 100% { opacity: 0.4; transform: scale(1); } 
          50% { opacity: 1; transform: scale(1.05); } 
        }
        .anim-pulse-node { 
          transform-box: fill-box; 
          transform-origin: center; 
          animation: pulseOrganic 6s ease-in-out infinite; 
        }

        @keyframes floatVert { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-15px); } 
        }
        .anim-float-vert { 
          animation: floatVert 8s ease-in-out infinite; 
        }
      `}</style>

      <g className="abstract-bg-content-mobile">
        {/* 左側垂直流動曲線 */}
        <g className="anim-flow-vert" opacity="0.8">
          <path className="st-curve" d="M 60,-50 C 120,150 -20,300 40,500 C 80,650 20,850 60,900" />
        </g>
        
        {/* 右側垂直流動曲線 */}
        <g className="anim-flow-vert-rev" opacity="0.8">
          <path className="st-curve" d="M 340,900 C 280,700 420,550 360,350 C 320,150 380,-50 340,-100" />
        </g>

        {/* 上下水平連接線（極淡） */}
        <g opacity="0.4">
          <path className="st-curve" d="M 60,100 C 150,120 250,80 340,100" strokeWidth="1" />
          <path className="st-curve" d="M 40,700 C 150,750 250,680 360,720" strokeWidth="1" />
        </g>

        {/* 上方節點簇 - AI Agent */}
        <g className="anim-float-vert" transform="translate(100, 160)">
          <g className="anim-pulse-node">
            <circle className="st-node" cx="0" cy="0" r="6" />
            <circle className="st-node" cx="15" cy="-8" r="3" opacity="0.7" />
            <circle className="st-node" cx="-12" cy="10" r="3" opacity="0.6" />
          </g>
          <text x="25" y="5" className="st-text-abstract">AI Agent_</text>
        </g>

        {/* 下方節點簇 - Future Tech & ESG */}
        <g className="anim-float-vert" transform="translate(300, 660)" style={{ animationDelay: '-4s' }}>
          <g className="anim-pulse-node">
            <circle className="st-node" cx="0" cy="0" r="7" />
            <circle className="st-node" cx="-18" cy="5" r="4" opacity="0.8" />
            <circle className="st-node" cx="10" cy="15" r="3" opacity="0.6" />
            <path className="st-curve" d="M0,0 Q-10,2 -18,5" strokeWidth="1" />
          </g>
          <text x="-25" y="30" className="st-text-abstract" textAnchor="end">Future Tech & ESG</text>
        </g>
      </g>
    </svg>
  );
};

export default HeroAnimatedBackgroundMobile;
