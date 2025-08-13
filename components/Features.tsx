'use client';

import {
  CheckCircle,
  ArrowRight,
  Wallet,
  Coins,
  Shield,
  Zap,
  Rocket,
  Star,
  Globe,
  Lock,
  Users,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Professional Wallet Integration',
    description:
      'Connect any Solana wallet with enterprise-grade security. Support for Phantom, Solflare, Exodus, and more.',
    benefits: [
      'One-click connection',
      'Multi-wallet support',
      'Secure authentication',
      'Auto-sync',
    ],
    color: 'from-[#58a6ff] to-[#1f6feb]',
  },
  {
    icon: Coins,
    title: 'Advanced Token Management',
    description:
      'Claim, launch, and manage tokens with our professional-grade infrastructure and tools.',
    benefits: [
      'Instant claiming',
      'Token launching',
      'Portfolio tracking',
      'Analytics dashboard',
    ],
    color: 'from-[#1f6feb] to-[#58a6ff]',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade security measures with multi-signature wallets, audited contracts, and insurance coverage.',
    benefits: [
      'Multi-signature wallets',
      'Audited contracts',
      'Insurance coverage',
      '24/7 monitoring',
    ],
    color: 'from-[#7ee787] to-[#58a6ff]',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description:
      'Optimized for speed with sub-second transaction processing and real-time updates.',
    benefits: [
      'Sub-second processing',
      'Real-time updates',
      'Optimized infrastructure',
      'Global CDN',
    ],
    color: 'from-[#f0f6fc] to-[#7ee787]',
  },
];

const platformFeatures = [
  {
    icon: Rocket,
    title: 'Token Launching',
    description:
      'Launch your tokens with professional tools and lower fees than competitors',
    color: 'text-[#58a6ff]',
  },
  {
    icon: Star,
    title: 'NFT Minting',
    description:
      'Create, mint, and manage NFTs with our advanced minting tools',
    color: 'text-[#1f6feb]',
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description:
      'Expand beyond Solana with our growing multi-chain infrastructure',
    color: 'text-[#7ee787]',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Connect Wallet',
    description: 'Connect your Solana wallet using any supported provider',
    icon: Wallet,
    color: 'from-[#58a6ff] to-[#1f6feb]',
  },
  {
    step: 2,
    title: 'Choose Service',
    description: 'Select from token claiming, launching, or NFT services',
    icon: Coins,
    color: 'from-[#1f6feb] to-[#58a6ff]',
  },
  {
    step: 3,
    title: 'Review & Confirm',
    description: 'Review transaction details and confirm your action',
    icon: Shield,
    color: 'from-[#7ee787] to-[#58a6ff]',
  },
  {
    step: 4,
    title: 'Get Results',
    description: 'Receive your tokens, launched project, or NFT instantly',
    icon: Zap,
    color: 'from-[#f0f6fc] to-[#7ee787]',
  },
];

export const Features = () => {
  return (
    <section
      id='features'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            Why Choose{' '}
            <span className='text-gradient text-glow'>SolanaCraft</span>?
          </h2>

          <p className='text-xl text-[#7d8590] max-w-3xl mx-auto leading-relaxed'>
            We've built the most professional and feature-rich Solana platform
            with enterprise-grade technology
          </p>
        </div>

        {/* Main Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='craft-card p-8 group animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='flex items-start space-x-6'>
                <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:border-[#58a6ff]'>
                  <feature.icon className='w-8 h-8 text-[#58a6ff]' />
                </div>

                <div className='flex-1'>
                  <h3 className='text-2xl font-semibold mb-3 text-[#f0f6fc]'>
                    {feature.title}
                  </h3>
                  <p className='text-[#7d8590] mb-6 leading-relaxed'>
                    {feature.description}
                  </p>

                  <ul className='space-y-3'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className='flex items-center space-x-3 text-sm'
                      >
                        <CheckCircle className='w-4 h-4 text-[#7ee787] flex-shrink-0' />
                        <span className='text-[#f0f6fc]'>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className='text-center mb-20'>
          <h3 className='text-3xl font-bold mb-6 text-[#f0f6fc]'>
            Complete <span className='text-gradient'>Solana</span> Ecosystem
          </h3>
          <p className='text-lg text-[#7d8590] max-w-2xl mx-auto mb-12'>
            Beyond token claiming - we're building the ultimate Solana platform
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className='craft-card p-6 text-center group animate-slide-in-right'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-[#58a6ff] transition-colors duration-300'>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                <h4 className='text-lg font-semibold mb-3 text-[#f0f6fc]'>
                  {feature.title}
                </h4>
                <p className='text-[#7d8590] text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div id='how-it-works' className='text-center mb-20'>
          <h3 className='text-3xl font-bold mb-6 text-[#f0f6fc]'>
            How <span className='text-gradient'>SolanaCraft</span> Works
          </h3>
          <p className='text-lg text-[#7d8590] max-w-2xl mx-auto mb-12'>
            Getting started is as simple as 1-2-3
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {howItWorks.map((step, index) => (
              <div key={index} className='relative'>
                <div
                  className='craft-card p-8 text-center group animate-scale-in'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='w-20 h-20 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#58a6ff] group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:border-[#58a6ff]'>
                    <step.icon className='w-10 h-10' />
                  </div>

                  <h4 className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                    {step.title}
                  </h4>
                  <p className='text-[#7d8590] leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next step */}
                {index < howItWorks.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                    <ArrowRight className='w-8 h-8 text-[#58a6ff]' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center'>
          <div className='craft-card max-w-3xl mx-auto p-10'>
            <div className='w-20 h-20 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#58a6ff] transition-colors duration-300'>
              <Rocket className='w-10 h-10 text-[#58a6ff]' />
            </div>

            <h3 className='text-3xl font-bold mb-4 text-[#f0f6fc]'>
              Ready to Build Your{' '}
              <span className='text-gradient'>Solana Empire</span>?
            </h3>

            <p className='text-[#7d8590] mb-8 text-lg leading-relaxed max-w-2xl mx-auto'>
              Join thousands of users who trust SolanaCraft for their Solana
              development needs. Professional tools, enterprise security, and
              unmatched performance.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='btn-primary text-lg px-8 py-4 flex items-center space-x-3'>
                <Users className='w-5 h-5' />
                <span>Join Community</span>
              </button>

              <button className='btn-secondary text-lg px-8 py-4 flex items-center space-x-3'>
                <TrendingUp className='w-5 h-5' />
                <span>View Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
