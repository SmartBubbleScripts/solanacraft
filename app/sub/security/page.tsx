'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  Shield,
  Lock,
  Eye,
  Users,
  AlertTriangle,
  CheckCircle,
  Zap,
  Server,
} from 'lucide-react';

export default function SecurityPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Security <span className='text-gradient text-glow'>Standards</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            Your security is our top priority. Learn about the comprehensive
            security measures we implement to protect your assets and data on
            SolanaCraft.
          </p>

          <div className='flex items-center justify-center space-x-8 text-sm text-[#7d8590]'>
            <div className='flex items-center space-x-2'>
              <Shield className='w-4 h-4' />
              <span>Enterprise-grade security</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Lock className='w-4 h-4' />
              <span>Bank-level protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Security Overview */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Security <span className='text-gradient'>Overview</span>
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Shield className='w-10 h-10 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Multi-Layer Security
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Multiple security layers protect your assets at every level
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Lock className='w-10 h-10 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Encryption Standards
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Military-grade encryption protects all data and communications
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 mx-auto mb-6 bg-[#21262d] rounded-2xl flex items-center justify-center group-hover:bg-[#30363d] transition-all duration-300 shadow-lg'>
                <Eye className='w-10 h-10 text-[#f78166]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                24/7 Monitoring
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed'>
                Continuous monitoring and threat detection systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='flow' className='my-12' />
      </div>

      {/* Security Measures */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Security <span className='text-gradient'>Measures</span>
          </h2>

          <div className='space-y-12'>
            {/* Infrastructure Security */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Server className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Infrastructure Security
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Our infrastructure is built with security as the foundation:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    Cloud-based infrastructure with enterprise-grade security
                  </li>
                  <li>DDoS protection and traffic filtering</li>
                  <li>Geographic redundancy and failover systems</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure data centers with physical access controls</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Lock className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Data Protection
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>We implement comprehensive data protection measures:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>End-to-end encryption for all data transmission</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Secure key management and rotation</li>
                  <li>Data anonymization and pseudonymization</li>
                  <li>Regular backup encryption and verification</li>
                </ul>
              </div>
            </div>

            {/* Authentication & Access */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Users className='w-6 h-6 text-[#f78166]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Authentication & Access Control
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>Multi-factor authentication and strict access controls:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Multi-factor authentication (MFA) for all accounts</li>
                  <li>Role-based access control (RBAC)</li>
                  <li>Session management and timeout controls</li>
                  <li>Privileged access management</li>
                  <li>Regular access reviews and audits</li>
                </ul>
              </div>
            </div>

            {/* Smart Contract Security */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Smart Contract Security
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>Our smart contracts undergo rigorous security measures:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Third-party security audits by leading firms</li>
                  <li>Formal verification and mathematical proofs</li>
                  <li>Bug bounty programs for vulnerability discovery</li>
                  <li>Gradual deployment and testing phases</li>
                  <li>Emergency pause mechanisms and upgradeability</li>
                </ul>
              </div>
            </div>

            {/* Monitoring & Response */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Eye className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Monitoring & Incident Response
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>Continuous monitoring and rapid response capabilities:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>24/7 security operations center (SOC)</li>
                  <li>Real-time threat detection and analysis</li>
                  <li>Automated incident response systems</li>
                  <li>Security information and event management (SIEM)</li>
                  <li>Regular incident response drills and training</li>
                </ul>
              </div>
            </div>

            {/* Compliance & Standards */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#f78166]' />
                </div>
                <h3 className='text-3xl font-bold text-[#f0f6fc]'>
                  Compliance & Standards
                </h3>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We adhere to industry security standards and best practices:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>ISO 27001 information security management</li>
                  <li>PCI DSS compliance for payment processing</li>
                  <li>GDPR and CCPA privacy compliance</li>
                  <li>Regular third-party security assessments</li>
                  <li>Industry best practices and frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='sparkle' className='my-12' />
      </div>

      {/* Security Features */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold mb-20 text-center text-[#f0f6fc]'>
            Advanced Security <span className='text-gradient'>Features</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div className='craft-card p-8'>
              <div className='w-16 h-16 bg-[#21262d] rounded-2xl flex items-center justify-center mb-6'>
                <Zap className='w-8 h-8 text-[#58a6ff]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Real-Time Threat Detection
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-6'>
                Our AI-powered systems continuously monitor for suspicious
                activities and potential threats.
              </p>
              <ul className='space-y-2 text-[#7d8590]'>
                <li>• Behavioral analysis and anomaly detection</li>
                <li>• Machine learning threat identification</li>
                <li>• Automated response and mitigation</li>
                <li>• Threat intelligence integration</li>
              </ul>
            </div>

            <div className='craft-card p-8'>
              <div className='w-16 h-16 bg-[#21262d] rounded-2xl flex items-center justify-center mb-6'>
                <Shield className='w-8 h-8 text-[#7ee787]' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-[#f0f6fc]'>
                Multi-Signature Wallets
              </h3>
              <p className='text-[#7d8590] text-lg leading-relaxed mb-6'>
                Enterprise-grade multi-signature wallet technology for enhanced
                security.
              </p>
              <ul className='space-y-2 text-[#7d8590]'>
                <li>• Multiple key holders required for transactions</li>
                <li>• Hardware security module (HSM) integration</li>
                <li>• Time-locked transactions and approvals</li>
                <li>• Comprehensive audit trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='default' className='my-12' />
      </div>

      {/* Security Tips */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 text-center text-[#f0f6fc]'>
            Security <span className='text-gradient'>Best Practices</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='craft-card p-6'>
              <div className='flex items-center space-x-3 mb-4'>
                <CheckCircle className='w-5 h-5 text-[#7ee787]' />
                <h3 className='text-lg font-semibold text-[#f0f6fc]'>
                  Wallet Security
                </h3>
              </div>
              <p className='text-[#7d8590] text-sm'>
                Never share your private keys or seed phrases. Use hardware
                wallets for large amounts.
              </p>
            </div>

            <div className='craft-card p-6'>
              <div className='flex items-center space-x-3 mb-4'>
                <CheckCircle className='w-5 h-5 text-[#7ee787]' />
                <h3 className='text-lg font-semibold text-[#f0f6fc]'>
                  Two-Factor Authentication
                </h3>
              </div>
              <p className='text-[#7d8590] text-sm'>
                Enable 2FA on all your accounts and use authenticator apps
                instead of SMS.
              </p>
            </div>

            <div className='craft-card p-6'>
              <div className='flex items-center space-x-3 mb-4'>
                <CheckCircle className='w-5 h-5 text-[#7ee787]' />
                <h3 className='text-lg font-semibold text-[#f0f6fc]'>
                  Regular Updates
                </h3>
              </div>
              <p className='text-[#7d8590] text-sm'>
                Keep your software, wallets, and devices updated with the latest
                security patches.
              </p>
            </div>

            <div className='craft-card p-6'>
              <div className='flex items-center space-x-3 mb-4'>
                <CheckCircle className='w-5 h-5 text-[#7ee787]' />
                <h3 className='text-lg font-semibold text-[#f0f6fc]'>
                  Phishing Awareness
                </h3>
              </div>
              <p className='text-[#7d8590] text-sm'>
                Be cautious of suspicious links and never enter credentials on
                unverified sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Divider */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <LEDDivider variant='pulse' className='my-12' />
      </div>

      {/* Report Security Issues */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 text-[#f0f6fc]'>
            Report Security <span className='text-gradient'>Issues</span>
          </h2>

          <p className='text-[#7d8590] text-lg leading-relaxed mb-8 max-w-2xl mx-auto'>
            If you discover a security vulnerability or have security concerns,
            please report them immediately through our secure channels.
          </p>

          <div className='craft-card max-w-2xl mx-auto p-8'>
            <div className='w-20 h-20 bg-[#21262d] rounded-full flex items-center justify-center mx-auto mb-6'>
              <AlertTriangle className='w-10 h-10 text-[#f78166]' />
            </div>

            <h3 className='text-2xl font-bold mb-4 text-[#f0f6fc]'>
              Security Vulnerability Reporting
            </h3>

            <p className='text-[#7d8590] mb-6'>
              We take security seriously and provide a responsible disclosure
              program. Please report any issues through our Telegram channel for
              immediate attention.
            </p>

            <a
              href='#'
              className='inline-flex items-center space-x-3 bg-[#f78166] hover:bg-[#e85d4a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              <AlertTriangle className='w-5 h-5' />
              <span>Report Security Issue</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
