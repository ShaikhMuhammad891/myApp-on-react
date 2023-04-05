/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mb: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    fontFamily: {
      mulish: "Mulish",
    },
    extend: {
      colors: {
        textColor: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        backgroudC: "var(--color-background)",
        priceText : "var(--color-textC)"
      },
    },
    plugins: [],
  },
};
