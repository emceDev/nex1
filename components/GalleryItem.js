import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export default function GalleryItem(props) {
	const [lang, setlang] = useRecoilState(language);
	return (
		<div className="GalleryItem">
			<div className="GalleryImage">
				<Image
					className="GIImage"
					key={props.x.id}
					id={props.id}
					src={props.x.url}
					width={props.x.width}
					height={props.x.height}
					loader="cloudinary"
				/>
			</div>

			<div className="GIText">
				{props.x.context !== undefined ? (
					<Typography variant="h4">
						{lang ? props.x.context.custom.caption : props.x.context.custom.alt}
					</Typography>
				) : (
					"Adventure"
				)}
			</div>
		</div>
	);
}
