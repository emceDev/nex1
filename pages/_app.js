import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import "../pages/global.css";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/mui";
import { ThemeProvider } from "@material-ui/core";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
	return (
		<div className="App">
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
				<Footer />
			</RecoilRoot>
		</div>
	);
}

export default MyApp;
