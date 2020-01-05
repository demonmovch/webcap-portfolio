import React, { Component } from 'react';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import AOS from 'aos';
import Bottom from '../../../components/wwd/bottom';
import ScrollToTop from '../../../components/scrollToTop';
import back from '../../../images/back.svg';
import top from '../../../images/wwd/devops/bg-main.png';
import LogosRow from '../../../components/LogosRow';
import './devops.scss';
// images
import image1 from '../../../images/wwd/devops/1.png';
import image2 from '../../../images/wwd/devops/2.png';
import image3 from '../../../images/wwd/devops/3.png';
import image4 from '../../../images/wwd/devops/4.png';
import image5 from '../../../images/wwd/devops/5.png';
import image6 from '../../../images/wwd/devops/6.png';
import image7 from '../../../images/wwd/devops/7.png';
import image8 from '../../../images/wwd/devops/8.png';
import Des1 from '../../../images/wwd/devops/bg-top.svg';

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
          title="Cloud & DevOps"
          keywords={['gatsby', 'application', 'react']}
        />
        <div className="wwd-page wwd-devops">
          <div className="container">
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>Cloud & DevOps</span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>Native apps for startups and enterprises.</p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-devops__bg">
            <div className="wwd-devops__bg-wrapper">
              <img
                src={top}
                alt=""
                style={{ opacity: this.state.topLoad }}
                onLoad={this.topShow.bind(this)}
              />
              <div className="container">
                <div className="wwd-mobile__platform-os">
                  <div className="wwd-webdev__app-item">
                    <h4>Cloud & Devops</h4>
                    <p>
                      Cloud significantly accelerates the business’ response to
                      challenges like scalability and availability while
                      significantly optimizing cost. DevOps creates a
                      collaborative environment between developers and IT for
                      improved efficiency, reduced development lifecycles, and
                      faster time to market. Combined, these workflows
                      facilitate a seismic change in the cloud development
                      approach—business unit needs are met more quickly,
                      learnings are integrated more consistently, and costs from
                      testing to deployment are reduced dramatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wwd-devops__get">
            <img className="wwd-devops__get-img" src={Des1} alt="" />
            <LogosRow />
            <div className="container">
              <h2>What do you get</h2>
              <ul>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image1}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>DevOps transformation</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image2}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Continuous delivery</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image3}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Cloud Migration</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image4}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Platform Engineering</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image5}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Cloud Operation</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image6}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Microservices Architechture</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image7}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>Configurationa and Management</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="wwd-devops__get-img-wrapper">
                    <img
                      src={image8}
                      alt=""
                      data-aos="flip-left"
                      data-aos-once="true"
                    />
                  </div>
                  <div className="wwd-devops__get-text-wrapper">
                    <h6>DevOps Consultancy</h6>
                    <p>
                      Accelerate your Cloud adoption using automation and
                      everything-as-code to deliver security, stability and cost
                      optimisation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Bottom />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
