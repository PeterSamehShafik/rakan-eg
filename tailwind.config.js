/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
    extend: {
      keyframes: {
        slideInFromBottom: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInFromBottom: 'slideInFromBottom 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
