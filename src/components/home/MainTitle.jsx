import React, { Component } from 'react';

import './MainTitle.scss';

const textAnima = (text) => {
	let wordsArr = text.split(' ');

	let lettersArr = wordsArr.map((letter, index) => {
		let byLetter = letter.split('').map((letters, index) => {
			let delay = {
				transitionDelay: '.' + index + 's'
			};
			return (
				<span key={index} style={delay}>
					{letters}
				</span>
			);
		});
		return <h1 key={index}>{byLetter}</h1>;
	});

	return lettersArr;
};

export default class MainTitle extends Component {
	state = {
		anima: undefined
	};

	componentDidMount() {
		setTimeout(
			function() {
				this.setState({ anima: 'enter' });
			}.bind(this),
			0
		);
	}

	componentWillUnmount() {
		this.setState({
			anima: 'leave'
		});
	}

	render() {
		return <div className={'main-title ' + this.state.anima}>{textAnima(this.props.children)}</div>;
	}
}
