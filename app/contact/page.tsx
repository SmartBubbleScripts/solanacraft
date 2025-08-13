'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Shield,
  Clock,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    question: 'How do I connect my wallet to SolanaCraft?',
    answer:
      'To connect your wallet, click the "Connect Wallet" button in the top right corner. We support Phantom, Solflare, Exodus, and other popular Solana wallets. Make sure your wallet is unlocked and you have some SOL for transaction fees.',
  },
  {
    question: 'When will I receive my claimed funds?',
    answer:
      "Claimed funds are typically processed within 30 seconds to 2 minutes after confirmation. The exact time depends on network congestion. You'll receive a confirmation email and the funds will appear in your connected wallet immediately.",
  },
  {
    question: 'What are the fees for using SolanaCraft?',
    answer:
      'We charge minimal fees to cover transaction costs and platform maintenance. Token claiming has a small fee, while token launching and NFT minting have competitive rates. All fees are clearly displayed before you confirm any transaction.',
  },
  {
    question: 'Is my wallet safe when connected to SolanaCraft?',
    answer:
      'Yes, absolutely. We use industry-standard security practices and never store your private keys. Your wallet connection is read-only for transaction signing. We recommend using a dedicated wallet for testing and keeping your main wallet separate.',
  },
  {
    question: 'What happens if a transaction fails?',
    answer:
      "If a transaction fails due to network issues or insufficient funds, you won't be charged any fees. The transaction will be automatically reverted and you can try again. We provide detailed error messages to help troubleshoot any issues.",
  },
  {
    question: 'Can I use SolanaCraft from any country?',
    answer:
      'SolanaCraft is available globally, but some features may be restricted based on your local regulations. We comply with all applicable laws and may require additional verification for users in certain jurisdictions.',
  },
  {
    question: 'How do I report a bug or request a feature?',
    answer:
      'You can report bugs or request features through our Telegram channel. We actively monitor feedback and prioritize improvements based on user needs. For urgent issues, please include detailed steps to reproduce the problem.',
  },
  {
    question: 'What wallets are supported for NFT minting?',
    answer:
      'We support all major Solana wallets including Phantom, Solflare, Exodus, Backpack, and Sollet. For the best experience, we recommend using Phantom or Solflare as they have the most comprehensive feature support.',
  },
  {
    question: 'How secure is the token launching process?',
    answer:
      'Our token launching process uses audited smart contracts and follows industry best practices. We implement multiple security layers including rate limiting, input validation, and transaction monitoring to prevent abuse and ensure security.',
  },
  {
    question: 'Can I get help with technical issues?',
    answer:
      'Yes! Our support team is available through our Telegram channel. We provide technical assistance, troubleshooting guides, and best practices. For complex issues, we may request additional information to provide the best possible support.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Get in <span className='text-gradient text-glow'>Touch</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Have questions or need help? We're here to support you on your
            Solana journey. Join our Telegram channel for instant support and
            community updates.
          </p>

          {/* Telegram CTA Button */}
          <a
            href='#'
            className='inline-flex items-center space-x-3 bg-[#0088cc] hover:bg-[#006699] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
          >
            <MessageCircle className='w-6 h-6' />
            <span>Join Our Telegram Channel</span>
          </a>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Contact Methods Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Contact <span className='text-gradient'>Methods</span>
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <MessageCircle className='w-10 h-10 text-[#0088cc]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Telegram Channel
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-4'>
                Join our community for instant support, updates, and discussions
              </p>
              <a
                href='#'
                className='inline-flex items-center space-x-2 text-[#0088cc] hover:text-[#006699] font-semibold'
              >
                <span>Join Channel</span>
                <ChevronUp className='w-4 h-4 rotate-45' />
              </a>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Users className='w-10 h-10 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Community Support
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-4'>
                Get help from our community of experienced users and developers
              </p>
              <a
                href='#'
                className='inline-flex items-center space-x-2 text-[#58a6ff] hover:text-[#1f6feb] font-semibold'
              >
                <span>Join Community</span>
                <ChevronUp className='w-4 h-4 rotate-45' />
              </a>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Shield className='w-10 h-10 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Security Issues
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-4'>
                Report security vulnerabilities or suspicious activity
                immediately
              </p>
              <a
                href='#'
                className='inline-flex items-center space-x-2 text-[#7ee787] hover:text-[#56d364] font-semibold'
              >
                <span>Report Issue</span>
                <ChevronUp className='w-4 h-4 rotate-45' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      {/* FAQ Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Frequently Asked <span className='text-gradient'>Questions</span>
          </h2>

          <div className='space-y-4'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className='craft-card p-6 cursor-pointer group'
                onClick={() => toggleFaq(index)}
              >
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold text-[#f0f6fc] group-hover:text-[#58a6ff] transition-colors duration-200'>
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className='w-5 h-5 text-[#58a6ff]' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-[#7d8590] group-hover:text-[#58a6ff] transition-colors duration-200' />
                  )}
                </div>

                {openFaq === index && (
                  <div className='mt-4 pt-4 border-t border-[#30363d]'>
                    <p className='text-[#7d8590] leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-12' />
      </div>

      {/* Response Time Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 text-[#f0f6fc]'>
            Quick <span className='text-gradient'>Response</span> Times
          </h2>

          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-[#21262d] rounded-full flex items-center justify-center'>
                <Clock className='w-8 h-8 text-[#58a6ff]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                General Questions
              </h3>
              <p className='text-[#7d8590]'>Within 2-4 hours</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-[#21262d] rounded-full flex items-center justify-center'>
                <Zap className='w-8 h-8 text-[#7ee787]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                Technical Issues
              </h3>
              <p className='text-[#7d8590]'>Within 1-2 hours</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-[#21262d] rounded-full flex items-center justify-center'>
                <Shield className='w-8 h-8 text-[#f78166]' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-[#f0f6fc]'>
                Security Issues
              </h3>
              <p className='text-[#7d8590]'>Immediate response</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
