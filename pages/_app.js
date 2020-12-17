import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import "../pages/global.css";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/mui";
import { ThemeProvider } from "@material-ui/core";
import { ScrollHandler } from "../components/ScrollHandler";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<ScrollHandler />
			<div className="App">
				<div className="tinted-image"></div>

				<ThemeProvider theme={theme}>
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
				<Footer />
			</div>
		</RecoilRoot>
	);
}

export default MyApp;
