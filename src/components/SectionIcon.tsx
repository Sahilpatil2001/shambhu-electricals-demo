import React from 'react';

export function SectionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="url(#brand-grad)">
        {/* Hard Hat top */}
        <path d="M16 22 C16 10, 32 10, 32 22 Z" />
        {/* Hard Hat brim */}
        <path d="M10 22 h28 v3 c0 0.8 -0.7 1.5 -1.5 1.5 h-25 c-0.8 0 -1.5 -0.7 -1.5 -1.5 v-3 z" />
        
        {/* Lightning Bolt on Hat */}
        <path d="M26 13 L21 18 L24 18 L22 23 L28 16 L25 16 Z" fill="white" />
        
        {/* Face */}
        <path d="M17 28 C17 35, 31 35, 31 28 Z" />
        
        {/* Body */}
        <path d="M10 42 C10 35, 38 35, 38 42 L38 58 L10 58 Z" />
        
        {/* V-neck / Collar cutout */}
        <path d="M18 42 L24 47 L30 42 Z" fill="white" />
        <path d="M24 46 L21 50 L27 50 Z" fill="url(#brand-grad)" />
        <path d="M24 50 L21 54 L27 54 Z" fill="white" />
        
        {/* Suspenders cutout */}
        <rect x="14" y="42" width="2" height="16" fill="white" />
        <rect x="32" y="42" width="2" height="16" fill="white" />

        {/* Plug Prongs */}
        <rect x="46" y="24" width="3" height="8" rx="1" />
        <rect x="53" y="24" width="3" height="8" rx="1" />
        
        {/* Plug Body */}
        <path d="M43 32 h16 v6 c0 4.4 -3.6 8 -8 8 c-4.4 0 -8 -3.6 -8 -8 v-6 z" />
      </g>
      
      {/* Wire */}
      <path d="M51 46 v6 c0 3.3 -2.7 6 -6 6 h-6 v-6" stroke="url(#brand-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
