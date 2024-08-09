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
          800: "#42246E",
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
      backgroundImage: {
        "gray-gradient":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,233,233,1) 10%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
