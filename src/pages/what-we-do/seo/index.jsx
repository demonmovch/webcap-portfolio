import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import AOS from 'aos';
import Estimate from '../../../components/Estimate';
import Bottom from '../../../components/wwd/bottom';
import Tabs from '../../../components/wwd/seo/Tabs';
import Faq from '../../../components/wwd/seo/Faq';
import ScrollToTop from '../../../components/scrollToTop';
import back from '../../../images/back.svg';
import seoImages from '../../../images/wwd/seo';
import './seo.scss';

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
        <div className="wwd-page wwd-seo">
          <div className="container">
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>SEO optimization</span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>
              	You have an amazing brand, but are your customers hearing your message? Search Engine Optimization is a necessity for any business to gain high site traffic, convert more customers and generate more revenue. Unfortunately, there is more to SEO than the calculation of keywords. Let our team at Webcap Studio conduct a competitive analysis, identify your target audience and apply proven strategies to optimize the content within each of your webpages. Need help with social media campaigns? Webcap is available to inject fresh ideas into your social media marketing (SMM) strategy.
              </p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-seo__analysis">
	          <div className="container">
	          	<div className="wwd-seo__analysis-wrapper">
			          <div className="wwd-seo__analysis-img">
			          	<h2>
			          		SEO Analysis
			          	</h2>
			          	<img 
			          		src={seoImages.smartphones} 
			          		alt="smartphones" 
			          		data-aos="zoom-in-down"
		                data-aos-once="true"
										data-aos-duration="1000"
			          	/>
			          </div>
			          <ul className="wwd-seo__analysis-content">
				          <li className="wwd-seo__analysis-content-item">
										<svg width="260" height="360" viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0L260 121.268V360H40L0 319.5V0Z" fill="#35206F"/>
										</svg>
										<img src={seoImages.chemical} alt="chemical" />
										<h6>
											Reliable Formula
										</h6>
										<p>
											Our SEO analytical expertise has allowed us to achieve thousands of first page rankings.
										</p>
				          </li>
				          <li className="wwd-seo__analysis-content-item">
										<svg width="260" height="360" viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0L260 121.268V360H40L0 319.5V0Z" fill="#35206F"/>
										</svg>	
										<img src={seoImages.barChart} alt="chemical" />	
										<h6>
											Continual Improvement
										</h6>
										<p>
											We identify key improvement areas and develop an action plan for you.
										</p>		          	
				          </li>
				          <li className="wwd-seo__analysis-content-item">
										<svg width="260" height="360" viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0L260 121.268V360H40L0 319.5V0Z" fill="#35206F"/>
										</svg>	
										<img src={seoImages.tie} alt="chemical" />	
										<h6>
											Experienced SEO Analysts
										</h6>
										<p>
											You can rest assured you are working with best in the industry.
										</p>		          	
				          </li>
				          <li className="wwd-seo__analysis-content-item">
										<svg width="260" height="360" viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0L260 121.268V360H40L0 319.5V0Z" fill="#35206F"/>
										</svg>
										<img src={seoImages.impressionRate} alt="chemical" />
										<h6>
											Grow Your Google Impressions
										</h6>
										<p>
											We analyze the factors that are preventing you from being easily discoverable via major search engines.
										</p>			          	
				          </li>	          	
			          </ul>   
		          </div>       	
	          </div>          	
          </div>
          <div className="wwd-seo__audit">
						<div className="container">
							<h2>
								Technical SEO Audit
							</h2>
							<ul className="wwd-seo__audit-wrapper">
								<li className="wwd-seo__audit-item">
									<h6>
										Unlock Your Website
									</h6>
									<p>
										SmartSites can conduct a thorough technical SEO audit to empower your website.
									</p>
								</li>
								<li className="wwd-seo__audit-item">
									<h6>
										The Key to Online Success
									</h6>
									<p>
										Today, having a user-friendly site with great search engine visibility is a must.
									</p>
								</li>
								<li className="wwd-seo__audit-item">
									<h6>
										Customized Audit
									</h6>
									<p>
										Our audits provide very clear instructions on the changes that need to be implemented to your site. We tailor the reports to best fit your needs.
									</p>
								</li>
								<li className="wwd-seo__audit-item">
									<h6>
										Uncover Hidden Issues
									</h6>
									<p>
										Our technical SEO audit services are necessary to uncover any potential issues which may be causing your site to underperform.
									</p>
								</li>
								<li className="wwd-seo__audit-item">
									<h6>
										Stellar Reviews & 5-Star Ratings
									</h6>
									<p>
										Your company’s online success is our number one priority.
									</p>
								</li>
								<li className="wwd-seo__audit-item">
									<h6>
										Proven Experience
									</h6>
									<p>
										We have a winning team of technical SEO specialists with over 10 years experience.
									</p>
								</li>
							</ul>
						</div>
          </div>
          <div className="wwd-seo__tabs">
						<div className="container">
							<Tabs>
								<div label="Local SEO">
								  Local SEO is a strategy to use keywords that are relevant to your local area, allowing you to target customers or promote products in your city or neighborhood.
								</div>
								<div label="National SEO">
								  If your business has grown and has enough recognition that you need to open more than one location, then National SEO is a strategy that is beneficial for your growth. While you can use local SEO strategies for single locations, a better way would be to create a sub-directory for each location. This encourages search engines to recognize the relationship between the different sites.
								</div>
							</Tabs>
						</div>
          </div>
          <div className="wwd-seo__ecommerce">
						<div className="container">
							<div className="wwd-seo__ecommerce-wrapper">
								<div className="wwd-seo__ecommerce-content">
									<h2>
										E-commerce SEO
									</h2>
									<p>
										If You Want To Expose Your Business To More Potential Customers, You Should Consider Ecommerce SEO
									</p>
									<ul className="wwd-seo__ecommerce-content-faq">
										<Faq question="What is e-commerce SEO?">
											There is a lot of competition on the internet today. That’s why you need an extra push to help you stand out from other businesses. The right keywords can attract the ideal types of customers to your company. If you have the relevant keywords for the relevant demographic, you can attract more organic customers. There is a lot of competition on the internet today. That’s why you need an extra push to help you stand out from other businesses. The right keywords can attract the ideal types of customers to your company. If you have the relevant keywords for the relevant demographic, you can attract more organic customers.
										</Faq>
										<Faq question="Why should I consider ecommerce SEO?">
											There is a lot of competition on the internet today. That’s why you need an extra push to help you stand out from other businesses. The right keywords can attract the ideal types of customers to your company. If you have the relevant keywords for the relevant demographic, you can attract more organic customers.
										</Faq>
										<Faq question="How can I find more relevant keywords?">
											There is a lot of competition on the internet today. That’s why you need an extra push to help you stand out from other businesses. The right keywords can attract the ideal types of customers to your company. If you have the relevant keywords for the relevant demographic, you can attract more organic customers.
										</Faq>
									</ul>
								</div>								
							</div>
						</div>
          </div>
          <Estimate 
          	title="Let's seo optimization"
          >
          	<p>
          		What's next? <br />
          		Sent us a message with a brief description of your project. Our expert team will review it and get back to you within one business day with free consultation and to discuss the next steps.
          	</p>
          </Estimate>
          <Bottom />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
