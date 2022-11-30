/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        '1/2': '50%',
        card: '316px',
      },
      colors: {
        ratingBg: 'hsl(216, 12%, 8%)',
        tipBg: 'hsl(185, 41%, 84%)',
        adviceBg: 'hsl(218, 23%, 16%)',
        cardBg: '#1B263E',
        diceBg: 'hsl(150, 100%, 66%)',
        mainHeaderGradient:
          'conic-gradient(from 182.43deg at 50% 50%, #FE79B9 0deg, #AD00FF 150deg, #2489FF 360deg);',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
