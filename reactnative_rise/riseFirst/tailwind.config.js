/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",          // entry file
    "./app/**/*.{js,jsx,ts,tsx}",     // all screens in expo-router
    "./components/**/*.{js,jsx,ts,tsx}", // shared components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        primary: "#10293F",
        secondary: "#C49A58",
      },
      fontFamily: {
        fuzzy: ["FuzzyBubbles_400Regular"],   // regular weight
        "fuzzy-bold": ["FuzzyBubbles_700Bold"], // bold weight

        inter: ["Inter_400Regular"],
        "inter-bold": ["Inter_700Bold"],
      },

    },
  },
  plugins: [],
};
