import { Typography } from "@material-ui/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import text from "../Text/AboutText.json";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";
function About(props) {
	const [lang, setlang] = useRecoilState(language);
	const [txt, settxt] = useState(text.eng);

	useEffect(() => {
		console.log(lang);
		lang ? settxt(text.pl) : settxt(text.eng);
		console.log(txt);
	}, [lang]);
	return (
		<div className="About">
			<Head>
				<title>{txt.Head}</title>
			</Head>
			{txt.Posts.map((x) => {
				return <Post x={x} />;
			})}
		</div>
	);
}

export const Post = (props) => {
	return (
		<div>
			<Typography variant="h2">{props.x.title}</Typography>
			<Typography variant="body1">{props.x.description}</Typography>
		</div>
	);
};

export default About;
