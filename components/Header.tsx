'use client';

import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Menu, X, Zap, Coins, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Token Claiming', href: '/claim' },
    { name: 'Token Launch', href: '/token-launch' },
    { name: 'NFTs', href: '/nfts' },
    { name: 'Features', href: '/features' },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-40 glass-panel border-b border-[#30363d]/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-2'>
          {/* SolanaCraft Logo */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='relative  p-2 rounded-lg'>
              <img
                src='/logochecksvg.svg'
                alt='SolanaCraft Logo'
                className='w-12 h-12 group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-xl font-bold text-gradient'>
                SolanaCraft
              </span>
              <span className='text-xs text-[#5d636b] -mt-1'>
                Claim, Launch and Create
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='nav-link text-sm font-medium'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className='flex items-center space-x-3'>
            {/* Wallet Button */}
            <div className='hidden sm:block'>
              <WalletMultiButton
                className='wallet-btn-custom !bg-gradient-to-r !from-[#58a6ff] !to-[#1f6feb] !hover:from-[#1f6feb] !hover:to-[#58a6ff] !text-sm !py-2.5 !px-5'
                style={{ borderRadius: '1rem' }}
              />
            </div>

            {/* Help Button */}
            <div className='relative hidden lg:block'>
              <button
                className='bg-[#30363d] hover:bg-[#484f58] text-[#7d8590] hover:text-[#f0f6fc] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-sm font-medium'
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                ?
              </button>

              {/* Tooltip */}
              {showTooltip && (
                <div className='absolute right-0 top-12 w-80 bg-[#161b22] border border-[#30363d] rounded-lg p-4 shadow-2xl z-50 animate-fade-in-up'>
                  <div className='text-sm text-[#f0f6fc] leading-relaxed'>
                    <p className='font-medium text-[#58a6ff] mb-2'>💡 TIP:</p>
                    <p>
                      Before using our website for token claiming, token launch,
                      and NFT creation, connect your Solana wallet first.
                    </p>
                  </div>
                  {/* Tooltip arrow */}
                  <div className='absolute -top-2 right-4 w-4 h-4 bg-[#161b22] border-l border-t border-[#30363d] transform rotate-45'></div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className='lg:hidden p-2 text-[#7d8590] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-lg transition-all duration-200'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t border-[#30363d] animate-fade-in-up'>
            <nav className='flex flex-col space-y-3'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='nav-link text-base py-2 px-3 rounded-lg hover:bg-[#21262d] transition-all duration-200'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='pt-2'>
                <WalletMultiButton
                  className='btn-primary w-full !bg-gradient-to-r !from-[#58a6ff] !to-[#1f6feb] !hover:from-[#1f6feb] !hover:to-[#58a6ff] !rounded-2xl'
                  style={{ borderRadius: '1rem' }}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
