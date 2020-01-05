import React, { Component } from 'react';
import Slider from 'react-slick';
import './approach.scss';

export default class approachSlider extends Component {
	state = {
		currentSlide: '0' + 1,
		slickSettings: {
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			beforeChange: this.currentSlide,
			customPaging: (i) => <button>{'0' + parseInt(i + 1)}</button>
		}
	};

	currentSlide = (oldIndex, newIndex) => {
		this.setState({
			currentSlide: '0' + parseInt(newIndex + 1)
		});
	}

	render() {
		return (
			<div className="wwd-webdev__approach-slider__wrapper">
				<h3>{this.state.currentSlide}</h3>
				<Slider
					className="wwd-webdev__approach-slider"
					{...this.state.slickSettings}
				>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
					<div className="wwd-webdev__approach-item">
						<main>
							<h4>Discover and estimate</h4>
							<p>
								We listen to your vision of the product, and then find the best solution. Your
								suggestions are always welcomed. We discuss with you everything we have discovered until
								every detail will be agreed on.
							</p>
						</main>
						<ul>
							<li>Project estimation</li>
							<li>Development of a technical specification</li>
						</ul>
					</div>
				</Slider>
			</div>
		);
	}
}
