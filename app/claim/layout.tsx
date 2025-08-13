import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claim Solana Tokens Instantly | SolanaCraft - Professional Token Claiming Platform',
  description: 'Claim your Solana tokens instantly with SolanaCraft. Professional token claiming platform with enterprise-grade security, lowest fees, and lightning-fast processing. Support for Phantom, Solflare, Exodus wallets.',
  keywords: [
    'claim solana tokens',
    'solana token claiming',
    'claim tokens instantly',
    'solana airdrop claiming',
    'token claim platform',
    'solana wallet tokens',
    'claim free solana',
    'solana token distribution',
    'professional token claiming',
    'secure token claiming',
    'fast token claiming',
    'lowest fees token claiming',
    'phantom wallet tokens',
    'solflare wallet tokens',
    'exodus wallet solana',
    'solana blockchain tokens',
    'defi token claiming',
    'nft token claiming',
    'solana ecosystem',
    'web3 token platform',
    'cryptocurrency token claiming',
    'blockchain token service',
    'solana network tokens',
    'token claim verification',
    'solana token balance',
    'claim pending tokens',
    'solana token rewards',
    'token claim security',
    'multi-wallet support',
    'enterprise token platform'
  ],
  authors: [{ name: 'SolanaCraft Team' }],
  openGraph: {
    title: 'Claim Solana Tokens Instantly | SolanaCraft',
    description: 'Professional Solana token claiming platform with enterprise-grade security and lowest fees. Claim your tokens in seconds!',
    type: 'website',
    locale: 'en_US',
    url: 'https://solanacraft.com/claim',
    siteName: 'SolanaCraft',
    images: [
      {
        url: '/og-claim-tokens.jpg',
        width: 1200,
        height: 630,
        alt: 'SolanaCraft Token Claiming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claim Solana Tokens Instantly | SolanaCraft',
    description: 'Professional Solana token claiming platform with enterprise-grade security and lowest fees.',
    images: ['/og-claim-tokens.jpg'],
  },
  alternates: {
    canonical: 'https://solanacraft.com/claim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'theme-color': '#58a6ff',
    'msapplication-TileColor': '#58a6ff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function ClaimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
