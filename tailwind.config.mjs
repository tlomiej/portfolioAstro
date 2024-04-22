/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        astroMainColor: "#827191",
        astroSecondColor: "#625973",
        astroMainTextColor: "white",
        astroLinkIconColor: "#827191", // gray-400
        astroDemoLinkColor: "#7D1D3F",
        astroSecondTextColor: "#475569",
        astroMainDarkTextColor: "#1e293b",
        astroBackground: "smokewhite",

        astroDarkMainColor: "white",
        astroDarkSecondColor: "#625973",
        astroDarkMainTextColor: "white",
        astroDarkLinkIconColor: "#827191", // gray-400
        astroDarkDemoLinkColor: "#7D1D3F",
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
