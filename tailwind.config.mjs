/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        astroMainColor: "#827191",
        astroMainTextColor: "white",
		astroLinkIconColor: '#827191',// gray-400
		astroDemoLinkColor: "#7D1D3F"
      },
    },
  },
  plugins: [],
};
