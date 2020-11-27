import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import "../pages/global.css";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
	return (
		<div className="App">
			<RecoilRoot>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</RecoilRoot>
		</div>
	);
}

export default MyApp;
