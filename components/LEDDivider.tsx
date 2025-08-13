'use client';

import { useEffect, useState } from 'react';

interface LEDDividerProps {
  variant?: 'default' | 'pulse' | 'flow' | 'sparkle';
  className?: string;
}

export const LEDDivider = ({
  variant = 'default',
  className = '',
}: LEDDividerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseClasses =
    'w-full max-w-6xl mx-auto h-1 relative overflow-hidden transition-all duration-1000 ease-out rounded-full';
  const visibleClasses = isVisible ? 'opacity-100' : 'opacity-0';

  const getVariantClasses = () => {
    switch (variant) {
      case 'pulse':
        return 'bg-gradient-to-r from-transparent via-white to-transparent animate-pulse';
      case 'flow':
        return 'bg-gradient-to-r from-transparent via-white to-transparent animate-flow';
      case 'sparkle':
        return 'bg-gradient-to-r from-transparent via-white to-transparent animate-sparkle';
      default:
        return 'bg-gradient-to-r from-transparent via-white to-transparent';
    }
  };

  return (
    <div className={`${baseClasses} ${visibleClasses} ${className}`}>
      {/* Main LED line with simple pulse effect */}
      <div
        className={`absolute inset-0 ${getVariantClasses()} animate-pulse-simple rounded-full`}
      />

      {/* Dynamic glow effect that pulses with the line */}
      <div className='absolute inset-0 bg-white/60 blur-md animate-pulse-simple rounded-full' />
      <div className='absolute inset-0 bg-white/40 blur-lg animate-pulse-simple rounded-full' />
      <div className='absolute inset-0 bg-white/20 blur-xl animate-pulse-simple rounded-full' />

      {/* Enhanced center-focused pulse effect with smoother fade at ends */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#0d1117] via-white/90 via-white/80 via-white/70 to-[#0d1117] animate-pulse-simple rounded-full' />

      {/* Additional glow layers for text-glow effect with enhanced fade */}
      <div className='absolute inset-0 bg-white/30 blur-2xl animate-pulse-simple rounded-full' />
      <div className='absolute inset-0 bg-white/20 blur-3xl animate-pulse-simple rounded-full' />

      {/* Smoother fade layers for elegant background transition */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#0d1117] via-transparent via-white/5 to-transparent rounded-full' />
      <div className='absolute inset-0 bg-gradient-to-l from-[#0d1117] via-transparent via-white/5 to-transparent rounded-full' />
    </div>
  );
};
