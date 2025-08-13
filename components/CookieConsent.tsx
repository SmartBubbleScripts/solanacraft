'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings, CheckCircle } from 'lucide-react';

interface CookieConsentProps {
  onAccept: (analytics: boolean) => void;
}

export const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(false);

  console.log('CookieConsent: Component rendered');

  const handleAcceptAll = () => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        common: true,
        analytics: true,
        timestamp: Date.now(),
      })
    );
    setAnalyticsAccepted(true);
    onAccept(true);
  };

  const handleAcceptCommon = () => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        common: true,
        analytics: false,
        timestamp: Date.now(),
      })
    );
    setAnalyticsAccepted(false);
    onAccept(false);
  };

  const handleAcceptWithSettings = () => {
    const finalAnalytics = analyticsAccepted;
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        common: true,
        analytics: finalAnalytics,
        timestamp: Date.now(),
      })
    );
    onAccept(finalAnalytics);
    setShowSettings(false);
  };

  const handleUpdateSettings = () => {
    const currentConsent = localStorage.getItem('cookieConsent');
    if (currentConsent) {
      const parsed = JSON.parse(currentConsent);
      setAnalyticsAccepted(parsed.analytics || false);
    }
    setShowSettings(true);
  };

  if (showSettings) {
    return (
      <div className='fixed inset-0 bg-[#0d1117]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
        <div className='craft-card max-w-md w-full p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-xl font-bold text-[#f0f6fc] flex items-center space-x-2'>
              <Settings className='w-5 h-5' />
              <span>Cookie Preferences</span>
            </h3>
            <button
              onClick={() => setShowSettings(false)}
              className='text-[#7d8590] hover:text-[#f0f6fc] transition-colors'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          <div className='space-y-4 mb-6'>
            <div className='flex items-center justify-between p-3 bg-[#21262d] rounded-lg'>
              <div>
                <h4 className='font-semibold text-[#f0f6fc]'>
                  Essential Cookies
                </h4>
                <p className='text-sm text-[#7d8590]'>
                  Required for basic functionality
                </p>
              </div>
              <div className='flex items-center text-[#7ee787]'>
                <CheckCircle className='w-5 h-5' />
              </div>
            </div>

            <div className='flex items-center justify-between p-3 bg-[#21262d] rounded-lg'>
              <div>
                <h4 className='font-semibold text-[#f0f6fc]'>
                  Analytics Cookies
                </h4>
                <p className='text-sm text-[#7d8590]'>
                  Help us improve our service
                </p>
              </div>
              <label className='relative inline-flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  checked={analyticsAccepted}
                  onChange={(e) => setAnalyticsAccepted(e.target.checked)}
                  className='sr-only peer'
                />
                <div className="w-11 h-6 bg-[#30363d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58a6ff]"></div>
              </label>
            </div>
          </div>

          <div className='flex space-x-3'>
            <button
              onClick={handleAcceptWithSettings}
              className='flex-1 bg-[#58a6ff] hover:bg-[#1f6feb] text-white px-4 py-2 rounded-lg font-semibold transition-colors'
            >
              Save Preferences
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className='flex-1 bg-[#21262d] hover:bg-[#30363d] text-[#7d8590] px-4 py-2 rounded-lg font-semibold transition-colors'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#0d1117] border-t-4 border-[#58a6ff] z-[9999] p-4 shadow-2xl'>
      <div className='craft-card max-w-4xl mx-auto p-6 bg-[#161b22] border border-[#30363d]'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-10 h-10 bg-[#58a6ff] rounded-full flex items-center justify-center'>
            <Cookie className='w-5 h-5 text-white' />
          </div>
          <h3 className='text-xl font-bold text-[#f0f6fc]'>Cookie Consent</h3>
        </div>

        <p className='text-[#7d8590] mb-6 leading-relaxed'>
          We use cookies to enhance your experience on SolanaCraft. Essential
          cookies are required for basic functionality, while analytics cookies
          help us improve our service. You can customize your preferences below.
        </p>

        <div className='space-y-3 mb-6'>
          <div className='flex items-center space-x-3 text-sm'>
            <CheckCircle className='w-4 h-4 text-[#7ee787]' />
            <span className='text-[#7d8590]'>
              Essential cookies are always enabled
            </span>
          </div>
          <div className='flex items-center space-x-3 text-sm'>
            <div className='w-4 h-4 border-2 border-[#30363d] rounded'></div>
            <span className='text-[#7d8590]'>
              Analytics cookies are optional
            </span>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
          <button
            onClick={handleAcceptAll}
            className='flex-1 bg-[#58a6ff] hover:bg-[#1f6feb] text-white px-4 py-2 rounded-lg font-semibold transition-colors'
          >
            Accept All Cookies
          </button>
          <button
            onClick={handleAcceptCommon}
            className='flex-1 bg-[#21262d] hover:bg-[#30363d] text-[#7d8590] px-4 py-2 rounded-lg font-semibold transition-colors'
          >
            Essential Only
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className='flex-1 bg-[#30363d] hover:bg-[#484f58] text-[#7d8590] px-4 py-2 rounded-lg font-semibold transition-colors'
          >
            Customize
          </button>
        </div>

        <p className='text-xs text-[#7d8590] mt-4 text-center'>
          By continuing, you agree to our{' '}
          <a
            href='/sub/cookie-policy'
            className='text-[#58a6ff] hover:underline'
          >
            Cookie Policy
          </a>
        </p>
      </div>
    </div>
  );
};
