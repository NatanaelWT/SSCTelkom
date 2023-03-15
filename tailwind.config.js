/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#AA0000 ",
        dark: "#1E1E1E ",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
