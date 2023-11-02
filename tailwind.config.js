/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "blue",
      transparentBg: "transparent",
      blue: "#1fb6ff",
      mod1Color: "#6B7280",
      primaryDark: "#201F1F",
      primaryGrey: "#2A2A2A",
      secondaryGrey: "#CECECE",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      headingFamily: ["IBM Plex Mono"],
      bodyFamily: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
