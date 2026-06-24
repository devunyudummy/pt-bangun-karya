/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#F9D71C',
          500: '#F5C518',
          600: '#E6B800',
          700: '#C9A000',
        },
        coal: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#242424',
          500: '#2E2E2E',
          400: '#3A3A3A',
          300: '#4A4A4A',
          200: '#6A6A6A',
        },
        stone: {
          50:  '#FAFAF8',
          100: '#F5F4EF',
          200: '#EAEAE4',
          300: '#D8D8D0',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        heroReveal: {
          '0%':   { opacity: '0', transform: 'translateY(50px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)',     filter: 'blur(0)' },
        },
        scrollDot: {
          '0%,100%': { opacity: '1', transform: 'translateY(0)' },
          '50%':     { opacity: '0.3', transform: 'translateY(10px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'hero-reveal': 'heroReveal 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'scroll-dot':  'scrollDot 2s ease-in-out infinite',
        'marquee':     'marquee 40s linear infinite',
        'fade-in':     'fadeIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}
