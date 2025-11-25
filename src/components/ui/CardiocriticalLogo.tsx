import React from 'react';

interface CardiocriticalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CardiocriticalLogo: React.FC<CardiocriticalLogoProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-18 h-18',
    lg: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer red circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="#dc2626" 
          stroke="none"
        />
        
        {/* Inner cream/white circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="32" 
          fill="#fef7ed" 
          stroke="none"
        />
        
        {/* Anatomical heart in center */}
        <g transform="translate(50,50)">
          <path
            d="M0,2 C-8,-6 -16,0 -10,8 C-8,10 -4,14 0,18 C4,14 8,10 10,8 C16,0 8,-6 0,2 Z"
            fill="#1e40af"
            stroke="none"
          />
          {/* Heart details */}
          <path
            d="M-2,4 C-6,2 -8,6 -4,8 M2,4 C6,2 8,6 4,8"
            stroke="#1e40af"
            strokeWidth="0.5"
            fill="none"
          />
        </g>
        
        {/* Top text: CARDIOCRITICAL */}
        <path
          id="topCurve"
          d="M 15,50 A 35,35 0 0,1 85,50"
          fill="none"
          stroke="none"
        />
        <text className={`${textSizes[size]} font-bold fill-white`} textAnchor="middle">
          <textPath href="#topCurve" startOffset="50%">
            CARDIOCRITICAL
          </textPath>
        </text>
        
        {/* Bottom text: ACADEMY */}
        <path
          id="bottomCurve"
          d="M 85,50 A 35,35 0 0,1 15,50"
          fill="none"
          stroke="none"
        />
        <text className={`${textSizes[size]} font-bold fill-white`} textAnchor="middle">
          <textPath href="#bottomCurve" startOffset="50%">
            ACADEMY
          </textPath>
        </text>
        
        {/* Small decorative dots */}
        <circle cx="12" cy="50" r="1.5" fill="#1e40af" />
        <circle cx="88" cy="50" r="1.5" fill="#1e40af" />
      </svg>
    </div>
  );
};

export default CardiocriticalLogo;
