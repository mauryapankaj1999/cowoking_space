import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#003F2D",
        textPrimary: "#5A6769",
        secondary: "#1764D8",
        accent: "#F8F9FF",
      },
       fontFamily: {
        financierDisplay: ["Financier Display", "serif"],
        financierText: ["Financier Text", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
