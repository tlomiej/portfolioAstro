/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        astroMainColor: "#4D8B31",
        astroLinkIconColor: "#4D8B31", // gray-400
        astroSecondColor: "#FFC800",
        astroMainTextColor: "white",
        astroDemoLinkColor: "#FF8427",
        astroSecondTextColor: "#475569",
        astroMainDarkTextColor: "#1e293b",
        astroBackground: "smokewhite",

        astroDarkMainColor: "white",
        astroDarkSecondColor: "#625973",
        astroDarkMainTextColor: "white",
        astroDarkLinkIconColor: "white", // gray-400
        astroDarkDemoLinkColor: "white",
        astroDarkSecondTextColor: "white",
        astroDarkMainDarkTextColor: "white",
        astroDarkBackground: "black",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-demo": "wave 1s linear",
      },
    },
  },

  plugins: [],
};
