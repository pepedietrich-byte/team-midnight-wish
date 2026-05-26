/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        midnight:    '#050810',
        'midnight-2':'#0a0e1a',
        'midnight-3':'#0f1426',
        gold:        '#f7d84b',
        'gold-dim':  '#c4a832',
        'neon-blue': '#3b9eff',
        'ring-purple':'#8b5cf6',
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(3deg)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%':     { opacity: '1',    transform: 'scale(1.6)' },
        },
        'pulse-ring': {
          '0%,100%': { boxShadow: '0 0 8px rgba(247,216,75,0.3)' },
          '50%':     { boxShadow: '0 0 28px rgba(247,216,75,0.8), 0 0 55px rgba(247,216,75,0.25)' },
        },
        'pulse-blue': {
          '0%,100%': { boxShadow: '0 0 8px rgba(59,158,255,0.3)' },
          '50%':     { boxShadow: '0 0 28px rgba(59,158,255,0.8), 0 0 55px rgba(59,158,255,0.25)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        twinkle:      'twinkle 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 3s ease-in-out infinite',
        'slide-up':   'slide-up 0.8s ease-out forwards',
        'fade-in':    'fade-in 1s ease-out forwards',
        'rotate-slow':'rotate-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};