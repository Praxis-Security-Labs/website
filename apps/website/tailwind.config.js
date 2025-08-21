// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,vue}',
    './src/**/*.{js,ts,jsx,tsx,vue,astro}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blues
        'praxis-dark-blue': {
          DEFAULT: '#013E75',
          50: '#E6EEF5',
          100: '#CCDCEB',
          200: '#99B9D7',
          300: '#6696C3',
          400: '#3373AF',
          500: '#013E75',
          600: '#013264',
          700: '#012653',
          800: '#011A42',
          900: '#000E31'
        },
        'praxis-blue': {
          DEFAULT: '#0071B3',
          50: '#E6F2F9',
          100: '#CCE5F3',
          200: '#99CBE7',
          300: '#66B1DB',
          400: '#3397CF',
          500: '#0071B3',
          600: '#005B91',
          700: '#00456F',
          800: '#002F4D',
          900: '#00192B'
        },
        'praxis-sky': {
          DEFAULT: '#00A5DB',
          50: '#E6F5FB',
          100: '#CCEBF7',
          200: '#99D7EF',
          300: '#66C3E7',
          400: '#33AFDF',
          500: '#00A5DB',
          600: '#0085B2',
          700: '#006589',
          800: '#004560',
          900: '#002537'
        },
        // Warm Accents
        'praxis-gold': {
          DEFAULT: '#DFB03C',
          50: '#FAF6EA',
          100: '#F5EDD5',
          200: '#EBDBAB',
          300: '#E1C981',
          400: '#D7B757',
          500: '#DFB03C',
          600: '#C89A30',
          700: '#A17D26',
          800: '#7A5F1D',
          900: '#534113'
        },
        'praxis-yellow': {
          DEFAULT: '#FBDE82',
          50: '#FEFBF0',
          100: '#FDF7E1',
          200: '#FBEFC3',
          300: '#F9E7A5',
          400: '#F7DF87',
          500: '#FBDE82',
          600: '#F9D35A',
          700: '#F7C832',
          800: '#E5B30F',
          900: '#B88E0C'
        },
        // Earth Tones
        'praxis-brick': {
          DEFAULT: '#9B4430',
          50: '#F4EAE8',
          100: '#E9D5D1',
          200: '#D3ABA3',
          300: '#BD8175',
          400: '#A75747',
          500: '#9B4430',
          600: '#7C3626',
          700: '#5D291D',
          800: '#3E1B13',
          900: '#1F0E0A'
        },
        'praxis-brown': {
          DEFAULT: '#996639',
          50: '#F3EDE7',
          100: '#E7DBCF',
          200: '#CFB79F',
          300: '#B7936F',
          400: '#9F6F3F',
          500: '#996639',
          600: '#7A522E',
          700: '#5C3D22',
          800: '#3D2917',
          900: '#1F140B'
        },
        'praxis-tan': {
          DEFAULT: '#E2D2B1',
          50: '#FAF8F3',
          100: '#F5F1E7',
          200: '#EBE3CF',
          300: '#E1D5B7',
          400: '#D7C79F',
          500: '#E2D2B1',
          600: '#D4BC8E',
          700: '#C6A66B',
          800: '#B89048',
          900: '#95743A'
        },
        'praxis-pine': {
          DEFAULT: '#093238',
          50: '#E7EBEC',
          100: '#CFD7D9',
          200: '#9FAFB3',
          300: '#6F878D',
          400: '#3F5F67',
          500: '#093238',
          600: '#07282D',
          700: '#051E22',
          800: '#041417',
          900: '#020A0C'
        },
        // Neutrals
        'praxis-black': '#222223',
        'praxis-gray': '#BDBDBD',
        'praxis-white': '#FBFBF9',
      },
      fontFamily: {
        'sans': ['Avenir', 'Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Avenir Black', 'Open Sans', 'system-ui', 'sans-serif'],
        'body': ['Avenir Medium', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale based on brand guidelines
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.3' }],
        'lg': ['1.125rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.3' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'brand-tight': '-0.01em',
        'brand-normal': '0',
        'brand-wide': '0.025em',
        'brand-wider': '0.05em',
        'brand-widest': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionDuration: {
        'brand': '200ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}