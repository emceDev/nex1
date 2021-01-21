import React, { useEffect, useState } from "react";
import Head from "next/head";
import text from "../Text/OfferText.json";
import { Typography } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export default function Offer() {
	const [lang, setlang] = useRecoilState(language);

	const [txt, settxt] = useState(text.eng);
	useEffect(() => {
		lang ? settxt(text.pl) : settxt(text.eng);
	}, [lang]);
	return (
		<div className="Offer">
			<div className="Background"></div>
			<Head>
				<title>{console.log(txt.title)}</title>
			</Head>
			<Typography variant="h3">{txt.title}</Typography>
			<ul style={{ marginTop: "5vh", marginBottom: "50vh" }}>
				{txt.list.map((x) => (
					<div>
						<Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
							{x.title}
						</Typography>
						<div style={{ marginLeft: "5%", fontWeight: "normal" }}>
							{x.description}
						</div>
					</div>
				))}
			</ul>
		</div>
	);
}
