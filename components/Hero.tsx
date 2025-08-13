'use client';

import {
  ArrowRight,
  Shield,
  Zap,
  Coins,
  Rocket,
  Star,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  onClaimClick: () => void;
}

export const Hero = ({ onClaimClick }: HeroProps) => {
  return (
    <section
      id='home'
      className='pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Main Content */}
          <div className='space-y-8 animate-fade-in-up'>
            {/* Main Heading */}
            <div className='space-y-6'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight'>
                <span className='text-[#f0f6fc]'>Build Your</span>
                <br />
                <span className='text-gradient text-glow'>Solana Empire</span>
                <br />
                <span className='text-[#f0f6fc]'>With</span>
                <span className='text-gradient text-glow'> SolanaCraft</span>
              </h1>

              <p className='text-xl sm:text-2xl text-[#7d8590] leading-relaxed max-w-2xl'>
                The most professional platform for token claiming, launching,
                and NFTs on Solana. Built with enterprise-grade technology and
                user experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={onClaimClick}
                className='btn-primary text-lg px-8 py-4 flex items-center space-x-3 group'
              >
                <Rocket className='w-5 h-5' />
                <span>Claim Now</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
              </button>

              <Link
                href='/features'
                className='btn-secondary text-lg px-8 py-4 flex items-center space-x-3'
              >
                <Wallet className='w-5 h-5' />
                <span>Explore Features</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className='flex items-center space-x-6 pt-4'>
              <div className='flex items-center space-x-2 text-[#7d8590]'>
                <Shield className='w-5 h-5 text-[#7ee787]' />
                <span className='text-sm'>Enterprise Security</span>
              </div>
              <div className='flex items-center space-x-2 text-[#7d8590]'>
                <Zap className='w-5 h-5 text-[#58a6ff]' />
                <span className='text-sm'>Lightning Fast</span>
              </div>
              <div className='flex items-center space-x-2 text-[#7d8590]'>
                <Coins className='w-5 h-5 text-[#f0f6fc]' />
                <span className='text-sm'>Lowest Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='relative animate-slide-in-right'>
            {/* Main Card */}
            <div className='craft-card p-8 relative'>
              <div className='text-center space-y-6'>
                <div className='w-36 h-36 bg-[#21262d] border border-[#30363d] rounded-2xl flex items-center justify-center mx-auto'>
                  <img
                    src='/logochecksvg.svg'
                    alt='SolanaCraft Logo'
                    className='w-24 h-24'
                  />
                </div>

                <div>
                  <h3 className='text-2xl font-bold text-[#f0f6fc] mb-2'>
                    SolanaCraft
                  </h3>
                  <p className='text-[#7d8590]'>Professional Solana Platform</p>
                </div>

                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div className='space-y-2'>
                    <div className='text-2xl font-bold text-[#58a6ff]'>1K+</div>
                    <div className='text-xs text-[#7d8590]'>Users</div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-2xl font-bold text-[#1f6feb]'>
                      $100K+
                    </div>
                    <div className='text-xs text-[#7d8590]'>Processed</div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-2xl font-bold text-[#7ee787]'>
                      99.9%
                    </div>
                    <div className='text-xs text-[#7d8590]'>Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Background Elements */}
            <div className='absolute -top-8 -left-8 w-16 h-16 bg-[#58a6ff]/10 rounded-full blur-xl'></div>
            <div className='absolute -bottom-8 -right-8 w-20 h-20 bg-[#1f6feb]/10 rounded-full blur-xl'></div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='craft-card p-6 text-center group'>
            <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#58a6ff]'>
              <Zap className='w-8 h-8 text-[#58a6ff]' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
              Lightning Fast
            </h3>
            <p className='text-[#7d8590]'>
              Process transactions in seconds with our optimized infrastructure
            </p>
          </div>

          <div className='craft-card p-6 text-center group'>
            <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#7ee787]'>
              <Shield className='w-8 h-8 text-[#7ee787]' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
              Enterprise Security
            </h3>
            <p className='text-[#7d8590]'>
              Bank-grade security with multi-layer protection and audits
            </p>
          </div>

          <div className='craft-card p-6 text-center group'>
            <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#f0f6fc]'>
              <Coins className='w-8 h-8 text-[#f0f6fc]' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
              Lowest Fees
            </h3>
            <p className='text-[#7d8590]'>
              Competitive pricing that saves you money on every transaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
