'use client';

import {
  Users,
  Coins,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Award,
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1K+',
    label: 'Users',
    description: 'Trusted by thousands worldwide',
    color: 'from-[#58a6ff] to-[#1f6feb]',
    bgColor: 'bg-[#58a6ff]/10',
  },
  {
    icon: Coins,
    value: '$100K+',
    label: 'Processed',
    description: 'Processed across all networks',
    color: 'from-[#1f6feb] to-[#58a6ff]',
    bgColor: 'bg-[#1f6feb]/10',
  },
  {
    icon: Zap,
    value: '<30s',
    label: 'Avg. Speed',
    description: 'Lightning fast processing',
    color: 'from-[#7ee787] to-[#58a6ff]',
    bgColor: 'bg-[#7ee787]/10',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Security',
    description: 'Zero security incidents',
    color: 'from-[#f0f6fc] to-[#7ee787]',
    bgColor: 'bg-[#f0f6fc]/10',
  },
];

const achievements = [
  {
    icon: TrendingUp,
    title: 'Growing Fast',
    description: '100% month-over-month growth',
    color: 'text-[#58a6ff]',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Users from 50+ countries',
    color: 'text-[#1f6feb]',
  },
  {
    icon: Clock,
    title: '24/7 Uptime',
    description: '99.9% reliability guarantee',
    color: 'text-[#7ee787]',
  },
  {
    icon: Award,
    title: 'Top Rated',
    description: '5-star user satisfaction',
    color: 'text-[#f0f6fc]',
  },
];

export const Stats = () => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            Trusted by{' '}
            <span className='text-gradient text-glow'>Thousands</span> of Users
          </h2>

          <p className='text-xl text-[#7d8590] max-w-3xl mx-auto leading-relaxed'>
            Our platform has processed thousands in transactions with
            enterprise-grade security and reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='craft-card p-8 text-center group animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-20 h-20 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:border-[#58a6ff]'>
                <stat.icon className='w-10 h-10 text-[#58a6ff]' />
              </div>

              <div className='text-4xl font-bold text-gradient mb-3'>
                {stat.value}
              </div>
              <div className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                {stat.label}
              </div>
              <p className='text-[#7d8590] leading-relaxed'>
                {stat.description}
              </p>

              {/* Hover Effect */}
              <div className='absolute inset-0 bg-[#21262d]/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className='text-center mb-16'>
          <h3 className='text-3xl font-bold mb-4 text-[#f0f6fc]'>
            Why <span className='text-gradient'>SolanaCraft</span> Leads the
            Industry
          </h3>
          <p className='text-lg text-[#7d8590] max-w-2xl mx-auto'>
            Built with cutting-edge technology and user experience in mind
          </p>
        </div>

        {/* Achievements Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className='craft-card p-6 text-center group animate-slide-in-right'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-[#58a6ff] transition-colors duration-300'>
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>

              <h4 className='text-lg font-semibold mb-2 text-[#f0f6fc]'>
                {achievement.title}
              </h4>
              <p className='text-[#7d8590] text-sm leading-relaxed'>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='craft-card max-w-2xl mx-auto p-8'>
            <h3 className='text-2xl font-bold mb-4 text-[#f0f6fc]'>
              Ready to Join the{' '}
              <span className='text-gradient'>SolanaCraft</span> Community?
            </h3>
            <p className='text-[#7d8590] mb-6'>
              Start building your Solana empire with the most professional
              platform available
            </p>
            <button className='btn-primary text-lg px-8 py-4'>
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
