import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import AOS from 'aos';
import Bottom from '../../../components/wwd/bottom';
import ScrollToTop from '../../../components/scrollToTop';
import back from '../../../images/back.svg';
import top from '../../../images/wwd/qa-testing/bg-main.png';
import icons from '../../../images/wwd/qa-testing/what-do-you-get';
import devices from '../../../images/wwd/qa-testing/devices';
import UsedToolsIcons from '../../../images/wwd/qa-testing/used-tools/icons';
import bgItems from '../../../images/wwd/qa-testing/used-tools/bg-items';
import './qa-testing.scss';

export default class index extends Component {
	constructor(props) {
		super(props);
		this.plates = [];
		this.bgElementsNodesEven = [];
		this.bgElementsNodesOdd = [];
	}

  state = {
    topLoad: 0,
  };

	mouseFollow = (e) => {
		let xPos, yPos;

		if (window.innerWidth > 830) {
			xPos = e.clientX / window.innerWidth - 0.5;
			yPos = e.clientY / window.innerHeight - 0.5;

			TweenMax.to(this.bgElementsNodesEven, 1, {
				x: xPos * 50,
				y: yPos * 50,
				ease: Power1.easeOut
			});

			TweenMax.to(this.bgElementsNodesOdd, 1, {
				x: xPos * -50,
				y: yPos * -50,
				ease: Power1.easeOut
			});
		}
	}

  topShow() {
    this.setState({ topLoad: 1 });
  }

