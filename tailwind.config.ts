import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#29AFBD",
        },
        accent: {
          50: "#F4f2f5",
          300: "#9689A8",
          500: "#534667",
        },
        gray: {
          150: "#EFEDF2",
          200: "#ECEAEF",
        },
      },
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        base: "0px 0px 60px -40px rgba(0, 0, 0, 1)",
        large: "0px 0px 140px -10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
