import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        

  ],
  theme: {
      extend: {
      colors: {
        cream: '#fff',
        'light-gray': '#F5F5F7',
        'dark-gray': '#A7A7A7',
        'highlight-orange': '#FFA26B',
        'highlight-orange-dark': '#FFA262',
        'soft-blue': '#FFA26B',
      },
      boxShadow: {
        'neu-outer': '10px 10px 20px #C5C5C5, -10px -10px 20px #FFFFFF',
        'neu-inner': 'inset 6px 6px 12px #C5C5C5, inset -6px -6px 12px #FFFFFF',
      },
    },
  },
darkMode: "class",
  plugins: [nextui()],
};
export default config;
