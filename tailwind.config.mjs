/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#34343b',
				secondary: '#2C303C',			
				skin: '#f0bf6c',
				card: '#3c3f42',
			  },
			  animation: {
				shine: "shine 1s",
			  },
			  keyframes: {
				shine: {
				  "100%": { left: "125%" },
				},
			  },
		},
	},
	plugins: [],
}