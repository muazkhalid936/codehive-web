/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "scroll-left": "scroll-left 10s linear infinite",
        "scroll-right": "scroll-right 10s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // End at left
        },
        "scroll-right": {
          "0%": { transform: "translateX(-100%)" }, // Start from left
          "100%": { transform: "translateX(100%)" }, // End at right
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
