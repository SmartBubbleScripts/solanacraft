'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import { Shield, Eye, Lock, Users, Globe, Calendar } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Privacy <span className='text-gradient text-glow'>Policy</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information when you use
            SolanaCraft.
          </p>

          <div className='flex items-center justify-center space-x-8 text-sm text-[#7d8590]'>
            <div className='flex items-center space-x-2'>
              <Calendar className='w-4 h-4' />
              <span>Last updated: January 2025</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Globe className='w-4 h-4' />
              <span>Global coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Policy Content */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <div className='space-y-12'>
            {/* Information We Collect */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Eye className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Information We Collect
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support. This may include:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Wallet addresses and transaction data</li>
                  <li>Account information and preferences</li>
                  <li>Communication records and support requests</li>
                  <li>Usage data and analytics</li>
                </ul>
                <p>
                  We also automatically collect certain information about your
                  device and how you interact with our platform, including IP
                  addresses, browser type, and usage patterns.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Users className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  How We Use Your Information
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>We use the information we collect to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and manage your account</li>
                  <li>Send you important updates and notifications</li>
                  <li>Respond to your questions and support requests</li>
                  <li>Detect and prevent fraud and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Globe className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Information Sharing and Disclosure
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>With your consent or at your direction</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With service providers who assist in our operations</li>
                  <li>In connection with business transfers or mergers</li>
                </ul>
                <p>
                  We require all third-party service providers to maintain
                  appropriate security measures and use your information only
                  for specified purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Data Security
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  These measures include encryption, secure servers, access
                  controls, and regular security assessments. However, no method
                  of transmission over the internet is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
                <p>
                  You are responsible for maintaining the security of your
                  wallet credentials and should never share them with anyone.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Lock className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Your Rights and Choices
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Depending on your location, you may have the following rights:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p>
                  To exercise these rights, please contact us through our
                  Telegram channel. We will respond to your request within 30
                  days.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Calendar className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Data Retention
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes outlined in
                  this policy.
                </p>
                <p>
                  Transaction data may be retained for legal and regulatory
                  compliance purposes. Account information is retained while
                  your account is active and for a reasonable period after
                  deactivation.
                </p>
                <p>
                  You may request deletion of your account and associated data
                  at any time, subject to legal retention requirements.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Globe className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  International Data Transfers
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws.
                </p>
                <p>
                  For transfers to countries without adequate data protection,
                  we implement appropriate safeguards such as standard
                  contractual clauses or binding corporate rules.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Eye className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Changes to This Policy
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We may update this privacy policy from time to time to reflect
                  changes in our practices or applicable laws.
                </p>
                <p>
                  We will notify you of any material changes by posting the
                  updated policy on our website and updating the "Last updated"
                  date. Your continued use of our services after such changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Users className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Contact Us
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  If you have any questions about this privacy policy or our
                  data practices, please contact us through our Telegram
                  channel.
                </p>
                <p>
                  We are committed to protecting your privacy and will respond
                  to your inquiries promptly and thoroughly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
