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
        xxs: "638px", // min-width
        sm: "747px",
        md: "940px",
        lg: "984px",
        xl: "1035px",
      },
    },
  },
  plugins: [],
};
