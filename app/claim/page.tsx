'use client';

import { TokenClaimer } from '@/components/TokenClaimer';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';

export default function ClaimPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Reclaim Your{' '}
            <span className='text-gradient text-glow'>Solana Tokens</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Scan and close empty token accounts to recover locked SOL rent. Our
            platform makes it easy and secure.
          </p>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Token Claimer Section */}
      <section className='pt-8 pb-24 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <TokenClaimer onClose={() => {}} />
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      {/* Benefits Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22]/30 to-[#0d1117]'></div>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Why Choose <span className='text-gradient'>SolanaCraft</span>?
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
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Fast & Efficient
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Quick scanning and processing of your token accounts
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
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Secure & Reliable
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Built with security best practices and real Solana integration
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
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Transparent Fees
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Clear commission structure with automatic processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-12' />
      </div>

      {/* How It Works Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22]/30 to-[#0d1117]'></div>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            How It <span className='text-gradient'>Works</span>
          </h2>

          <div className='grid md:grid-cols-4 gap-12'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <div className='w-10 h-10 bg-[#58a6ff] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  1
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#f0f6fc]'>
                Connect Wallet
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Connect your Solana wallet to get started
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <div className='w-10 h-10 bg-[#58a6ff] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  2
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#f0f6fc]'>
                Scan Accounts
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                We scan for empty token accounts in your wallet
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <div className='w-10 h-10 bg-[#58a6ff] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  3
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#f0f6fc]'>
                Review & Confirm
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Review the accounts and confirm the closure
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <div className='w-10 h-10 bg-[#58a6ff] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  4
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#f0f6fc]'>
                Recover SOL
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Receive your recovered SOL minus the commission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='default' className='my-12' />
      </div>

      <Footer />
    </main>
  );
}
