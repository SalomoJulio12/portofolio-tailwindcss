/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#991b1b",
        secondary: "#451a03",
        third: "#525252",
        dark: "#09090b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
