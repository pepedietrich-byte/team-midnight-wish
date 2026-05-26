/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#07031a',
          900: '#0f0720',
          800: '#1e1240',
          700: '#2d1b69'
        }
      },
      fontFamily: {
        pixel:   ['"Press Start 2P"', 'monospace'],
        display: ['"Cinzel"', 'serif'],
        body:    ['"Inter"', 'sans-serif']
      },
      animation: {
        'float':      'float 9s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer':    'shimmer 4s linear infinite',
        'twinkle':    'twinkle 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.25), 0 0 40px rgba(124,58,237,0.1)' },
          '50%':      { boxShadow: '0 0 40px rgba(124,58,237,0.55), 0 0 80px rgba(124,58,237,0.2)' }
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%':      { opacity: '0.8' }
        }
      }
    }
  },
  plugins: []
};