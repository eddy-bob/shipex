

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { base: "#2563EB", disabled: "#60A5FA", light: "#F8FAFC" },
        grey: {
          light: "#4B5563",
          lighter: "#6B7280",
          dark: "#1F2937",
        },
        red: {
          base: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};