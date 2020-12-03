import { Typography } from "@material-ui/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import text from "../Text/AboutText.json";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";
import Image from "next/image";
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
		<div className="AboutPost">
			<div className="AboutPostCol1">
				<div className="AboutPostTitle">
					<Typography variant="h3">Title</Typography>
				</div>
				<div className="AboutPostDescription">
					<Typography variant="body1">
						Descriptoimn Descripto imnDesc riptoim nDescriptoimn DescriptoimnDe
						scripto imnDescripto imnDescriptoimnDescrip toimnDescriptoimnDescrip
						toimnDescrip toimnDescri ptoimn Descripto imnDescr iptoim
						nDescriptoimn Descriptoimn Descripto imnDesc riptoim nDescriptoimn
						DescriptoimnDe scripto imnDescripto imnDescriptoimnDescrip
						toimnDescriptoimnDescrip toimnDescrip toimnDescri ptoimn Descripto
						imnDescr iptoim nDescriptoimn
					</Typography>
				</div>
			</div>

			<div className="AboutPostImageContainer">
				<Image
					className="AboutPostImage"
					key={1}
					id={2}
					src="https://res.cloudinary.com/demo/image/upload/q_60/sample.jpg"
					width={500}
					height={500}
					loader="cloudinary"
				/>
				<div style={{}} className="AboutPostImageTint"></div>
			</div>
		</div>
	);
};

// export async function getServerSideProps() {
// 	const res = await cloudinary.api.resources_by_tag(["SAbout"], {
// 		tags: true,
// 		context: "true",
// 		max_results: "3",
// 	});
// 	const json = JSON.stringify(res);
// 	return {
// 		props: {
// 			json: json,
// 		},
// 	};
// }

export default About;
