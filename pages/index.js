import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { scroll } from "../state/atom";

const Index = () => {
	const [sc, setscroll] = useRecoilState(scroll);

	return (
		<div className="Index">
			<Head>
				<title>Home</title>
			</Head>
			<div className="Background"></div>
			<div className="IndexLogo">
				<div
					className="IndexLogoContainer"
					style={{ transform: "translateY(" + sc * 0.2 + "px)" }}
				></div>
			</div>
			<div className="IndexAnimatedDiv">
				<div className="top"></div>
				<div className="mid"></div>
				<div className="bottom"></div>
			</div>
			<div
				className="IndexShortContent"
				style={{ transform: "translateY(-" + sc * 0.5 + "px)" }}
			>
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
