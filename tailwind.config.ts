import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081B3A',
        purple: '#6B46FF',
        ink: '#102244',
        mist: '#F8FAFC'
      },
      boxShadow: {
        premium: '0 24px 60px rgba(8, 27, 58, 0.12)',
        soft: '0 12px 30px rgba(8, 27, 58, 0.08)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgba(107,70,255,0.18), rgba(8,27,58,0.03))'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(12px, -16px, 0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;