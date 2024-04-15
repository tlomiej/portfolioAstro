/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  customColorFooter: 'rgb(255, 248, 123)',
			},
		  },
	},
	plugins: [],
}
