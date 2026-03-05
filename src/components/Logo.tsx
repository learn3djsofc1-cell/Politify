import React from 'react';

export const Logo = ({ className = "w-8 h-8", color = "#9945FF" }: { className?: string, color?: string }) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M6 4H20L28 12L20 20H14V28H6V4Z" 
        fill={color}
      />
      <path 
        d="M20 4L28 12L20 20" 
        stroke="white" 
        strokeWidth="0" 
        strokeLinejoin="round"
      />
      {/* Add a subtle gradient or detail to make it look more like the reference */}
      <path 
        d="M6 4H20L28 12L20 20H14V28H6V4Z" 
        fill="url(#logo_gradient)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient id="logo_gradient" x1="6" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5"/>
          <stop offset="1" stopColor="black" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
