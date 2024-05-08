/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
  ],
  prefix: '',
  theme: {
    variants: {
      scrollbar: ['dark'],
    },
    // Custom container
    container: {
      center: true,
      padding: '0.9375rem',
      screens: {
        before_desktop: '1024px',
        before_tablet: '640px',
        big_desktop: '1536px',
        desktop: '1280px',
        mobile: '360px',
        tablet: '768px',
      },
    },
    extend: {
      spacing: {
        'header-height': '3.75rem', // 60px
      },
      // Custom fonts
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'md-H2-18': ['1.125rem', { fontWeight: '700', lineHeight: '1.5rem' }], // '1.125rem' = 18px, '1.5rem' = 24px,
        'md-H3-16': ['1rem', { fontWeight: '600', lineHeight: '1.5rem' }], // '1rem' = 16px, '1.5rem' = 24px,
        'md-bold-16': ['1rem', { fontWeight: '700', lineHeight: '1.5rem' }], // '1rem' = 16px, '1.5rem' = 24px,
        'main-reg-16': ['1rem', { fontWeight: '400', lineHeight: '1.5rem' }], // '1rem' = 16px, '1.5rem' = 24px,
        'sm-14': ['0.875rem', { fontWeight: '500', lineHeight: '1.5rem' }], // '0.875rem' = 14px, '1.5rem' = 24px,
        'sm-bold-14': ['0.875rem', { fontWeight: '700', lineHeight: '1.5rem' }], // '0.875rem' = 14px, '1.5rem' = 24px,
        'sm-reg-14': ['0.875rem', { fontWeight: '400', lineHeight: '1.5rem' }], // '0.875rem' = 14px, '1.5rem' = 24px,
        'sm-reg-link-14': ['0.875rem', { fontWeight: '400', lineHeight: '1.5rem' }], // '0.875rem' = 14px, '1.5rem' = 24px,
        'xs-12': ['0.75rem', { fontWeight: '400', lineHeight: '1rem' }], // '0.75rem' = 12px, '1rem' = 16px,
        'xs-link-12': ['0.75rem', { fontWeight: '400', lineHeight: '1rem' }], // '0.75rem' = 12px, '1rem' = 16px,
        'xs-semi-bold-12': ['0.75rem', { fontWeight: '600', lineHeight: '1rem' }], // '0.75rem' = 12px, '1rem' = 16px,
      },
      fontWeight: {
        'bold-700': '700',
        'medium-500': '500',
        'main-400': '400',
        'semi-bold-600': '600',
      },
      lineHeight: {
        's-16': '16px', // 1rem
        'm-main-24': '24px', // 1.5rem
        'l-36': '36px', // 2.25rem
      },
      // Design colors
      colors: {
        Primary: {
          100: '#73A5FF',
          300: '#4C8DFF',
          500: '#397DF6',
          700: '#2F68CC',
          900: '#234E99',
        },
        Danger: {
          100: '#FF8099',
          300: '#F23D61',
          500: '#CC1439',
          700: '#990F2B',
          900: '#660A1D',
        },
        Dark: {
          100: '#4C4C4C',
          300: '#333333',
          500: '#171717',
          700: '#0D0D0D',
          900: '#000000',
        },
        Light: {
          100: '#FFFFFF',
          300: '#F7FBFF',
          500: '#EDF3FA',
          700: '#D5DAE0',
          900: '#8D9094',
        },
        Success: {
          100: '#80FFBF',
          300: '#22E584',
          500: '#14CC70',
          700: '#0F9954',
          900: '#0A6638',
        },
        Warning: {
          100: '#FFD073',
          300: '#E5AC39',
          500: '#D99000',
          700: '#D99000',
          900: '#D99000',
        },
        // Shad_cn ui default colors
        accent: {
          DEFAULT: '#c6f2ff',
          foreground: '#302828',
        },
        background: '#ffffff',
        border: '#bad4e4',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#373737',
        },
        destructive: {
          DEFAULT: '#ff3f3f',
          foreground: '#c6f2ff',
        },
        foreground: '#373737',
        input: '#bad4e4',
        muted: {
          DEFAULT: '#c6f2ff',
          foreground: '#8da094',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#373737',
        },
        primary: {
          DEFAULT: '#397DF6',
          foreground: '#FAFAFA',
        },
        ring: '#ffffff',
        secondary: {
          DEFAULT: '#c6f2ff',
          foreground: '#302828',
        },
      },
      animation: {
        // Shad_cn ui
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Custom
        fadeIn: 'fadeIn .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'shadow-large-text': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        // Shad_cn ui
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      // Custom animate
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
      // custom indexes
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
    fontFamily: {
      inter: 'Inter sans-serif',
    },
  },
}
