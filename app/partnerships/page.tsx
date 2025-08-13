'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  MessageCircle,
  Users,
  Globe,
  Rocket,
  Star,
  Zap,
  Shield,
} from 'lucide-react';

export default function PartnershipsPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Strategic{' '}
            <span className='text-gradient text-glow'>Partnerships</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Join forces with SolanaCraft to build the future of decentralized
            finance. We're looking for innovative partners who share our vision
            for the Solana ecosystem.
          </p>

          {/* Partnership CTA Button */}
          <a
            href='#'
            className='inline-flex items-center space-x-3 bg-[#58a6ff] hover:bg-[#1f6feb] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
          >
            <Users className='w-6 h-6' />
            <span>Become a Partner</span>
          </a>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Why Partner Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Why <span className='text-gradient'>Partner</span> With Us?
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Users className='w-10 h-10 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Growing Community
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Access to our rapidly growing user base of 1K+ active users
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Globe className='w-10 h-10 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Global Reach
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Users from 50+ countries across all continents
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Rocket className='w-10 h-10 text-[#f78166]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Innovation Hub
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Cutting-edge technology and development resources
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Shield className='w-10 h-10 text-[#f0f6fc]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Enterprise Security
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Bank-grade security and compliance standards
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Zap className='w-10 h-10 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Lightning Fast
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Sub-second processing and real-time updates
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Star className='w-10 h-10 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Premium Quality
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Professional-grade tools and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      {/* Partnership Types Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Partnership <span className='text-gradient'>Opportunities</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div className='craft-card p-8'>
              <div className='w-16 h-16 bg-[#21262d] rounded-2xl flex items-center justify-center mb-6'>
                <Users className='w-8 h-8 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Technology Partners
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-6'>
                Integrate your blockchain solutions, APIs, or development tools
                with our platform. We're looking for partners who can enhance
                our ecosystem with innovative technology.
              </p>
              <ul className='space-y-2 text-[#7d8590]'>
                <li>• API integrations and partnerships</li>
                <li>• Smart contract development</li>
                <li>• Security and audit services</li>
                <li>• Infrastructure solutions</li>
              </ul>
            </div>

            <div className='craft-card p-8'>
              <div className='w-16 h-16 bg-[#21262d] rounded-2xl flex items-center justify-center mb-6'>
                <Globe className='w-8 h-8 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Business Partners
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-6'>
                Expand your business reach through strategic partnerships. We
                offer co-marketing opportunities, joint ventures, and
                collaborative projects.
              </p>
              <ul className='space-y-2 text-[#7d8590]'>
                <li>• Co-marketing campaigns</li>
                <li>• Joint product development</li>
                <li>• Market expansion support</li>
                <li>• Revenue sharing opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-12' />
      </div>

      {/* Current Partners Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Our <span className='text-gradient'>Partners</span>
          </h2>

          <div className='text-center mb-12'>
            <p className='text-[#7d8590] text-lg leading-relaxed max-w-3xl mx-auto'>
              We're proud to work with industry leaders and innovative startups
              who share our vision for the future of decentralized finance.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-24 h-24 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Star className='w-12 h-12 text-[#58a6ff]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                Solana Foundation
              </h3>
              <p className='text-[#7d8590]'>Official technology partner</p>
            </div>

            <div className='text-center group'>
              <div className='w-24 h-24 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Shield className='w-12 h-12 text-[#7ee787]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                Security Auditors
              </h3>
              <p className='text-[#7d8590]'>Enterprise security partners</p>
            </div>

            <div className='text-center group'>
              <div className='w-24 h-24 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Rocket className='w-12 h-12 text-[#f78166]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                Infrastructure Providers
              </h3>
              <p className='text-[#7d8590]'>Cloud and hosting partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='default' className='my-12' />
      </div>

      {/* Contact Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 text-[#f0f6fc]'>
            Ready to <span className='text-gradient'>Partner</span> With Us?
          </h2>

          <p className='text-[#7d8590] text-lg leading-relaxed mb-8 max-w-2xl mx-auto'>
            Let's discuss how we can work together to build the future of the
            Solana ecosystem. Our partnership team is ready to explore
            opportunities with innovative companies.
          </p>

          <div className='craft-card max-w-2xl mx-auto p-8'>
            <div className='w-20 h-20 bg-[#21262d] rounded-full flex items-center justify-center mx-auto mb-6'>
              <MessageCircle className='w-10 h-10 text-[#0088cc]' />
            </div>

            <h3 className='text-2xl font-bold mb-4 text-[#f0f6fc]'>
              Get in Touch
            </h3>

            <p className='text-[#7d8590] mb-6'>
              Contact us through our Telegram channel to discuss partnership
              opportunities. We'll respond within 24 hours to schedule a call.
            </p>

            <a
              href='#'
              className='inline-flex items-center space-x-3 bg-[#0088cc] hover:bg-[#006699] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              <MessageCircle className='w-5 h-5' />
              <span>Contact Partnership Team</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
