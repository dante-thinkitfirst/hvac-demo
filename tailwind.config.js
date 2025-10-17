// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import relumePreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  presets: [relumePreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // include Relume UI (if you import any of their components)
    "./node_modules/@relume_io/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // body text
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        // headings
        heading: [
          "Urbanist",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "2.75rem",
        "6xl": "3rem",
        "7xl": "3.75rem",
        "8xl": "5.25rem",
        "9xl": "6.75rem",
        "10xl": "8.25rem",
      },
    },
  },
  plugins: [],
};
