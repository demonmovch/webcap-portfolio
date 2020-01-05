import React, { Component } from 'react';
import AOS from 'aos';
import './dpe.scss';

export default class dpe extends Component {
	componentDidMount() {
		AOS.init();
	}

	componentDidUpdate() {
		AOS.refresh();
	}
	render() {
		return (
			<div className="wwd-design__dpe">
				<h2>Design process explained</h2>

				<div className="wwd-design__dpe-grid">
					<div className="wwd-design__dpe-item">
						<div
							className="wwd-design__dpe-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>1. Hello</h4>
							<p>
								At this stage, we get to know our client and their project. We discuss our client’s
								backstory, the idea behind their product, the product’s basic features, product
								positioning, target audience, and desired results.
							</p>
						</div>
					</div>
					<div className="wwd-design__dpe-item">
						<div
							className="wwd-design__dpe-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>2. Research</h4>
							<p>
								We carefully study project documentation, talk more to our client, and conduct thorough
								market and competitor research. We gather and organize all possible information that may
								be needed when building the product.
							</p>
						</div>
					</div>
					<div className="wwd-design__dpe-item">
						<div
							className="wwd-design__dpe-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>3. Sketching</h4>
							<p>
								We search for and prepare UI references and create moodboards. The client then gives
								their feedback as to what they like and what they want to change so we know which way to
								go. After that, we create the very first concepts. Usually these are one or two screens
								demonstrating some of the app’s UI and functionality.
							</p>
						</div>
					</div>
					<div className="wwd-design__dpe-item">
						<div
							className="wwd-design__dpe-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>4. Designing UI</h4>
							<p>
								Now we design the actual UI. We draw screens and create animated prototypes to mimic
								user interactions and demonstrate the app’s logic. This way, our client can test the
								interface before the actual app is developed.
							</p>
						</div>
					</div>
					<div className="wwd-design__dpe-item">
						<div
							className="wwd-design__dpe-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>5. Delivery</h4>
							<p>
								At the very end, the whole UI, approved by a client, is uploaded to a project folder in
								Zeplin for further collaboration with developers.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