  componentDidMount() {
    AOS.init();

		document.addEventListener('mousemove', this.mouseFollow);

		this.plates.map((plate, index) => {
			plate.addEventListener('mouseover', e => {
				if (
					e.target.getAttribute('aria-current') === 'page' ||
					e.target.parentElement.getAttribute('aria-current') === 'page'
				) {
					return;
				}

				TweenMax.to(plate, 0.5, {
					scale: 1.1,
					boxShadow: '0px 0px 35px rgba(0, 0, 0, 1)',
				});

				plate.addEventListener('mousemove', e => {
					if (
						e.target.getAttribute('aria-current') === 'page' ||
						e.target.parentElement.getAttribute('aria-current') === 'page'
					) {
						return;
					}

					let dx = e.offsetX,
						dy = e.offsetY,
						dsx = plate.offsetHeight / 2,
						dsy = plate.offsetWidth / 2,
						xPos = dx - dsx,
						yPos = dy - dsy;

					TweenMax.to(plate, 0.3, {
						rotationX: -yPos / 10,
						rotationY: xPos / 10,
						transformPerspective: 1000,
						ease: Power1.easeOut,
					});
				});

				plate.addEventListener('mouseleave', () => {
					if (
						e.target.getAttribute('aria-current') === 'page' ||
						e.target.parentElement.getAttribute('aria-current') === 'page'
					) {
						return;
					}

					TweenMax.to(plate, 0.5, {
						scale: 1,
						rotationY: 0,
						rotationX: 0,
						boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.35)',
						ease: Power1.easeOut,
						clearProps: 'all',
					});
				});
			});
		});
  }

  componentDidUpdate() {
    AOS.refresh();
  }

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.mouseFollow);

		this.bgElementsNodesEven.map((elem) => {
			TweenMax.killChildTweensOf(elem);
		});
	}

  render() {
    return (
      <Layout footer="true">
        <SEO
          title="Dedicated Team"
          keywords={['gatsby', 'application', 'react']}
        />
        <div className="wwd-page wwd-qa-testing">
          <div className="container">
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>QA Testing</span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>Native apps for startups and enterprises.</p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-qa-testing__bg">
            <div className="wwd-qa-testing__bg-wrapper">
              <img
                src={top}
                alt=""
                style={{ opacity: this.state.topLoad }}
                onLoad={this.topShow.bind(this)}
              />
              <div className="container">
                <div className="wwd-mobile__platform-os">
                  <div className="wwd-webdev__app-item">
                    <h4>Software testing services</h4>
                    <p>
                      Incode Group offers its independent testing services to help businesses get more with less. Our experts will conduct QA and testing with no downtime while your in-house team works on releases. We also account for load times and add more resources whenever the peaks hit. And, of course, we will accompany your project through the whole lifecycle to ensure quality at all points. Our experts handle software testing services and adapt easily to peak loads, expanding their resources to match the workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
					<div className="wwd-page__bottom">
						<h2>Our offers</h2>
						<div className="container">
							<div className="wwd-page__bottom-wrapper">
								<div className="wwd-page__item" ref={div => (this.plates[0] = div)}>
									<div className="wwd-page__item-wrapper">
										<h3>Mobile app testing</h3>
									</div>
								</div>
								<div className="wwd-page__item" ref={div => (this.plates[1] = div)}>
									<div className="wwd-page__item-wrapper">
										<h3>Front-end testing</h3>
									</div>
								</div>
								<div className="wwd-page__item" ref={div => (this.plates[2] = div)}>
									<div className="wwd-page__item-wrapper">
										<h3>Back-end testing</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
          <div className="wwd-qa-testing__what-do-you-get">
          		<h2>
          			What do you get
          		</h2>
          		<ul>
          			<li>
									<div className="wwd-qa-testing__what-do-you-get-img">
										<img 
		          				src={icons.test} 
		          				alt=""                   
		          				data-aos="zoom-in-up"
		                  data-aos-once="true"
		                  data-aos-duration="700" 
	                  />
									</div>
          				<div className="wwd-qa-testing__what-do-you-get-content">
          					<h5>
          						Independent testing services
          					</h5>
          					<p>
          						You don’t want the results of the testing to be biased or inaccurate, which means sometimes you have to resort to independent tests. We will take a deeper look to verify the integrity of the project.
          					</p>
          				</div>
          			</li>
          			<li>
	          			<div className="wwd-qa-testing__what-do-you-get-img">
	          				<img 
	          					src={icons.gear} 
	          					alt="" 
		          				data-aos="zoom-in-down"
		                  data-aos-once="true"
		                  data-aos-duration="700"
	          				/>
	          				</div>
          				<div className="wwd-qa-testing__what-do-you-get-content">
          					<h5>
          						full-cycle qa 
          					</h5>
          					<p>
          						Our team tracks the project from the start to finish, taking care of documentation creating and testing the final functionality of the program. With both manual and automated QA, you can rest assured that all bases are covered.
          					</p>
          				</div>
          			</li>
          			<li>
          				<div className="wwd-qa-testing__what-do-you-get-img">
	          				<img 
	          					src={icons.sheet} 
	          					alt="" 
		          				data-aos="zoom-in-left"
		                  data-aos-once="true"
		                  data-aos-duration="700"
	          				/>
          				</div>
          				<div className="wwd-qa-testing__what-do-you-get-content">
          					<h5>
          						CTFL/CTAL compliant
          					</h5>
          					<p>
          						We train our testing team to follow CTFL/CTAL standards so they get certified and use cutting-edge technologies to test the results.
          					</p>
          				</div>
          			</li>
          			<li>
          				<div className="wwd-qa-testing__what-do-you-get-img">
	          				<img 
	          					src={icons.trees} 
	          					alt="" 
		          				data-aos="zoom-in-right"
		                  data-aos-once="true"
		                  data-aos-duration="700"
	          				/>
          				</div>
          				<div className="wwd-qa-testing__what-do-you-get-content">
          					<h5>
          						Testing environments
          					</h5>
          					<p>
          						We provide our own testing environments to test your products on. Alternatively, we can create one from scratch to fit your project.
          					</p>
          				</div>
          			</li>
          		</ul>
          </div>
          <div className="wwd-qa-testing__devices">
						<div className="wwd-qa-testing__devices-imgs">
							<img 
        				src={devices.mcbook} 
        				alt=""                   
        				data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="700" 
              />
      				<img 
        				src={devices.tablet} 
        				alt=""                   
        				data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="700"
                data-aos-delay="300" 
              />
      				<img 
        				src={devices.mobile} 
        				alt=""                   
        				data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="700" 
                data-aos-delay="600"
              />
						</div>
						<div className="wwd-qa-testing__devices-text">
							<h2>
								Real device testing
							</h2>
							<p>
								We run your solution on a variety of real devices that we select based on manufacturer, operating system, and popularity in your market
							</p>
						</div>
          </div>
          <div className="wwd-qa-testing__quality-criteria">
          	<div className="container">
          		<h2>
          			Product quality criteria 
          		</h2>
          		<p>
          			we assess how good a web and mobile applications we dewelope is in accordence with these eight dimensions of product quality
          		</p>
          		<ul>
          			<li>
          				<h4>
          					Functionality
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Reliability
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Stability
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Efficiensy
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Maintainability
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Usability
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Security
          				</h4>
          			</li>
          			<li>
          				<h4>
          					Compatibility
          				</h4>
          			</li>
          		</ul>
          	</div>
          </div>
          <div className="wwd-qa-testing__used-tools">
	          <div className="container">
							<div className="wwd-qa-testing__used-tools-wrapper">
								<div className="wwd-qa-testing__used-tools-content">
									<h2>
										Used tools
									</h2>
									<p>
										Web presence is a powerful tool to deliver business value and enhance performance. Our team blends mature development techniques and robust innovations to provide an exceptional user experience. 
									</p>
								</div>
								<ul className="wwd-qa-testing__used-tools-icons">
									<li>
										<UsedToolsIcons.jmeter />
									</li>
									<li>
										<UsedToolsIcons.postman />
									</li>
									<li>
										<UsedToolsIcons.selenium />
									</li>
								</ul>
							</div>
	          </div>
						<div className="wwd-qa-testing__used-tools-bg">
							{bgItems.map((img, index) => {
								return (
									<img
										ref={(img) => (index%2 === 0 ? this.bgElementsNodesEven[index] = img : this.bgElementsNodesOdd[index] = img)}
										className={'wwd-qa-testing__used-tools-bg-' + (index + 1)}
										src={img}
										key={index}
										alt=""
									/>
								);
							})}
						</div>
          </div>
          <Bottom />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
