/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        vanth: {
          primary: '#A60F1B',    // Ana kırmızı
          secondary: '#73141B',  // Koyu kırmızı
          dark: '#401519',      // Çok koyu kırmızı
          accent: '#F20C36',    // Parlak kırmızı
          base: '#1E2126',      // Koyu gri arkaplan
        }
      }
    },
  },
  plugins: [],
};
