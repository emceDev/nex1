import React from "react";
import Head from "next/head";
import text from "../components/data.json";
import { Typography } from "@material-ui/core";
export default function Offer() {
	return (
		<div className="Offer">
			<Head>
				<title>{text.Offer.title}</title>
			</Head>
			<Typography variant="h3">Oferta</Typography>
			<ul>
				<li>Wyżywienie </li>
				<li>Hardcoded txt</li>
				<li>Dodaj coś</li>
				<li>No clue what</li>
			</ul>
		</div>
	);
}
