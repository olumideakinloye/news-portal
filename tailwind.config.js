export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#D62828",

        secondary: "#1D3557",

        accent: "#F77F00",

        darkBg: "#0F172A",

        blue: {
          500: "#1D4ED8",
          600: "#1E40AF",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],

        display: ["Space Grotesk", "sans-serif"],

        logo: ["Space Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
};