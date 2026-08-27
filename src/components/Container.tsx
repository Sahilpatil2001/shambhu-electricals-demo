import React from 'react';

export const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 ${className}`}>
    {children}
  </div>
);


