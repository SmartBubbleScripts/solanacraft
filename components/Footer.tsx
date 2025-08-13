'use client';

import {
  Zap,
  MessageCircle,
  Github,
  Mail,
  Shield,
  Users,
  Zap as ZapIcon,
  Star,
  Globe,
  Rocket,
  Lock,
} from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

const footerLinks = {
  platform: [
    { name: 'Token Claiming', href: '/claim' },
    { name: 'Token Launch', href: '/token-launch' },
    { name: 'NFT Minting', href: '/nfts' },
  ],
  company: [
    { name: 'About SolanaCraft', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Partnerships', href: '/partnerships' },
  ],
  support: [
    { name: 'Help Center', href: '/contact' },
    { name: 'Bug Report', href: '/contact' },
    { name: 'Feature Request', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/sub/privacy-policy' },
    { name: 'Terms of Service', href: '/sub/terms-of-service' },
    { name: 'Cookie Policy', href: '/sub/cookie-policy' },
    { name: 'Security', href: '/sub/security' },
  ],
};

const socialLinks = [
  {
    name: 'TikTok',
    href: '#',
    icon: TikTokIcon,
    color: 'hover:text-[#ff0050]',
  },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-[#f0f6fc]' },
  {
    name: 'Telegram',
    href: '#',
    icon: MessageCircle,
    color: 'hover:text-[#0088cc]',
  },
];

const platformStats = [
  {
    icon: Users,
    value: '1K+',
    label: 'Users',
    color: 'text-[#58a6ff]',
  },
  { icon: Globe, value: '50+', label: 'Countries', color: 'text-[#1f6feb]' },
  { icon: ZapIcon, value: '99.9%', label: 'Uptime', color: 'text-[#7ee787]' },
  { icon: Shield, value: '100%', label: 'Secure', color: 'text-[#f0f6fc]' },
];

export const Footer = () => {
  return (
    <footer className='bg-[#0d1117] border-t border-[#30363d] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='relative'>
                <div className='w-18 h-18 bg-[#21262d] border border-[#30363d] rounded-xl flex items-center justify-center'>
                  <img
                    src='/logochecksvg.svg'
                    alt='SolanaCraft Logo'
                    className='w-14 h-14'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-gradient'>
                  SolanaCraft
                </span>
                <span className='text-sm text-[#7d8590] -mt-1'>
                  Professional Solana Platform
                </span>
              </div>
            </div>

            <p className='text-[#7d8590] mb-6 max-w-md leading-relaxed'>
              The most professional platform for token claiming, launching, and
              NFT minting on Solana. Built with cutting-edge technology and
              enterprise-grade security.
            </p>

            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className='text-sm font-semibold text-[#f0f6fc] uppercase tracking-wider mb-4 flex items-center space-x-2'>
              <Rocket className='w-4 h-4 text-[#58a6ff]' />
              <span>Platform</span>
            </h3>
            <ul className='space-y-3'>
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-[#7d8590] hover:text-[#f0f6fc] transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='text-sm font-semibold text-[#f0f6fc] uppercase tracking-wider mb-4 flex items-center space-x-2'>
              <Star className='w-4 h-4 text-[#1f6feb]' />
              <span>Company</span>
            </h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-[#7d8590] hover:text-[#f0f6fc] transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className='text-sm font-semibold text-[#f0f6fc] uppercase tracking-wider mb-4 flex items-center space-x-2'>
              <Shield className='w-4 h-4 text-[#7ee787]' />
              <span>Support</span>
            </h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-[#7d8590] hover:text-[#f0f6fc] transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='text-sm font-semibold text-[#f0f6fc] uppercase tracking-wider mb-4 flex items-center space-x-2'>
              <Lock className='w-4 h-4 text-[#f0f6fc]' />
              <span>Legal</span>
            </h3>
            <ul className='space-y-3'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-[#7d8590] hover:text-[#f0f6fc] transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Platform Stats */}
        <div className='border-t border-[#30363d] pt-8 mb-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {platformStats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='flex items-center justify-center space-x-2 mb-2'>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className='text-2xl font-bold text-gradient'>
                    {stat.value}
                  </span>
                </div>
                <p className='text-sm text-[#7d8590]'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-[#30363d] pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-6 text-sm text-[#7d8590]'>
              <span>© 2025 SolanaCraft. All rights reserved.</span>
              <div className='flex items-center space-x-2'>
                <Shield className='w-4 h-4 text-[#7ee787]' />
                <span>Secured by Solana</span>
              </div>
            </div>

            <div className='flex items-center space-x-6 text-sm text-[#7d8590]'>
              <div className='flex items-center space-x-2'>
                <Users className='w-4 h-4 text-[#58a6ff]' />
                <span>1K+ Users</span>
              </div>
              <div className='flex items-center space-x-2'>
                <ZapIcon className='w-4 h-4 text-[#1f6feb]' />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
