'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LEDDivider } from '@/components/LEDDivider';
import {
  Cookie,
  Shield,
  Eye,
  Settings,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-8 text-[#f0f6fc] leading-tight'>
            Cookie <span className='text-gradient text-glow'>Policy</span>
          </h1>
          <p className='text-xl text-[#7d8590] mb-12 max-w-3xl mx-auto leading-relaxed'>
            This policy explains how we use cookies and similar technologies on
            SolanaCraft to enhance your experience and comply with privacy
            regulations.
          </p>

          <div className='flex items-center justify-center space-x-8 text-sm text-[#7d8590]'>
            <div className='flex items-center space-x-2'>
              <Cookie className='w-4 h-4' />
              <span>GDPR & CCPA Compliant</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Shield className='w-4 h-4' />
              <span>Transparent tracking</span>
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
            {/* What Are Cookies */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Cookie className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  What Are Cookies?
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Cookies are small text files that are stored on your device
                  when you visit our website. They help us provide you with a
                  better experience by:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing how you use our website</li>
                  <li>Providing personalized content and features</li>
                  <li>Ensuring security and preventing fraud</li>
                </ul>
                <p>
                  We also use similar technologies like web beacons, pixel tags,
                  and local storage to enhance your experience and gather
                  analytics.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Settings className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Types of Cookies We Use
                </h2>
              </div>

              <div className='space-y-6 text-[#7d8590] text-lg leading-relaxed'>
                <div>
                  <h3 className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                    Essential Cookies
                  </h3>
                  <p>
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation,
                    access to secure areas, and form submissions. The website
                    cannot function properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                    Performance Cookies
                  </h3>
                  <p>
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously. This helps us improve our website and user
                    experience.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                    Functional Cookies
                  </h3>
                  <p>
                    These cookies enable enhanced functionality and
                    personalization, such as remembering your language
                    preferences and customizing content based on your usage.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-3 text-[#f0f6fc]'>
                    Analytics Cookies
                  </h3>
                  <p>
                    These cookies help us understand how our website is
                    performing and how users interact with it. We use this
                    information to improve our services and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Eye className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Third-Party Cookies
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We may use third-party services that place cookies on your
                  device. These services help us provide better functionality
                  and analyze our website performance.
                </p>
                <p>Third-party cookies may include:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Google Analytics for website analytics</li>
                  <li>Cloudflare for security and performance</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Payment processors for transaction security</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie
                  practices. We recommend reviewing their policies for more
                  information.
                </p>
              </div>
            </div>

            {/* Cookie Consent */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Cookie Consent
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  In compliance with GDPR (European Union) and CCPA (California)
                  regulations, we obtain your consent before placing
                  non-essential cookies on your device.
                </p>
                <p>
                  When you first visit our website, you'll see a cookie consent
                  banner that allows you to:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Learn more about our cookie practices</li>
                </ul>
                <p>
                  You can change your cookie preferences at any time by clicking
                  the cookie settings link in our footer or by clearing your
                  browser cookies.
                </p>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Settings className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Managing Your Cookie Preferences
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>You have several options for managing cookies:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you
                    to control cookies through their settings. You can block all
                    cookies, accept only first-party cookies, or delete cookies
                    when you close your browser.
                  </li>
                  <li>
                    <strong>Cookie Preferences:</strong> Use our cookie consent
                    manager to customize which types of cookies you accept.
                  </li>
                  <li>
                    <strong>Third-Party Opt-Out:</strong> Some third-party
                    services provide opt-out mechanisms for their cookies and
                    tracking technologies.
                  </li>
                </ul>
                <p>
                  Please note that blocking certain cookies may affect the
                  functionality of our website and your user experience.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Eye className='w-6 h-6 text-[#f78166]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Data Collected Through Cookies
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>Cookies may collect the following types of information:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>IP address and general location information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Links clicked and navigation patterns</li>
                  <li>Device information and screen resolution</li>
                  <li>Language preferences and time zone</li>
                </ul>
                <p>
                  This information is used to improve our website, provide
                  personalized content, and ensure security. We do not use
                  cookies to collect personally identifiable information without
                  your consent.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Data Retention and Security
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Cookie data is retained for different periods depending on the
                  type of cookie:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    <strong>Session Cookies:</strong> Deleted when you close
                    your browser
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Remain on your device
                    for a set period (typically 1-2 years)
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> Aggregated and anonymized
                    for long-term analysis
                  </li>
                </ul>
                <p>
                  We implement appropriate security measures to protect cookie
                  data from unauthorized access, alteration, or disclosure. All
                  data transmission is encrypted using industry-standard
                  protocols.
                </p>
              </div>
            </div>

            {/* International Compliance */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  International Compliance
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  Our cookie practices comply with privacy regulations in
                  multiple jurisdictions:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    <strong>GDPR (EU):</strong> We obtain explicit consent for
                    non-essential cookies and provide clear information about
                    data processing.
                  </li>
                  <li>
                    <strong>CCPA (California):</strong> We provide transparency
                    about data collection and respect your right to opt-out of
                    data sharing.
                  </li>
                  <li>
                    <strong>Other Jurisdictions:</strong> We adapt our practices
                    to comply with local privacy laws and regulations.
                  </li>
                </ul>
                <p>
                  If you have questions about compliance in your jurisdiction,
                  please contact us through our Telegram channel.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <AlertTriangle className='w-6 h-6 text-[#58a6ff]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Updates to This Policy
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  We may update this cookie policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                </p>
                <p>When we make material changes, we will:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Update the policy on our website</li>
                  <li>Notify users through our platform</li>
                  <li>Obtain renewed consent if required by law</li>
                  <li>Provide advance notice for significant changes</li>
                </ul>
                <p>
                  Your continued use of our website after such changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className='craft-card p-8'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-12 h-12 bg-[#21262d] rounded-xl flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-[#7ee787]' />
                </div>
                <h2 className='text-3xl font-bold text-[#f0f6fc]'>
                  Contact Us
                </h2>
              </div>

              <div className='space-y-4 text-[#7d8590] text-lg leading-relaxed'>
                <p>
                  If you have any questions about our cookie policy or how we
                  use cookies, please contact us through our Telegram channel.
                </p>
                <p>
                  We are committed to transparency and will respond to your
                  inquiries promptly. You can also use our cookie consent
                  manager to adjust your preferences at any time.
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
