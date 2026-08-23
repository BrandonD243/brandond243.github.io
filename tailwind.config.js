/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F5F6F3",
          raised: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#12161A",
          raised: "#181D22",
        },
        line: {
          light: "#DEE1DA",
          dark: "#262D34",
        },
        slate: {
          light: "#5B6470",
          dark: "#9AA4AE",
        },
        teal: {
          50: "#EAF3F1",
          200: "#9FC9C2",
          400: "#4FA39B",
          600: "#1F5F5B",
          700: "#164743",
        },
        amber: {
          400: "#E7A94C",
          500: "#DD9A31",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-4%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(104%)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        scan: "scan 3.2s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
