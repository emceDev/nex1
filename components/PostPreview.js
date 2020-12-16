import Image from "next/image";
import { Typography } from "@material-ui/core";
export const PostPreview = (props) => {
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
				{props.x.src !== null ? (
					<img
						src={props.x.src}
						style={{ width: props.w / 4, height: props.h / 3 }}
					></img>
				) : null}

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
