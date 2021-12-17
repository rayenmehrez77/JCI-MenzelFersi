module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#20B4E3",
          light: "#39A2DB",
          dark: "#113CFC",
        },
        footerbg: "#F1F4F7",
        textLight: "#C7D2FE",
      },
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
