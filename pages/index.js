import { Typography } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
const Index = () => {
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
			</div>
		</div>
	);
};

export default Index;
