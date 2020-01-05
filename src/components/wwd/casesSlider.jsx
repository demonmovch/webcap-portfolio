import React, { Component } from 'react';
import Slider from 'react-slick';
import AnimaLink from '../AnimaLink';
import BackNext from '../BackNext';
import './casesSlide.scss';

import logoMock from '../../images/logo.png';
import mock from '../../images/urlbox.png';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<button className={className} style={{ ...style }} onClick={onClick}>
			<BackNext />
			<span>Next</span>
		</button>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<button className={className} style={{ ...style }} onClick={onClick}>
			<span>Prev</span>
			<BackNext />
		</button>
	);
}

export default class casesSlider extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: '0' + 1,
		lengthSlides: 0
	};

	currentSlide(oldIndex, newIndex) {
		this.setState({
			currentSlide: '0' + parseInt(newIndex + 1)
		});
	}

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
			lengthSlides: this.slider1.props.children.length
		});
	}

	render() {
		return (
			<div className="wwd-cases">
				<h3>{this.state.currentSlide}</h3>
				<div className="wwd-cases__art" />
				<Slider
					className="wwd-cases__content"
					asNavFor={this.state.nav2}
					ref={(slider) => (this.slider1 = slider)}
					infinite={false}
					slidesToShow={1}
					slidesToScroll={1}
					nextArrow={<NextArrow />}
					prevArrow={<PrevArrow />}
				>
					<div className="wwd-cases__i">
						<h4>Название кейса1</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur.
						</p>
						<AnimaLink className="btn" to="/">
							About Project
						</AnimaLink>
					</div>
					<div className="wwd-cases__i">
						<h4>Название кейса2</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur.
						</p>
						<AnimaLink className="btn" to="/">
							About Project
						</AnimaLink>
					</div>
					<div className="wwd-cases__i">
						<h4>Название кейса3</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur.
						</p>
						<AnimaLink className="btn" to="/">
							About Project
						</AnimaLink>
					</div>
					<div className="wwd-cases__i">
						<h4>Название кейса4</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur.
						</p>
						<AnimaLink className="btn" to="/">
							About Project
						</AnimaLink>
					</div>
				</Slider>
				<Slider
					className="wwd-cases__images"
					asNavFor={this.state.nav1}
					ref={(slider) => (this.slider2 = slider)}
					infinite={false}
					slidesToShow={1}
					slidesToScroll={1}
					arrows={false}
					beforeChange={this.currentSlide.bind(this)}
				>
					<div className="wwd-cases__im">
						<img src={mock} alt="" />
					</div>
					<div className="wwd-cases__im">
						<img src={logoMock} alt="" />
					</div>
					<div className="wwd-cases__im">
						<img src={mock} alt="" />
					</div>
					<div className="wwd-cases__im">
						<img src={logoMock} alt="" />
					</div>
				</Slider>
				<div className="wwd-cases__count">
					<span className="wwd-cases__count--current">{this.state.currentSlide}</span>
					<span className="wwd-cases__count--length">/ {'0' + this.state.lengthSlides}</span>
				</div>
			</div>
		);
	}
}
