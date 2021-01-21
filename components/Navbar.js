import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { Language } from "./Language";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export const Navbar = () => {
	const [lang, setlang] = useRecoilState(language);

	return (
		<div className="Navbar">
			<Language />
			<Link href="/">
				<Button color="secondary">
					<a>{lang ? "Główna" : "Home"}</a>
				</Button>
			</Link>
			<Link href="/Gallery">
				<Button color="secondary">
					<a>{lang ? "Galeria" : "Gallery"}</a>
				</Button>
			</Link>
			<Link href="/About">
				<Button color="secondary">
					<a>{lang ? "O nas" : "About us"}</a>
				</Button>
			</Link>
			<Link href="/Sign">
				<Button color="secondary">
					<a>{lang ? "Zapisz" : "Register"}</a>
				</Button>
			</Link>
			<Link href="/Offer">
				<Button color="secondary">
					<a>{lang ? "Oferta" : "Offer"}</a>
				</Button>
			</Link>
		</div>
	);
};
