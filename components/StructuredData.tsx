export const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SolanaCraft',
    description:
      'Professional Solana platform for token claiming, launching, and NFT minting. Built with cutting-edge technology and enterprise-grade security.',
    url: 'https://solana.bubblepy.com',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free to use platform',
    },
    provider: {
      '@type': 'Organization',
      name: 'bubblepy.com',
      url: 'https://bubblepy.com',
      sameAs: ['https://solana.bubblepy.com'],
    },
    author: {
      '@type': 'Organization',
      name: 'SolanaCraft Team',
      url: 'https://solana.bubblepy.com',
    },
    featureList: [
      'Token Claiming',
      'Token Launch',
      'NFT Minting',
      'Enterprise Security',
      'Lightning Fast Processing',
    ],
    screenshot: 'https://solana.bubblepy.com/logochecksvg.svg',
    softwareVersion: '1.0.0',
    releaseNotes: 'Initial release with core Solana functionality',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Developers, Crypto Enthusiasts, NFT Creators',
    },
    keywords:
      'Solana, tokens, claiming, launching, NFTs, NFT minting, web3, cryptocurrency, blockchain, SolanaCraft, bubblepy, BSC, Binance Smart Chain',
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
