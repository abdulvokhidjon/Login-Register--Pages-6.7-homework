/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["valentine"], // Optional: customize your themes
  },
};
