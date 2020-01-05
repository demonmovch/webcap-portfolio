import React, { Component } from 'react';
import SEO from '../../components/seo';
import HIW from '../../components/our-approach/hiw';
import Layout from '../../components/layout';
import AnimaLink from '../../components/AnimaLink';
import AOS from 'aos';
import Bottom from '../../components/wwd/bottom';
import LogosRow from '../../components/LogosRow';
import ScrollToTop from '../../components/scrollToTop';
import back from '../../images/back.svg';
import top from '../../images/our-approach/bg-main.png';
import Estimate from '../../components/Estimate';
import './our-approach.scss';

export default class index extends Component {
  state = {
    topLoad: 0,
  };

  topShow() {
    this.setState({ topLoad: 1 });
  }

  componentDidMount() {
    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <Layout footer="true">
        <SEO
          title="Dedicated Team"
          keywords={['gatsby', 'application', 'react']}
        />
        <div className="wwd-page wwd-dedicated-team">
          <div className="container">
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>Dedicated Team</span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>Native apps for startups and enterprises.</p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-dedicated-team__bg">
            <div className="wwd-dedicated-team__bg-wrapper">
              <img
                src={top}
                alt=""
                style={{ opacity: this.state.topLoad }}
                onLoad={this.topShow.bind(this)}
              />
              <div className="container">
                <div className="wwd-mobile__platform-os">
                  <div className="wwd-webdev__app-item">
                    <h4>Dedicated Development Team</h4>
                    <p>
                      Since 2002, we have built dedicated development teams and
                      R&D centers for some of the leading software companies
                      including Novell, OpenText and Lebara helping businesses
                      to innovate and implement digital transformations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HIW />
          <Estimate 
          	addClass="wwd-dedicated-team__estimate"
          	title="How it benefits you"
          >
						<div className="wwd-webdev__app-item">
							<p>
								You don’T have to spend time and money on searching for professionals and other issues associated with employment relations (trainings, office expenses etc.)
							</p>
						</div>
						<div className="wwd-webdev__app-item">
							<p>Developers know the specifics of your project(s) so they are contributors, not just contactors</p>
						</div>
						<div className="wwd-webdev__app-item">
							<p>You have full managment  control over team’s activities, scope of work and priorities</p>
						</div>
						<div className="wwd-webdev__app-item">
							<p>Our team delivers the product on time and within the pre-agreed budget.</p>
						</div>
						<div className="wwd-webdev__app-item">
							<p>You avoid troubles associated with numerous money transfers and you costs are fully predictable</p>
						</div>          	
          </Estimate>					
					<div className="wwd-dedicated-team__why-us">
						<div className="container">
							<div className="wwd-dedicated-team__why-us-content">
								<div className="wwd-dedicated-team__why-us-content-container">
									<h2>Why us</h2>
									<div className="wwd-webdev__app-item">
										<h5>
											Geographical and cultural proximity
										</h5>
										<p>
											Our development locations in Ukraine, Poland, Belarus, and Bulgaria a have close affinity with European countries and businesses and convenient flight connections with many destinations in Europe and North America. Moreover, ancient architecture, friendly people and local cuisine make visitors from Europe feel like home.
										</p>
									</div>
									<div className="wwd-webdev__app-item">
										<h5>
											High loyalty on the team
										</h5>
										<p>
											We can help you to build team loyalty, and maintain high level of motivation as you go through your project ensuring that you function as a team with your outsourced developers at N-iX. In many cases, the retention rate of N-iX dedicated teams is even higher than that of our clients’ in-house teams, which helps to keep knowledge about the product in the company.
										</p>
									</div>
									<div className="wwd-webdev__app-item">
										<h5>
											Technology and domain expertise
										</h5>
										<p>
											In our software development company solid business domain experience, broad technical expertise and quality-driven delivery model are combined to create innovative solutions. Our tech professionals  experienced in development of FinTech products, business intelligence solutions, complex web and mobile applications, high-load systems, embedded software, big data & data science analytics offer full-cycle services in the areas of software development and technology consulting.
										</p>
									</div>
									<div className="wwd-webdev__app-item">
										<h5>
											Quick and easy start
										</h5>
										<p>
											Our employer brand on the local IT outsourcing market and recruitment capabilities allow us to attract the best engineering talent for your development team.  Our development centers are located in Ukraine, Poland, Belarus, and Bulgaria – the countries hosting the majority of Europe’s skilled software developers, so there will be no problem in building your dedicated team of IT professionals.
										</p>
									</div>
									<AnimaLink to="/contact" className="btn">
										Free Consultation
									</AnimaLink>
								</div>
							</div>
						</div>
					</div>
          <LogosRow />
          <Bottom />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
