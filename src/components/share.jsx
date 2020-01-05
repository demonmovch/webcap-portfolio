import React, { Component } from 'react';
import fb from '../images/share/fb.svg';
import tw from '../images/share/tw.svg';
import pi from '../images/share/pi.svg';
import li from '../images/share/li.svg';

import './share.scss';

export default class share extends Component {
	facebook = () => {
		window.open(
			'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
			'mywindow',
			',resizable=1,width=500,height=250'
		);
	};

	twitter = () => {
		window.open(
			'https://twitter.com/intent/tweet?text=' + document.title + ' ' + window.location.href,
			'mywindow',
			',resizable=1,width=500,height=250'
		);
	};

	pinterest = () => {
		window.open(
			'http://pinterest.com/pin/create/button/?url=' + window.location.href + '&description=' + document.title,
			'mywindow',
			',resizable=1,width=500,height=250'
		);
	};

	linkedin = () => {
		window.open(
			'https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&title=' + document.title,
			'mywindow',
			',resizable=1,width=500,height=250'
		);
	};

	render() {
		return (
			<div className="share">
				<h3>
					Share<span>:</span>
				</h3>
				<ul>
					<li onClick={this.facebook}>
						<img src={fb} alt="" />
					</li>
					<li onClick={this.twitter}>
						<img src={tw} alt="" />
					</li>
					<li onClick={this.pinterest}>
						<img src={pi} alt="" />
					</li>
					<li onClick={this.linkedin}>
						<img src={li} alt="" />
					</li>
				</ul>
			</div>
		);
	}
}
