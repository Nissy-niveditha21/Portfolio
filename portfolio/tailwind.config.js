/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fdf6f0",
        card: "#ffffff",
        primary: "#a78bfa",
        accent: "#f9a8d4",
        soft: "#fde68a"
      }
    },
  },
  plugins: [],
}