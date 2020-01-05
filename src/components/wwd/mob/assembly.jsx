import React, { Component } from 'react';
import img1 from '../../../images/wwd/mob/assembly/1.svg';
import img2 from '../../../images/wwd/mob/assembly/2.svg';
import img3 from '../../../images/wwd/mob/assembly/3.svg';
import img4 from '../../../images/wwd/mob/assembly/4.svg';
import img5 from '../../../images/wwd/mob/assembly/5.svg';
import img6 from '../../../images/wwd/mob/assembly/6.svg';
import img7 from '../../../images/wwd/mob/assembly/7.svg';

import './assambly.scss';

export const images = [ img1, img2, img3, img4, img5, img6, img7 ];

export default class assembly extends Component {
	state = {
		show: false,
		element: React.createRef()
	};

	appear(e) {
		if (window.pageYOffset >= this.state.element.current.offsetTop - window.innerHeight / 3) {
			this.setState({
				show: true
			});
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.appear.bind(this));
	}

	render() {
		return (
			<div className="assembly" ref={this.state.element}>
				{images.map((image, index) => {
					return (
						<img
							className={this.state.show ? 'show' : ''}
							key={index}
							src={image}
							style={{ transitionDelay: '.' + index + 's' }}
							alt=""
						/>
					);
				})}
			</div>
		);
	}
}
