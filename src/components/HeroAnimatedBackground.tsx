const HeroAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 400 800" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for flowing lines */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ===== Circuit Lines with Flow Animation ===== */}
        
        {/* Top horizontal flowing line */}
        <path 
          d="M-50,80 Q100,120 200,80 T450,100"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 16"
          opacity="0.6"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="0" 
            to="-48" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </path>

        {/* Middle curved line */}
        <path 
          d="M-20,380 Q80,350 160,400 Q240,450 320,400 Q400,350 450,380"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 12"
          opacity="0.4"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="0" 
            to="-36" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </path>

        {/* Bottom flowing line */}
        <path 
          d="M-30,680 Q100,720 200,680 T430,700"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="10 20"
          opacity="0.5"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="0" 
            to="-60" 
            dur="2.5s" 
            repeatCount="indefinite" 
          />
        </path>

        {/* Vertical line left */}
        <path 
          d="M60,0 Q40,200 70,400 Q100,600 50,800"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 15"
          opacity="0.3"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="0" 
            to="-40" 
            dur="5s" 
            repeatCount="indefinite" 
          />
        </path>

        {/* Vertical line right */}
        <path 
          d="M340,0 Q360,250 330,500 Q300,750 350,800"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 15"
          opacity="0.3"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="0" 
            to="40" 
            dur="4.5s" 
            repeatCount="indefinite" 
          />
        </path>

        {/* ===== Laptop Icon (AI PC) ===== */}
        <g opacity="0.12">
          <g>
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="35,140; 35,150; 35,140"
              dur="4s" 
              repeatCount="indefinite"
            />
            {/* Laptop screen */}
            <rect x="0" y="0" width="44" height="28" rx="3" 
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            {/* Screen shine */}
            <rect x="4" y="4" width="36" height="20" rx="1" 
                  fill="hsl(var(--primary))" opacity="0.3"/>
            {/* AI text on screen */}
            <text x="22" y="18" fontSize="10" fontWeight="bold" 
                  fill="hsl(var(--primary))" textAnchor="middle">AI</text>
            {/* Laptop base */}
            <path d="M-4,30 L48,30 L44,36 L0,36 Z" 
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
          </g>
        </g>

        {/* ===== Drone Icon ===== */}
        <g opacity="0.10">
          <g>
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="310,200; 315,190; 310,200"
              dur="3.5s" 
              repeatCount="indefinite"
            />
            {/* Drone body */}
            <ellipse cx="24" cy="20" rx="12" ry="6" 
                     fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            {/* Drone arms */}
            <line x1="12" y1="16" x2="0" y2="8" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            <line x1="36" y1="16" x2="48" y2="8" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            <line x1="12" y1="24" x2="0" y2="32" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            <line x1="36" y1="24" x2="48" y2="32" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            {/* Propellers */}
            <circle cx="0" cy="8" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6"/>
            <circle cx="48" cy="8" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6"/>
            <circle cx="0" cy="32" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6"/>
            <circle cx="48" cy="32" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6"/>
          </g>
        </g>

        {/* ===== AMR Robot Icon ===== */}
        <g opacity="0.12">
          <g>
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="25,560; 25,570; 25,560"
              dur="5s" 
              repeatCount="indefinite"
            />
            {/* Robot body */}
            <rect x="0" y="0" width="50" height="35" rx="6" 
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            {/* Screen/face */}
            <rect x="8" y="6" width="34" height="16" rx="2" 
                  fill="hsl(var(--primary))" opacity="0.2"/>
            {/* Eyes */}
            <circle cx="18" cy="14" r="3" fill="hsl(var(--primary))" opacity="0.6"/>
            <circle cx="32" cy="14" r="3" fill="hsl(var(--primary))" opacity="0.6"/>
            {/* Wheels */}
            <circle cx="10" cy="40" r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <circle cx="40" cy="40" r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
          </g>
        </g>

        {/* ===== Humanoid Robot Icon ===== */}
        <g opacity="0.10">
          <g>
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="320,500; 320,510; 320,500"
              dur="4.5s" 
              repeatCount="indefinite"
            />
            {/* Head */}
            <circle cx="24" cy="10" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            {/* Eyes */}
            <circle cx="20" cy="8" r="2" fill="hsl(var(--primary))" opacity="0.5"/>
            <circle cx="28" cy="8" r="2" fill="hsl(var(--primary))" opacity="0.5"/>
            {/* Body */}
            <rect x="12" y="22" width="24" height="30" rx="4" 
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            {/* Arms */}
            <line x1="10" y1="26" x2="0" y2="40" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            <line x1="38" y1="26" x2="48" y2="40" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            {/* Legs */}
            <line x1="18" y1="52" x2="14" y2="70" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
            <line x1="30" y1="52" x2="34" y2="70" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
          </g>
        </g>

        {/* ===== Text Elements ===== */}
        
        {/* AI text */}
        <text x="330" y="350" fontSize="28" fontWeight="bold" 
              fill="hsl(var(--primary))" opacity="0.08"
              fontFamily="system-ui, sans-serif">
          AI
          <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite"/>
        </text>

        {/* ESG text */}
        <text x="30" y="480" fontSize="22" fontWeight="bold" 
              fill="hsl(var(--primary))" opacity="0.07"
              fontFamily="system-ui, sans-serif">
          ESG
          <animate attributeName="opacity" values="0.05;0.10;0.05" dur="4s" repeatCount="indefinite"/>
        </text>

        {/* UX text */}
        <text x="300" y="650" fontSize="20" fontWeight="bold" 
              fill="hsl(var(--primary))" opacity="0.08"
              fontFamily="system-ui, sans-serif">
          UX
          <animate attributeName="opacity" values="0.06;0.11;0.06" dur="3.5s" repeatCount="indefinite"/>
        </text>

        {/* B2B text */}
        <text x="50" y="280" fontSize="16" fontWeight="600" 
              fill="hsl(var(--primary))" opacity="0.06"
              fontFamily="system-ui, sans-serif">
          B2B
          <animate attributeName="opacity" values="0.04;0.09;0.04" dur="4.5s" repeatCount="indefinite"/>
        </text>

        {/* ===== Decorative Dots ===== */}
        <circle cx="100" cy="160" r="3" fill="hsl(var(--primary))" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="350" cy="450" r="2" fill="hsl(var(--primary))" opacity="0.12">
          <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80" cy="620" r="2.5" fill="hsl(var(--primary))" opacity="0.14">
          <animate attributeName="opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="280" cy="120" r="2" fill="hsl(var(--primary))" opacity="0.10">
          <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2.8s" repeatCount="indefinite"/>
        </circle>

        {/* ===== Small circuit nodes ===== */}
        <circle cx="200" cy="80" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2"/>
        <circle cx="160" cy="400" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.15"/>
        <circle cx="200" cy="680" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2"/>

      </svg>
    </div>
  );
};

export default HeroAnimatedBackground;
