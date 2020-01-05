import React, { Component } from 'react';
import AnimaLink from './AnimaLink';
import './tcp.scss';
import top from '../images/tcp_top.svg';
import bottom from '../images/tcp_bottom.svg';

export default class TCP extends Component {
	render() {
		return (
			<div className={'tcp ' + this.props.className} style={{ backgroundColor: this.props.bg }}>
				<img className="tcp-top" src={top} alt="" />
				<img className="tcp-bottom" src={bottom} alt="" />
				<div className="container">{this.props.children}</div>
				<div className="tcp-connect">
					<h1>Have a question?</h1>
					<AnimaLink className="btn" to="/contact">
						contact us
					</AnimaLink>
				</div>
			</div>
		);
	}
}
