import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { vw, vh } from "../state/atom";

const Index = () => {
	const [w, setw] = useRecoilState(vw);
	const [h, seth] = useRecoilState(vh);

	useEffect(() => {
		console.log("setting");
		let x = window.innerWidth;
		let y = window.innerHeight;
		setw(x);
		seth(y);
		console.log("set to " + x, "   ", y);
	}, []);
	return (
		<div className="Index">
			<Head>
				<title>Home</title>
			</Head>
			<div className="IndexLogo">
				<div className="IndexLogoContainer"></div>
			</div>
			<div className="IndexAnimatedDiv">
				<div className="top"></div>
				<div className="mid"></div>
				<div className="bottom"></div>
			</div>
			<div className="IndexShortContent">
				<div
					style={{ alignSelf: "flex-start", marginBottom: "5vh" }}
					className="AboutPostTitle"
				>
					<Typography variant="h2">Learn Language</Typography>
				</div>
				<div className="AboutPostDescription" style={{ padding: "10%" }}>
					<Typography variant="body1">
						Learn language is best international school, where you can learn
						languages
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Index;
