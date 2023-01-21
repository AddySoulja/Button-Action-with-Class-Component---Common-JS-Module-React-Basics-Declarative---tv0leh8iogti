import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShown: true
		}

	};

	render() {
		return (
			<div id="main">
				<button
					id="click"
					type="button"
					onClick={() => this.setState({ isShown: !this.state.isShown })}
				>Show Para</button>
				{this.state.isShown && <p id="para">{`Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`}</p>}
			</div>
		);
	}
}


export default App;

