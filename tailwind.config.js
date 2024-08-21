/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      "Bright-orange": "hsl(31, 77%, 52%)",
      "Dark-cyan": "hsl(184, 100%, 22%)",
      "Very-dark-cyan": "hsl(179, 100%, 13%)",
      "Very-light-gray ": "hsl(179, 100%, 13%)",
      "Light-white": "hsl(0, 0%, 100%, 0.75)",
    },
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
      BigShoulders: ["Big Shoulders Display", "sans-serif"],
    },
  },
  plugins: [],
}

