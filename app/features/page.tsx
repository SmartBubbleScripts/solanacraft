'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  Star,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  RefreshCw,
  Image,
  Rocket,
  Coins,
  ArrowRight,
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Platform <span className='text-gradient text-glow'>Features</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Discover all the powerful features and tools available on
            SolanaCraft. Professional-grade solutions for the Solana ecosystem.
          </p>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Features Overview Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Core <span className='text-gradient'>Features</span>
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#58a6ff]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Token Claiming
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Reclaim locked SOL from empty token accounts
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#7ee787]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Token Launch
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Create and launch custom tokens on Solana
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#f78166]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                NFT Minting
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Create and mint unique NFTs on Solana
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#58a6ff]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Security
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Enterprise-grade security and reliability
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#7ee787]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Analytics
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Comprehensive data and insights
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <svg
                  className='w-10 h-10 text-[#f78166]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Community
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Active community and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      <Footer />
    </main>
  );
}
