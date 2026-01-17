import hoopoe from "@/assets/hoopoe-bird-transparent.png";

const CircularLogo = ({ size = 200 }: { size?: number }) => {
  const radius = size / 2;
  const outerTextRadius = radius - 12;
  const bottomTextRadius = radius - 14;
  const innerTextRadius = radius - 26;
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* SVG for circular text */}
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
      >
        {/* Define paths for circular text */}
        <defs>
          {/* Top arc for "RISHI VALLEY" */}
          <path
            id="topArc"
            d={`M ${radius - outerTextRadius}, ${radius} A ${outerTextRadius},${outerTextRadius} 0 0,1 ${radius + outerTextRadius},${radius}`}
            fill="none"
          />
          {/* Bottom arc for "RURAL EDUCATION CENTRE" (readable from bottom) */}
          <path
            id="bottomArc"
            d={`M ${radius - bottomTextRadius}, ${radius} A ${bottomTextRadius},${bottomTextRadius} 0 0,0 ${radius + bottomTextRadius},${radius}`}
            fill="none"
          />
          {/* Inner bottom arc for "KRISHNAMURTI FOUNDATION INDIA" (readable from bottom) */}
          <path
            id="innerBottomArc"
            d={`M ${radius - innerTextRadius}, ${radius} A ${innerTextRadius},${innerTextRadius} 0 0,0 ${radius + innerTextRadius},${radius}`}
            fill="none"
          />
        </defs>
        
        {/* Top text - RISHI VALLEY */}
        <text 
          fill="rgba(255,255,255,0.95)" 
          fontSize={size * 0.09}
          fontFamily="'Cormorant Garamond', serif"
          letterSpacing="0.2em"
          fontWeight="500"
        >
          <textPath 
            href="#topArc" 
            startOffset="50%" 
            textAnchor="middle"
          >
            RISHI VALLEY
          </textPath>
        </text>
        
        {/* Bottom text - RURAL EDUCATION CENTRE */}
        <text 
          fill="rgba(255,255,255,0.9)" 
          fontSize={size * 0.048}
          fontFamily="'Cormorant Garamond', serif"
          letterSpacing="0.18em"
          fontWeight="400"
        >
          <textPath 
            href="#bottomArc" 
            startOffset="50%" 
            textAnchor="middle"
          >
            RURAL EDUCATION CENTRE
          </textPath>
        </text>
        
        {/* Inner bottom text - KRISHNAMURTI FOUNDATION INDIA */}
        <text 
          fill="rgba(255,255,255,0.75)" 
          fontSize={size * 0.032}
          fontFamily="'Cormorant Garamond', serif"
          letterSpacing="0.12em"
          fontWeight="400"
        >
          <textPath 
            href="#innerBottomArc" 
            startOffset="50%" 
            textAnchor="middle"
          >
            KRISHNAMURTI FOUNDATION INDIA
          </textPath>
        </text>
        
        {/* Circle border */}
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius - 5} 
          fill="none" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
      </svg>
      
      {/* Bird image in center */}
      <img 
        src={hoopoe} 
        alt="Hoopoe Bird - Rishi Valley Logo" 
        className="relative z-10 object-contain mix-blend-multiply"
        style={{ 
          width: size * 0.55, 
          height: size * 0.55,
        }}
      />
    </div>
  );
};

export default CircularLogo;
