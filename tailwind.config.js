module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#F1F1F1",
          light: "#F5F5F5",
        },
        brand: {
          DEFAULT: "#20B4E3",
          light: "#39A2DB",
          dark: "#113CFC",
        },
        blue: {
          DEFAULT: "#102D4E",
        },
        orange: {
          DEFAULT: "#FDC400",
          dark: "#FF4F03",
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
