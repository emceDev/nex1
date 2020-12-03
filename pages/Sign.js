import { Button, Input, Typography } from "@material-ui/core";
import { useState } from "react";
import React from "react";

export const Sign = () => {
	const [filled, setfilled] = useState(false);
	const [button, setbutton] = useState(false);
	function handleform(params) {}
	return (
		<div className="Sign">
			<div className="SignQuoteImageContainer">
				<div className="SignQuoteContainer">
					<div className="SignQuote">
						We are the most competent to teach you english
					</div>
				</div>
				<div className="SignImage">
					<div className="SignImageTint"></div>
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
