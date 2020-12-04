import { Typography } from "@material-ui/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import text from "../Text/AboutText.json";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";
import Image from "next/image";
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
			<Head>
				<title>{txt.Head}</title>
			</Head>
			{txt.Posts.map((x) => {
				return <Post x={x} w={w} h={h} />;
			})}
		</div>
	);
}

export const Post = (props) => {
	return (
		<div className="AboutPost" key={props.x.id}>
			<div className="AboutPostCol1">
				<div className="AboutPostTitle">
					<Typography variant="h3">{props.x.title}</Typography>
				</div>
				<div className="AboutPostDescription">
					<Typography variant="body1">{props.x.description}</Typography>
				</div>
			</div>

			<div className="AboutPostImageContainer">
				<Image
					className="AboutPostImage"
					id={2}
					src={props.x.src}
					position="relative"
					width={props.w / 4}
					height={props.h / 3}
					layout="responsive"
					loader="cloudinary"
				/>
				<div
					style={{
						height: "52vh",
						maxWidth: "50vw",
						position: "relative",
						top: "-52vh",
					}}
					className="AboutPostImageTint"
				></div>
			</div>
		</div>
	);
};

export default About;
