'use client';

import { useState, useEffect } from 'react';
import { CookieConsent } from './CookieConsent';

interface CookieWrapperProps {
  children: React.ReactNode;
}

export const CookieWrapper = ({ children }: CookieWrapperProps) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    console.log('CookieWrapper: localStorage cookieConsent:', cookieConsent);
    if (cookieConsent) {
      try {
        const parsed = JSON.parse(cookieConsent);
        console.log('CookieWrapper: parsed consent:', parsed);
        if (parsed.common) {
          setCookiesAccepted(true);
        }
      } catch (error) {
        console.error('CookieWrapper: Error parsing cookie consent:', error);
        // If there's an error parsing, treat as no consent
        localStorage.removeItem('cookieConsent');
      }
    }
    setIsLoading(false);
  }, []);

  const handleCookieAccept = (analytics: boolean) => {
    setCookiesAccepted(true);
  };

  if (isLoading) {
    return null; // Don't show anything while checking localStorage
  }

  return (
    <>
      <div className={cookiesAccepted ? '' : 'blur-md pointer-events-none'}>
        {children}
      </div>
      {!cookiesAccepted && <CookieConsent onAccept={handleCookieAccept} />}
      {cookiesAccepted && (
        <div className='fixed bottom-4 right-4 z-50'>
          <button
            onClick={() => {
              // Clear localStorage to show banner again
              localStorage.removeItem('cookieConsent');
              setCookiesAccepted(false);
            }}
            className='flex items-center space-x-2 bg-[#21262d] hover:bg-[#30363d] text-[#7d8590] hover:text-[#f0f6fc] px-4 py-2 rounded-lg transition-all duration-200 border border-[#30363d]'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <span className='text-sm'>Cookie Settings</span>
          </button>
        </div>
      )}
    </>
  );
};
