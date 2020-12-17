import Image from "next/image";
import { Typography } from "@material-ui/core";
import { transform } from "typescript";
import { useState } from "react";
export const Post = (props) => {
	// const [c, setc] = useState(0);
	// function observe(e) {
	// 	if (c === 0) {
	// 		let x = e.target.parentElement.parentElement.nextSibling;
	// 		x.animate(
	// 			[{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
	// 			{
	// 				duration: 2000,
	// 			}
	// 		);
	// 		x.style.transform = "translateY(100%)";
	// 	}
	// 	setc(1);
	// }
	return (
		<div className="AboutPost" key={props.x.id}>
			<div className="AboutPostCol1">
				<div className="AboutPostTitle">
					<Typography variant="h3">{props.x.title}</Typography>
				</div>
				<div
					className="AboutPostDescription"
					// onTouchStartCapture={(e) => {
					// 	observe(e);
					// }}
				>
					<Typography variant="body1">{props.x.description}</Typography>
				</div>
			</div>

			<div
				className="AboutPostImageContainer"
				onTouchStart={(e) => {
					observe(e);
				}}
			>
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
