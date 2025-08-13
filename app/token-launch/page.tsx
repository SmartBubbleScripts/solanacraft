'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  Rocket,
  Star,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Coins,
  Users,
  Globe,
} from 'lucide-react';

export default function TokenLaunchPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Launch Your{' '}
            <span className='text-gradient text-glow'>Solana Token</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Create and launch your own token on Solana with our professional
            platform. Coming soon with advanced features and tools.
          </p>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Coming Soon Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Coming <span className='text-gradient'>Soon</span>
          </h2>

          <div className='grid md:grid-cols-3 gap-12'>
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
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Token Creation
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Easy-to-use interface for creating custom tokens
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
                Launch Tools
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Professional tools for successful token launches
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
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Analytics
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Comprehensive analytics and performance tracking
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
