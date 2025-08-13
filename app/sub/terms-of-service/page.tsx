'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Terms of <span className='text-gradient text-glow'>Service</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            These terms govern your use of SolanaCraft. By using our platform,
            you agree to be bound by these terms and conditions.
          </p>

          <div className='flex items-center justify-center space-x-8 text-sm text-[#7d8590]'>
            <div className='flex items-center space-x-2'>
              <FileText className='w-4 h-4' />
              <span>Effective: January 2025</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Shield className='w-4 h-4' />
              <span>Legally binding</span>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Terms Content */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <div className='space-y-12'>
            {/* Acceptance of Terms */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Acceptance of Terms
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  By accessing or using SolanaCraft, you agree to be bound by
                  these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using our services.
                </p>
                <p>
                  These terms apply to all users of the platform, including
                  without limitation users who are browsers, vendors, customers,
                  merchants, and contributors of content.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Description of Service
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  SolanaCraft provides blockchain services on the Solana
                  network, including:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Token claiming and recovery services</li>
                  <li>Token launching and creation tools</li>
                  <li>NFT minting capabilities</li>
                  <li>Blockchain infrastructure and APIs</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any
                  part of our services at any time with or without notice.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Users className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  User Responsibilities
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>As a user of SolanaCraft, you agree to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your wallet credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Not use our services for illegal or fraudulent purposes
                  </li>
                  <li>
                    Not attempt to interfere with our platform's operation
                  </li>
                  <li>Report any security vulnerabilities you discover</li>
                </ul>
                <p>
                  You are solely responsible for all activities that occur under
                  your account and for maintaining the confidentiality of your
                  wallet credentials.
                </p>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <XCircle className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Prohibited Activities
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>You may not use our services to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Engage in money laundering or fraud</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with other users' access to our services</li>
                  <li>
                    Use our services for any illegal or unauthorized purpose
                  </li>
                </ul>
                <p>
                  Violation of these terms may result in immediate termination
                  of your account and legal action.
                </p>
              </div>
            </div>

            {/* Fees and Payments */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Fees and Payments
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Our services may be subject to fees as outlined in our pricing
                  structure. All fees are clearly displayed before you confirm
                  any transaction.
                </p>
                <p>
                  Fees are charged in SOL or other supported cryptocurrencies
                  and are non-refundable unless otherwise specified. We reserve
                  the right to modify our fee structure with reasonable notice.
                </p>
                <p>
                  You are responsible for all transaction fees associated with
                  your use of our services, including network fees charged by
                  the Solana blockchain.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Intellectual Property
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  SolanaCraft and its original content, features, and
                  functionality are owned by SolanaCraft and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <p>
                  You retain ownership of any content you create using our
                  services, including tokens and NFTs. However, you grant us a
                  license to use, store, and display such content as necessary
                  to provide our services.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <AlertTriangle className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Disclaimers and Limitations
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Our services are provided "as is" and "as available" without
                  any warranties of any kind, either express or implied.
                </p>
                <p>
                  We do not guarantee that our services will be uninterrupted,
                  secure, or error-free. We are not responsible for any losses
                  resulting from the use of our services, including but not
                  limited to financial losses.
                </p>
                <p>
                  Cryptocurrency transactions are irreversible and subject to
                  market volatility. You acknowledge and accept these risks when
                  using our services.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Limitation of Liability
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  To the maximum extent permitted by law, SolanaCraft shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>
                <p>
                  Our total liability to you for any claims arising from the use
                  of our services shall not exceed the amount you paid us in the
                  twelve months preceding the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <XCircle className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Termination
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We may terminate or suspend your account and access to our
                  services immediately, without prior notice, for any reason,
                  including breach of these terms.
                </p>
                <p>
                  Upon termination, your right to use our services will cease
                  immediately. We may delete your account and data, though we
                  may retain certain information as required by law or for
                  legitimate business purposes.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <FileText className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Governing Law and Disputes
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  These terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which SolanaCraft
                  operates.
                </p>
                <p>
                  Any disputes arising from these terms or your use of our
                  services shall be resolved through binding arbitration in
                  accordance with the rules of the relevant arbitration
                  association.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Changes to Terms
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes by posting the
                  updated terms on our website.
                </p>
                <p>
                  Your continued use of our services after such changes
                  constitutes acceptance of the updated terms. If you do not
                  agree to the new terms, you should discontinue use of our
                  services.
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
                  Contact Information
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  If you have any questions about these terms of service, please
                  contact us through our Telegram channel.
                </p>
                <p>
                  We are committed to providing clear and transparent terms and
                  will respond to your inquiries promptly.
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
