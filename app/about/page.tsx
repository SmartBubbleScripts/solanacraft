'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import { Stats } from '@/components/Stats';
import { Users, Rocket, Shield, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            About <span className='text-gradient text-glow'>SolanaCraft</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Building the future of Solana with professional-grade tools and
            enterprise security. We're on a mission to make Solana development
            accessible to everyone.
          </p>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Mission Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Our <span className='text-gradient'>Mission</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-3xl font-bold mb-6 text-[#f0f6fc]'>
                Democratizing Solana Development
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-6'>
                SolanaCraft was born from a simple vision: to make Solana
                development accessible, secure, and professional for everyone.
                Whether you're a seasoned developer or just starting your
                blockchain journey, we provide the tools you need to succeed.
              </p>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Our platform combines cutting-edge technology with
                enterprise-grade security, ensuring that your projects are not
                only powerful but also safe and reliable.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-32 h-32 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center'>
                <Rocket className='w-16 h-16 text-[#58a6ff]' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      {/* Values Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Our <span className='text-gradient'>Values</span>
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Shield className='w-10 h-10 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Security First
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Enterprise-grade security measures protect your assets and
                projects
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Users className='w-10 h-10 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                User-Centric
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Every feature is designed with our users' needs and experience
                in mind
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Globe className='w-10 h-10 text-[#f78166]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Global Reach
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Serving users from around the world with localized support and
                features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-12' />
      </div>

      {/* Stats Section */}
      <Stats />

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='default' className='my-12' />
      </div>

      {/* Team Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Our <span className='text-gradient'>Team</span>
          </h2>

          <div className='text-center max-w-3xl mx-auto'>
            <p className='text-[#7d8590] text-lg leading-relaxed mb-8'>
              SolanaCraft is built by a team of passionate blockchain
              developers, security experts, and UX designers who believe in the
              power of decentralized technology.
            </p>
            <p className='text-[#7d8590] text-lg leading-relaxed'>
              We're committed to continuous innovation and improvement, always
              staying ahead of the curve in the rapidly evolving Solana
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
