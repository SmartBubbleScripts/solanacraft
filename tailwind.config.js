/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional GitHub-inspired colors
        craft: {
          50: '#f0f6fc',
          100: '#c9d1d9',
          200: '#b1bac4',
          300: '#8b949e',
          400: '#7d8590',
          500: '#6e7681',
          600: '#484f58',
          700: '#30363d',
          800: '#21262d',
          900: '#161b22',
          950: '#0d1117',
        },
        // Accent colors
        accent: {
          blue: '#58a6ff',
          'blue-dark': '#1f6feb',
          green: '#7ee787',
          'green-dark': '#1a7f37',
          red: '#ff7b72',
          'red-dark': '#da3633',
          yellow: '#ffa657',
          'yellow-dark': '#d29922',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(88, 166, 255, 0.1)',
        'glow-lg': '0 0 50px rgba(88, 166, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
