/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131316",
      },
      backgroundImage: {
        "wand-tip":
          "linear-gradient(#cfdcf1 1%,#fff 13%,#fff 59%,#dfe6f1 92%,#d4ddec 96%)",
        "wand-streak": "linear-gradient(91deg,#000,#fff 31%)",
        "wand-shaft": "linear-gradient(90deg,#0c0c0c,#1d1a1f)",
      },

      boxShadow: {
        wand: "0 10px 16px rgba(0,0,0,.4)",
        "particle-blur": "inset 0 2px 20px 20px #1d1c20",
      },
    },
  },
  plugins: [],
};
