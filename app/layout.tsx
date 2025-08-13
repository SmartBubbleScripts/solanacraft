import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/components/WalletProvider';
import { CookieWrapper } from '@/components/CookieWrapper';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'SolanaCraft - Lowest Fees for Solana Rent Reclamation | 0.0007 SOL per Account',
  description:
    'Most affordable Solana rent reclamation service at 0.0007 SOL per account. Save 30% vs competitors like Sol-Initiator. Professional dApp for token claiming with lowest fees in market.',
  keywords:
    'Solana rent reclamation, lowest fees, token claiming, 0.0007 SOL, dApp, DeFi, web3, cryptocurrency, blockchain, SolanaCraft, bubblepy, market leader, cheapest service',
  authors: [{ name: 'SolanaCraft Team' }, { name: 'bubblepy.com' }],
  creator: 'bubblepy.com',
  publisher: 'bubblepy.com',
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
  icons: {
    icon: '/logochecksvg.svg',
    shortcut: '/logochecksvg.svg',
    apple: '/logochecksvg.svg',
  },
  manifest: '/dapp-manifest.json',
  openGraph: {
    title: 'SolanaCraft - Lowest Fees for Solana Rent Reclamation | 0.0007 SOL',
    description:
      'Save 30% with our 0.0007 SOL fee vs competitors charging 0.001 SOL. Most affordable Solana rent reclamation dApp in the market.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SolanaCraft',
    url: 'https://solana.bubblepy.com',
    images: [
      {
        url: '/logochecksvg.svg',
        width: 612,
        height: 792,
        alt: 'SolanaCraft - Lowest Fees Solana Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolanaCraft - Lowest Fees for Solana Rent Reclamation | 0.0007 SOL',
    description:
      'Most affordable Solana rent reclamation dApp. Save 30% vs competitors with our 0.0007 SOL fee.',
    images: ['/logochecksvg.svg'],
    creator: '@bubblepy',
    site: '@bubblepy',
  },
  alternates: {
    canonical: 'https://solana.bubblepy.com',
  },
  metadataBase: new URL('https://solana.bubblepy.com'),
  other: {
    dapp: 'true',
    blockchain: 'Solana',
    category: 'DeFi',
    fee: '0.0007 SOL',
    advantage: '30% cheaper than competitors',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-[#0d1117] bg-dots-subtle`}>
        <WalletProvider>
          <CookieWrapper>{children}</CookieWrapper>
        </WalletProvider>
      </body>
    </html>
  );
}
