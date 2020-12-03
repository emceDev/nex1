import { blue, green, orange } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export let theme = createMuiTheme({
	palette: {
		primary: {
			main: "#235789",
		},
		secondary: {
			main: "#F7F0F0",
		},
		background: {
			paper: "red",
		},
	},
	typography: {
		fontFamily: "",
		button: {
			fontWeight: "bold",
		},
		body1: {},
	},
});
theme = responsiveFontSizes(theme);
