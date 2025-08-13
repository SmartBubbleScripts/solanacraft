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
