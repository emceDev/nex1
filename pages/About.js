import { Post } from "../components/Post";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import text from "../Text/AboutText.json";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";
import { vh, vw } from "../state/atom";

function About({ json }) {
	const [lang, setlang] = useRecoilState(language);
	const [txt, settxt] = useState(text.eng);
	const [w, setw] = useRecoilState(vw);
	const [h, seth] = useRecoilState(vh);
	useEffect(() => {
		lang ? settxt(text.pl) : settxt(text.eng);
	}, [lang]);
	return (
		<div className="About">
			<div className="Background"></div>
			<Head>
				<title>{txt.Head}</title>
			</Head>
			{txt.Posts.map((x) => {
				return <Post x={x} w={w} h={h} />;
			})}
		</div>
	);
}

export default About;
