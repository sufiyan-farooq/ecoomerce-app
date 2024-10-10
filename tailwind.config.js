/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],  theme: {
    extend: {},
  },
 plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

