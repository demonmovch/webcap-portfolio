import React, { Component } from 'react';
import AnimaLink from './AnimaLink';
import './footer.scss';

import fb from '../images/share/fb.svg';
import tw from '../images/share/tw.svg';
import pi from '../images/share/pi.svg';
import li from '../images/share/li.svg';

import Logo from '../images/Logo.svg';

export default class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <AnimaLink to="/" back>
            <img src={Logo} alt="" />
          </AnimaLink>
          <nav>
            <div className="footer-col">
              <h4>WHAT WE DO</h4>
              <ul>
                <li>
                  <AnimaLink to="/what-we-do/qa-testing">QA</AnimaLink>
                </li>
                <li>
                  <AnimaLink to="/what-we-do/mobile">Mobile App</AnimaLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <AnimaLink to="/what-we-do/design">Design</AnimaLink>
                </li>
                <li>
                  <AnimaLink to="/what-we-do/development">
                    Web Development
                  </AnimaLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <AnimaLink to="/what-we-do/devops/">DevOps</AnimaLink>
                </li>
                <li>
                  <AnimaLink to="/what-we-do/seo/">SEO</AnimaLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  <AnimaLink to="/about">About Us</AnimaLink>
                </li>
                <li>
                  <AnimaLink to="/portfolio">Portfolio</AnimaLink>
                </li>
              </ul>
            </div>
          </nav>

          <div className="footer-social">
            <h4>Follow us</h4>
            <ul>
              <li>
                <a href="#">
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tw} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pi} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={li} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bt">
          <div className="footer-bt__links">
            <AnimaLink to="/terms-and-conditions">
              Terms And Conditions
            </AnimaLink>
            <AnimaLink to="/privacy-policy">Privacy Policy</AnimaLink>
          </div>
          <p>© {new Date().getFullYear()} WebCap Studio</p>
        </div>
      </footer>
    );
  }
}
