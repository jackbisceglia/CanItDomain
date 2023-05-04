/** @type {import('tailwindcss').Config} */
module.exports = {
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
        fog: {
          50: "#e5edf2ff",
          100: "#bfd0daff",
          200: "#97c1e1",
          300: "#66b4f0",
          400: "#429add",
          500: "#287bbb",
          600: "#295271",
          700: "#263d4f",
          800: "#1b2832",
          900: "#10171d",
        },
      },
    },
  },
  plugins: [],
};
