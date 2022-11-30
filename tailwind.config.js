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
        cardBg: 'hsl(221, 39%, 17%)',
        diceBg: 'hsl(150, 100%, 66%)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
