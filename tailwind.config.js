/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: "#2D2727",
        secundary: "#222222",
        html: "#FF6000",
        css: "#2F58CD",
      },
    },
  },
  plugins: [],
};
