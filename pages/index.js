import { Typography } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { vw, vh } from "../state/atom";

const Index = () => {
	const [w, setw] = useRecoilState(vw);
	const [h, seth] = useRecoilState(vh);
	function setDimensions() {
		console.log("setting");
		let x = window.innerWidth;
		let y = window.innerHeight;
		setw(x);
		seth(y);
		console.log("set to " + x, "   ", y);
	}

	return (
		<div className="Index">
			<Head>
				<title>Home</title>
			</Head>
			<div className="Logo">
				<Image
					src="https://res.cloudinary.com/m4t1ce/image/upload/v1606406053/School/logo2_juajrz.webp"
					width={960}
					height={301}
					loader="cloudinary"
				/>
			</div>
			<div className="IndexBody">
				<Typography variant="h2">Learn Language</Typography>
				<Typography variant="body1">
					Learn language is best international school, where you can learn
					languages
				</Typography>
				<p style={{ color: "black" }}>asdsd</p>
			</div>
			{setDimensions()}
		</div>
	);
};

export default Index;
