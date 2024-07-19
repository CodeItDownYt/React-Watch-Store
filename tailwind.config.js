/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Mirza: ['"Mirza"', "serif"],
			Lora: ['"Lora"', "serif"],
		},
		extend: {
			colors: {
				primary: "#3D3A38",
				secondary: "#876B5E",
				placeholder: "#9C948E",
				indicator: "#A58C81",
				golden: "#F2B821",
				secondaryButton: "#a58c81",
				icons: "#BCBCBC",
			},
		},
	},
	plugins: [],
};
