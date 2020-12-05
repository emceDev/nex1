import React, { useState, useEffect } from "react";
import Head from "next/head";
import cloudinary from "../config/cloudinary";
import GalleryItem from "../components/GalleryItem";

function Gallery({ json }) {
	const [viewportW, setviewportW] = useState("");
	const [viewportH, setviewportH] = useState("");

	useEffect(() => {
		setviewportW(window.innerWidth);
		setviewportH(window.innerHeight);
	}, []);
	return (
		<div className="GalleryPage">
			<Head>
				<title>Gallery</title>
			</Head>
			<div className="Background"></div>
			<div className="Gallery">
				{JSON.parse(json).resources.map((x) => {
					return <GalleryItem x={x} vw={viewportW} vh={viewportH} />;
				})}
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	const res = await cloudinary.api.resources_by_tag(["SGallery"], {
		tags: true,
		context: "true",
		max_results: "3",
	});
	const json = JSON.stringify(res);
	return {
		props: {
			json: json,
		},
	};
}
export default Gallery;
