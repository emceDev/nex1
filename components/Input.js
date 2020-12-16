import React, { Component } from "react";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileInput = React.createRef();
	}
	handleSubmit(event) {
		event.preventDefault();
		// console.log("this.fileinpuit: ");
		// console.log(this.fileInput);
		this.props.cb(this.fileInput);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Prześlij plik:
					<input type="file" ref={this.fileInput} />
				</label>
				<br />
				<button type="submit">Wyślij</button>
			</form>
		);
	}
}

export default Input;
