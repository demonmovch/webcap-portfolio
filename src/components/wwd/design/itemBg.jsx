import React, { Component } from 'react';

export default class itemBg extends Component {
	render() {
		return (
			<figure className="wwd-design__dpe-item__bg">
				<div className="wwd-design__dpe-item__bg-corner --tl" />
				<div className="wwd-design__dpe-item__bg-corner --tr" />
				<div className="wwd-design__dpe-item__bg-corner --bl" />
				<div className="wwd-design__dpe-item__bg-corner --br" />
				<div className="wwd-design__dpe-item__bg--fill" />
			</figure>
		);
	}
}
