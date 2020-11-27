import React from "react";
import Head from "next/head";
import text from "../components/data.json";
export default function Offer() {
	return (
		<div>
			<Head>
				<title>{text.Offer.title}</title>
			</Head>
			<p>{text.Offer.content}</p>
		</div>
	);
}
