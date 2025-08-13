#!/bin/bash

echo "🚀 Setting up SolanaCraft - Professional Solana Platform"
echo "========================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment file..."
    cp env.example .env.local
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  Please edit .env.local with your configuration values"
else
    echo "✅ Environment file already exists"
fi

# Create public directory if it doesn't exist
mkdir -p public

echo ""
echo "🎉 SolanaCraft setup completed successfully!"
echo ""
echo "🚀 What you've got:"
echo "   • Professional Solana platform with GitHub-inspired dark theme"
echo "   • Token claiming, launching, and NFT capabilities"
echo "   • Enterprise-grade security and performance"
echo "   • Mobile-first responsive design"
echo "   • Multi-wallet support (Phantom, Solflare, Exodus)"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env.local with your Solana network and commission settings"
echo "2. Run 'npm run dev' to start development server"
echo "3. Open http://localhost:3000 in your browser"
echo "4. Connect your Solana wallet to test the platform"
echo ""
echo "🌐 For production deployment:"
echo "1. Push to GitHub repository"
echo "2. Connect to Vercel for hosting"
echo "3. Add environment variables in Vercel dashboard"
echo "4. Deploy and share your professional Solana platform!"
echo ""
echo "💡 Pro Tips:"
echo "   • Test with Solana Devnet first"
echo "   • Use Exodus wallet for secure testing"
echo "   • Customize colors in tailwind.config.js"
echo "   • Add your own tokens in TokenClaimer.tsx"
echo ""
echo "Happy building with SolanaCraft! 🚀✨"
