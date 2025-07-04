/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "PT Sans",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        darkBg: "#0A192F",
        lightBg: "#EEEEEE",
        lightText: "#0F172A",
        darkText: "#F8F8F2",
        lightSubText: "#334155",
        darkSubText: "#94A3B8",

        accentPrimLight: "#7C3AED",
        accentPrimDark: "#C084FC",
        accentSecLight: "#14B8A6",
        accentSecDark: "#5EEAD4",
      },

      keyframes: {
        float: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
        dangle: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(6deg)" },
          "40%": { transform: "rotate(-5deg)" },
          "60%": { transform: "rotate(3deg)" },
          "80%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 10s ease-in-out infinite",
        dangle: "dangle 1.6s ease-in-out",
        jump: "jump 0.4s ease-in-out",
        "scroll-on-hover": "scroll 20s linear infinite",
        spinOnce: "spinOnce 0.6s ease-in-out",
      },
      
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 6px rgba(168, 85, 247, 0.7)", // soft purple glow
        },
      });
    }),
  ],
};
