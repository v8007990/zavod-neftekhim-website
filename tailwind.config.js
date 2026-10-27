/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Глубокий стальной / тёмно-синий акцент
        steel: {
          50: '#eef4fb',
          100: '#d6e4f4',
          200: '#b3cce9',
          300: '#84a9d4',
          400: '#5283ba',
          500: '#3366a0',
          600: '#285186',
          700: '#23426d',
          800: '#1d3657',
          900: '#13294a',
          950: '#0a1a32',
        },
        // Графитовая типографика / нейтральные
        ink: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d5d9dd',
          300: '#b0b7be',
          400: '#828b94',
          500: '#636c75',
          600: '#4d555c',
          700: '#3f464c',
          800: '#2f343a',
          900: '#1d2125',
          950: '#0c0e10',
        },
        success: {
          50: '#ecfdf3',
          500: '#12b76a',
          600: '#039855',
          700: '#027a48',
        },
        warning: {
          50: '#fffaeb',
          500: '#f79009',
          600: '#dc6803',
          700: '#b54708',
        },
        error: {
          50: '#fef3f2',
          500: '#f04438',
          600: '#d92d20',
          700: '#b42318',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
      boxShadow: {
        panel: '0 1px 2px rgba(16,24,40,0.04), 0 12px 32px -12px rgba(16,24,40,0.12)',
        'panel-lg': '0 1px 2px rgba(16,24,40,0.05), 0 24px 64px -20px rgba(16,24,40,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 0.25s ease both',
      },
    },
  },
  plugins: [],
};
