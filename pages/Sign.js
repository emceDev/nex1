import { Button, Input, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { vw } from "../state/atom";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export const Sign = () => {
	const [filled, setfilled] = useState(false);
	const [button, setbutton] = useState(false);
	const [scroll, setscroll] = useState();

	const [lang, setlang] = useRecoilState(language);
	useEffect(() => {
		if (vw > 650) {
			window.addEventListener("scroll", () => {
				if (window.pageYOffset > scroll) {
					setscroll(window.pageYOffset);
				}
			});
		}
	}, []);
	return (
		<div className="Sign">
			<div className="SignImage" style={{ top: 300 - scroll + "px" }}>
				<div className="SignImageTint"></div>
			</div>
			<div className="Background"></div>
			<div className="SignQuoteImageContainer">
				<div
					className="SignQuoteContainer"
					style={{ transform: "translateY(" + scroll + "px)" }}
				>
					<div className="SignQuote">
						{lang ? (
							<div>U nas angielskiego nauczysz sie najlepiej </div>
						) : (
							<div>We are the most competent to teach you english</div>
						)}
					</div>
				</div>
			</div>
			<div className="SignFormImageContainer">
				<div className="SignFormImageContainerCol1">
					<p>Please fill in the form</p>
					<div
						className="SignInputContainer"
						onMouseOver={() => {
							setbutton(true);
						}}
					>
						<Input placeholder="Name"></Input>
						<Input placeholder="SurName"></Input>
						<Input placeholder="BirthDate"></Input>
						<Input placeholder="Comments"></Input>
					</div>
					{button ? (
						<Button
							color="secondary"
							onClick={() => {
								alert("Your form has been submitted");
							}}
						>
							Submit
						</Button>
					) : null}
				</div>
				<div className="SignFormImage"></div>
			</div>
		</div>
	);
};

export default Sign;
