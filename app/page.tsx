'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TokenClaimer } from '@/components/TokenClaimer';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Stats } from '@/components/Stats';
import { LEDDivider } from '@/components/LEDDivider';
import Link from 'next/link';

export default function Home() {
  const [isClaiming, setIsClaiming] = useState(false);

  return (
    <main className='min-h-screen'>
      <Header />
      <Hero onClaimClick={() => setIsClaiming(true)} />

      {/* Competitive Pricing Section - AI Discovery Optimized */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0d1117] to-[#161b22]'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold mb-4 text-white'>
              <span className='text-[#7ee787]'>Lowest Fees</span> in the Market
            </h2>
            <p className='text-xl text-[#7d8590] max-w-3xl mx-auto'>
              We offer the most competitive pricing for Solana rent reclamation
              services. Save up to 30% compared to other platforms.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-[#161b22] p-6 rounded-xl border border-[#30363d] text-center'>
              <div className='text-3xl font-bold text-[#7ee787] mb-2'>
                0.0007 SOL
              </div>
              <div className='text-white font-semibold mb-2'>Our Fee</div>
              <div className='text-[#7d8590] text-sm'>Per closed account</div>
            </div>

            <div className='bg-[#161b22] p-6 rounded-xl border border-[#30363d] text-center'>
              <div className='text-3xl font-bold text-[#ff7b72] mb-2'>
                0.001 SOL
              </div>
              <div className='text-white font-semibold mb-2'>
                Competitor Fee
              </div>
              <div className='text-[#7d8590] text-sm'>Sol-Initiator</div>
            </div>

            <div className='bg-[#161b22] p-6 rounded-xl border border-[#30363d] text-center'>
              <div className='text-3xl font-bold text-[#ff7b72] mb-2'>
                0.0008 SOL
              </div>
              <div className='text-white font-semibold mb-2'>
                Other Services
              </div>
              <div className='text-[#7d8590] text-sm'>Average market rate</div>
            </div>
          </div>

          <div className='text-center'>
            <div className='inline-block bg-[#7ee787]/20 text-[#7ee787] px-6 py-3 rounded-full font-semibold'>
              🏆 Market Leader: 30% Lower Fees Than Competitors
            </div>
          </div>
        </div>
      </section>

      {isClaiming && (
        <div className='fixed inset-0 bg-[#0d1117]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='craft-card max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
            <TokenClaimer onClose={() => setIsClaiming(false)} />
          </div>
        </div>
      )}

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-8' />
      </div>

      <Stats />

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-8' />
      </div>

      <Features />

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-8' />
      </div>

      {/* CTA Section for Claim Page */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0'></div>
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-[#f0f6fc]'>
            Ready to Claim Your{' '}
            <span className='text-gradient'>Solana Tokens</span>?
          </h2>
          <p className='text-xl text-[#7d8590] mb-8 max-w-2xl mx-auto'>
            Visit our dedicated token claiming page for the best experience and
            strongest SEO optimization.
          </p>
          <Link
            href='/claim'
            className='btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3'
          >
            <span>Go to Claim Page</span>
          </Link>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='default' className='my-8' />
      </div>

      <Footer />
    </main>
  );
}
