import React, { Component } from 'react';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import Bottom from '../../../components/wwd/bottom';
import ScrollToTop from '../../../components/scrollToTop';
import Assembly from '../../../components/wwd/mob/assembly';
import AOS from 'aos';
import back from '../../../images/back.svg';
import './mob.scss';

import img1 from '../../../images/wwd/dev/1.svg';
import img2 from '../../../images/wwd/dev/2.svg';
import img3 from '../../../images/wwd/dev/3.svg';

export default class index extends Component {
	componentDidMount() {
		AOS.init();
	}

	componentDidUpdate() {
		AOS.refresh();
	}

	render() {
		return (
			<Layout footer="true">
				<SEO title="Web development" keywords={[ 'gatsby', 'application', 'react' ]} />
				<div className="wwd-page wwd-mobile">
					<div className="container">
						<div className="wwd-page__title">
							<AnimaLink to="/what-we-do" back>
								<img src={back} alt="" />
							</AnimaLink>
							<h1>
								<span>Mobile App</span>
							</h1>
						</div>
						<div className="wwd-page__top">
							<p>NATIVE APPS FOR STARTUPS AND ENTERPRISES</p>
							<AnimaLink className="btn" to="/contact">
								Free Consultation
							</AnimaLink>
						</div>
						<div className="wwd-mobile__platform">
							{/* <figure /> */}
							<div className="wwd-mobile__platform-img">
								<img src="" alt="" />
							</div>
							<div className="wwd-mobile__platform-os">
								<div className="wwd-webdev__app-item">
									<h4>iOs App Development</h4>
									<p>
										<span>
											Get access to the most powerful and consistent ecosystem on the mobile
											market. Start development of the iOS app. We power your iPhone apps with the
											best features and design approaches available on the market, allowing them
											to reach top positions in the Apple App Store.
										</span>
										<span>
											Developing an app for iOS platform is the right step if you want to maximise
											your monetization potential. Figures say that the average iPhone and iPad
											user makes 2 times more app purchases.
										</span>
									</p>
								</div>
								<div className="wwd-webdev__app-item">
									<h4>Android App Development</h4>
									<p>
										<span>
											Want to amaze customers and provide mobile access to your business? Jump
											start your mobile project with Android development! Deliver and promote your
											services to a wide audience.
										</span>
										<span>
											We know how to create scalable and crash-resistant Android apps that will
											show all the power of native application development.
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className="wwd-mobile__magic">
							<h3>How the magic happens</h3>
							<div className="wwd-mobile__magic--left">
								<div className="wwd-mobile__magic-item">
									<div
										className="wwd-mobile__magic-item__wrapper"
										data-aos="fade"
										data-aos-duration="1000"
										data-aos-offset="300"
									>
										<h4>Prototype</h4>
										<p>
											From sketching screens on paper to adding animations and interactions using
											Origami, Framer, Principle, and other prototyping apps, we design prototypes
											of your iOS apps from the ground up. Just approve our designs before we
											start implementing them.
										</p>
									</div>
								</div>
								<div className="wwd-mobile__magic-item">
									<div
										className="wwd-mobile__magic-item__wrapper"
										data-aos="fade"
										data-aos-duration="1000"
										data-aos-offset="300"
									>
										<h4>Code</h4>
										<p>
											When create iOS applications, we combine beautiful code with efficient
											software development processes to deliver results that meet both your
											expectations and the expectations of your customers.
										</p>
									</div>
								</div>
								<div className="wwd-mobile__magic-item">
									<div
										className="wwd-mobile__magic-item__wrapper"
										data-aos="fade"
										data-aos-duration="1000"
										data-aos-offset="300"
									>
										<h4>Deliver</h4>
										<p>
											By following a continuous delivery approach, we build products in short
											cycles to rapidly deliver business value. Continuous delivery helps us
											minimize the risks associated with product release, improves productivity,
											and brings transparency to our development processes.
										</p>
									</div>
								</div>
							</div>
							<div className="wwd-mobile__magic--right">
								<Assembly />
							</div>
						</div>
					</div>
					<div className="wwd-webdev__app">
						<div className="wwd-webdev__app--left">
							<h3>Lets build tour App!!!</h3>
							<p>
								What's next? Sent us a message with a brief description of your project. Our expert team
								will review it and get back to you within one business day with free consultation and to
								discuss the next steps.
							</p>
						</div>
						<div className="wwd-webdev__app--right">
							<figure className="--art1">
								<img src={img1} alt="" />
								<img src={img2} alt="" />
								<img src={img3} alt="" />
							</figure>
							<figure className="--art2" />
							<h4>Get an estimation</h4>
							<AnimaLink className="btn" to="/contact">
								LETS GO!
							</AnimaLink>
						</div>
					</div>
					<Bottom />
				</div>
				<ScrollToTop />
			</Layout>
		);
	}
}
