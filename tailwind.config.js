/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "800px",
        md: "940px",
        lg: "984px",
        xl: "1035px",
        "2xl": "1000px",
      },
    },
  },
  plugins: [],
};
