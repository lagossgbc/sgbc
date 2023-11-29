import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        200: "#C6DCF7",
        400: "#00397F",
        600: "#216BC4",
        900: "#001229",
      },
      yellow: {
        400: "#F9D71C",
        500: "#F9AF1C",
      },
      gray: {
        200: "#D9D9D9",
        400: "#6f6e6e",
      },
      red: {
        500: "#EF4444",
      },
    },
    fontFamily: {
      Montserrat: ["montserrat", "sans-serif"],
      Georgia: ["Georgia", "sans-serif"],
      menu: ['"Manrope"', "sans-serif"],
      libre: ['"Libre Baskerville"', "sans-serif"],
    },
    minHeight: {},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
