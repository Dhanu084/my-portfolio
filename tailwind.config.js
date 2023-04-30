/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in 2 backwards",
        spin: "spin 1s linear 2 backwards",
        spin1: "spin 1s linear 1 backwards",
        slideright: "slideright 2s liner infinite"
      },
      keyframes: {
        slideright: {
          "0%, 100%": { transform: "rotate(-3deg)" }
        }
      }
    }
  },
  plugins: []
};
