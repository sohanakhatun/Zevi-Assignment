/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxsm: "200px",
      xsm: "400px",
      sm: "576px",
      md: "960px",
      lg: "1120px",
      xlg: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },      
    },
  },
  plugins: [],
};
