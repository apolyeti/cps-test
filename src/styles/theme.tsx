import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			secondary: "#fff",
			primary: "#fff",
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"Oxygen, Ubuntu, Ubuntu-L, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "#201c24",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;