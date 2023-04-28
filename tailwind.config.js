/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in 2 backwards",
        spin: "spin 1s linear 2 backwards"
      }
    }
  },
  plugins: []
};
