module.exports = {
  content: ['./docs/**/*.html', './**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        anybody: ['"Anybody"', 'cursive'],
        sans: ['"Kumbh Sans"', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};