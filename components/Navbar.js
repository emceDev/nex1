import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { Language } from "./Language";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export const Navbar = () => {
	const [lang, setlang] = useRecoilState(language);

	return (
		<div className="Navbar">
			<AppBar position="static">
				<Toolbar>
					<Language />
					<Link href="/">
						<Button>
							<a>{lang ? "Główna" : "Home"}</a>
						</Button>
					</Link>
					<Link href="/Gallery">
						<Button variant="primary">
							<a>{lang ? "Galeria" : "Gallery"}</a>
						</Button>
					</Link>
					<Link href="/About">
						<Button variant="primary">
							<a>{lang ? "O nas" : "About us"}</a>
						</Button>
					</Link>
					<Link href="/Offer">
						<Button variant="primary">
							<a>{lang ? "Oferta" : "Offer"}</a>
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};
