/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"], // adjust paths as needed
  theme: {
    extend: {
      colors: {
        brand: "#ff2c1f",
        branddark: "#fa1216",
        main: "#020307",
      },
      gridTemplateColumns: {
        // our custom class name: 'auto-fit-180'
        auto180: "repeat(auto-fit, minmax(180px, auto))",
        auto160: "repeat(auto-fit, minmax(160px, auto))",
        auto140: "repeat(auto-fit, minmax(140px, auto))",
      },
    },
  },
};
