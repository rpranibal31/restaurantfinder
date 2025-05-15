/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60028",
      },
      animation: {
        "pulse-once": "pulse-once 1s ease-in-out",
      },
      keyframes: {
        "pulse-once": {
          "0%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(1.1)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      fontSize: {
        base: "calc(1rem * var(--font-scale))",
      },
    },
  },
  plugins: [],
};
