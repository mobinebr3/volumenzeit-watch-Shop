import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        purpuleColor: "#735CFF",
        bgcolor: "#F9FAFE",
        textcolor: "#939393",
        itembgcolorone: "#DFE2EC",
        blackcolor: "#000000",
      },
    },
  },
  plugins: [nextui(), require("tailwind-scrollbar")],
} satisfies Config;
