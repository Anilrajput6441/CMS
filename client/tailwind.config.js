// t

import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, rgb(195, 235, 47), hsl(73, 82%, 55%))",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
