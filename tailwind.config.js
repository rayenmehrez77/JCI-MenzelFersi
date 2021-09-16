module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      neuton: ["Neuton", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
