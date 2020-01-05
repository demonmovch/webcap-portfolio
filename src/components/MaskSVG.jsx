import React, { Component } from 'react';

export default class MaskSVG extends Component {
	state = {
		id: Math.floor(Math.random() * 10000),
		init: 0
	};

	inided() {
		this.setState({ init: 1 });
	}

	render() {
		return (
			<svg
				width="500px"
				height="500px"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				className={this.props.className}
				style={{ transition: 'opacity .5s linear', opacity: this.state.init }}
			>
				<clipPath id="clipPathSVG">
					<polygon points="0 100,0 40, 100 0, 100 60" />>
				</clipPath>
				<image
					onLoad={this.inided.bind(this)}
					clipPath="url(#clipPathSVG)"
					x="0"
					y="0"
					width="100%"
					height="100%"
					preserveAspectRatio="xMidYMid slice"
					xlinkHref={this.props.src}
				/>
			</svg>
		);
	}
}