
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        moveBg: "moveBg 10s ease infinite",
        leftRightBounce: "leftRightBounce 1.5s infinite", // Add the custom animation
      },
      keyframes: {
        moveBg: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        leftRightBounce: { // Define the new keyframes
          "0%": {
            transform: "translateX(-20px)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
