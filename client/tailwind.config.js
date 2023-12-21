/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "440px",
      xxxs: "380px",
    },

    extend: {
      colors: {
        darkColor: {
          50: "#808080",
          75: "#333",
          100: "#262626",
          200: "#262626",
          300: "#1A1A1A",
          400: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
