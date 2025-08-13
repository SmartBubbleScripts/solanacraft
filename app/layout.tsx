import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/components/WalletProvider';
import { CookieWrapper } from '@/components/CookieWrapper';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SolanaCraft - Professional Solana Platform | bubblepy.com',
  description:
    'Professional Solana platform for token claiming, launching, and NFT minting. Built with cutting-edge technology and enterprise-grade security.',
  keywords:
    'Solana, tokens, claiming, launching, NFTs, NFT minting, web3, cryptocurrency, blockchain, SolanaCraft, bubblepy, BSC, Binance Smart Chain',
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
  openGraph: {
    title: 'SolanaCraft - Professional Solana Platform | bubblepy.com',
    description:
      'Professional Solana platform for token claiming, launching, and NFT minting. Built with cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SolanaCraft',
    url: 'https://solana.bubblepy.com',
    images: [
      {
        url: '/logochecksvg.svg',
        width: 612,
        height: 792,
        alt: 'SolanaCraft Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolanaCraft - Professional Solana Platform | bubblepy.com',
    description:
      'Professional Solana platform for token claiming, launching, and NFT minting',
    images: ['/logochecksvg.svg'],
    creator: '@bubblepy',
    site: '@bubblepy',
  },
  alternates: {
    canonical: 'https://solana.bubblepy.com',
  },
  metadataBase: new URL('https://solana.bubblepy.com'),
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
