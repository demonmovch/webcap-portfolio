import React, { Component } from 'react';
import AnimaLink from '../AnimaLink';
import BackNext from '../../components/BackNext';
import design from '../../images/about/design.png';
import devops from '../../images/about/devops.png';
import mobileApp from '../../images/about/mobile-app.png';
import qa from '../../images/about/qa.png';
import seo from '../../images/about/seo.png';
import webDevelopment from '../../images/about/web-development.png';

import './work.scss';

export default class Work extends Component {
  render() {
    return (
      <div className="about__work">
        <h3
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="500"
        >
          Our main objectives
        </h3>
        <div className="about__work-grid">
          <ul>
            <li style={{ backgroundImage: `url(${design})` }}>
              <div>
                <h4>Design</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/design">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
            <li style={{ backgroundImage: `url(${webDevelopment})` }}>
              <div>
                <h4>Web Development</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/development">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
            <li style={{ backgroundImage: `url(${mobileApp})` }}>
              <div>
                <h4>Mobile App</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/mobile">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
            <li style={{ backgroundImage: `url(${qa})` }}>
              <div>
                <h4>QA</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/qa-testing">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
            <li style={{ backgroundImage: `url(${devops})` }}>
              <div>
                <h4>DevOps</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/devops">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
            <li style={{ backgroundImage: `url(${seo})` }}>
              <div>
                <h4>SEO</h4>
                <p>
                  We use a variety of tools in our work. Our company is trying
                  to design all user interfaces with UI / UX designers. We
                  understand how important user interaction is and how we can
                  communicate with clients leading a customer in the correct
                  manner and way.
                </p>
              </div>
              <AnimaLink to="/what-we-do/seo">
                Let’s discuss <BackNext />
              </AnimaLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
