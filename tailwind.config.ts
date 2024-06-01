import type { Config } from "tailwindcss";
import 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap';

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
      backgroundColor : {
        'green': '#1AC822',
        'green-500': '#F0FFFB',
        'grey-400' : '#C4C4C4',
      },
      fontFamily : {
        'noto-sans':  ['noto-sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
