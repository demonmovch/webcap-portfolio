import React, { Component } from 'react';
import Logo from '../images/logo-clear.svg';
import './logosDes.scss';

export default class LogosRow extends Component {
	logosDes(pos) {
		let rows = [];

		if (pos === 'down') {
			for (let i = 0; i < 4; i++) {
				rows.push(
					<img
						src={Logo}
						key={i}
						style={{ transform: 'rotate(180deg)' }}
						alt=""
					/>
				);
			}
		} else if (pos === 'up') {
			for (let i = 0; i < 4; i++) {
				rows.push(<img src={Logo} key={i} alt="" />);
			}
		}

		return rows;
	}

	render() {
		return (
			<div className="logos-des">
				<div className="up">{this.logosDes('up')}</div>
				<div className="down">{this.logosDes('down')}</div>
			</div>
		);
	}
}
