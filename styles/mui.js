import { blue, green, orange } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export let theme = createMuiTheme({
	palette: {
		primary: {
			main: "rgba(0, 27, 122, 0.84)",
		},
		secondary: {
			main: "#ffffff",
		},
	},
});
theme = responsiveFontSizes(theme);
