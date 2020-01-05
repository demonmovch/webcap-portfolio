import React, { Component } from 'react';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import Bottom from '../../../components/wwd/bottom';
import ScrollToTop from '../../../components/scrollToTop';
import ApproachSlider from '../../../components/wwd/dev/approachSlider';
import Video from '../../../components/wwd/dev/video';
import back from '../../../images/back.svg';
import Estimate from '../../../components/Estimate';
import tech from '../../../images/wwd/dev/tech.svg';
import Lara from '../../../images/wwd/dev/tech/laravel.inline.svg';
import Reactjs from '../../../images/wwd/dev/tech/reactjs.inline.svg';
import Angular from '../../../images/wwd/dev/tech/angular.inline.svg';
import Des1 from '../../../images/wwd/dev/bg-top.svg';
import './dev.scss';

export default class index extends Component {
  render() {
    return (
      <Layout footer="true">
        <SEO
          title="Web development"
          keywords={['gatsby', 'application', 'react']}
        />
        <div className="wwd-page wwd-webdev">
          <div className="container">
            <img className="wwd-webdev__img" src={Des1} alt="" />
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>
                  Web <br /> Development
                </span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>
                Web presence is a powerful tool to deliver business value and
                enhance performance. Our team blends mature development
                techniques and robust innovations to provide an exceptional user
                experience.
              </p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-webdev__video">
            <Video />
          </div>
          <Estimate title="Custom web app that will boost your business">
            <div className="wwd-webdev__app-item">
              <h4>Top-notch front-end</h4>
              <p>
                User-centric interface that is not only visually-appealing but
                also highly functional will highlight your product among
                competitors.
              </p>
            </div>
            <div className="wwd-webdev__app-item">
              <h4>Reliable back-end</h4>
              <p>
                Easy-to-maintain and crash-free back-end will increase customer
                retention.
              </p>
            </div>
            <div className="wwd-webdev__app-item">
              <h4>Dedicated team</h4>
              <p>We are always available and stay in touch with you.</p>
            </div>
            <div className="wwd-webdev__app-item">
              <h4>On-time delivery</h4>
              <p>
                Our team delivers the product on time and within the pre-agreed
                budget.
              </p>
            </div>
          </Estimate>
          <div className="wwd-webdev__approach">
            <h2>Our approach</h2>
            <ApproachSlider />
          </div>
          <div className="wwd-webdev__tech">
            <img src={tech} alt="" />
            <div className="container">
              <main>
                <h2>Core technologies we rely on in the web development</h2>
                <p>
                  Web presence is a powerful tool to deliver business value and
                  enhance performance. Our team blends mature development
                  techniques and robust innovations to provide an exceptional
                  user experience.
                </p>
              </main>
              <ul>
                <li>
                  <Lara />
                </li>
                <li>
                  <Reactjs />
                </li>
                <li>
                  <Angular />
                </li>
                <li>
                  <Lara />
                </li>
                <li>
                  <Reactjs />
                </li>
                <li>
                  <Angular />
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
