/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using a CSS class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F5F5F5",
          primary: "#0D6EFD",
          secondary: "#0056D2",
          text: "#212529",
          accent: "#FF6B6B",
        },
        dark: {
          background: "#0D1117",
          primary: "#58A6FF",
          secondary: "#1F6FEB",
          text: "#C9D1D9",
          accent: "#F78166",
        },
      },
    },
  },
  plugins: [],
};
