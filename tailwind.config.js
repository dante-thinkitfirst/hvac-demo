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
    extend: {},
  },
  plugins: [],
};
