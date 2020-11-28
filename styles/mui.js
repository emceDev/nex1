import { blue, green, orange } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const paleta = {};

export let theme = createMuiTheme({
	palette: {
		primary: orange,
	},
	Button: {
		palette: {
			primary: green,
		},
	},
});
theme = responsiveFontSizes(theme);
