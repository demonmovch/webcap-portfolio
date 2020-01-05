import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import SEO from '../components/seo';
import Layout from '../components/layout';
import MainTitle from '../components/home/MainTitle';
import BgElements from '../components/BgElements';
import LogoBig from '../images/home_el_1.svg';
import AnimaLink from '../components/AnimaLink';
import BackNext from '../components/BackNext';
import './home.scss';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.fmBlock = null;
    this.popup = null;
  }

  state = {
    mount: undefined,
  };

  mouseFollow = e => {
    let xPos;

    if (window.innerWidth > 800) {
      xPos = e.clientX / window.innerWidth - 0.5;
    } else {
      xPos = e.gamma / window.innerWidth - 0.2;
    }

    TweenMax.to(this.fmBlock, 1, {
      x: xPos * 50,
      ease: Power1.easeOut,
    });
  };

  popupOpen = () => {
    this.popup.style.opacity = 0;
    this.popup.style.display = 'block';

    setTimeout(() => {
      this.popup.style.opacity = 1;
    }, 10);
  };

  popupClose() {
    this.popup.style.opacity = 0;

    setTimeout(() => {
      this.popup.style.display = 'none';
    }, 300);
  }

  escClose(e) {
    if (e.key === 'Escape') {
      this.popupClose();
    }
  }

  misClick(e) {
    if (e.target === this.popup || e.target.parentNode === this.popup) {
      return;
    }

    if (e.target === this.bgEl) {
      this.popupClose();
    }
  }

  componentDidMount() {
    this.popup = document.querySelector('.home__popup');
    this.bgEl = document.querySelector('.bg-el');

    document.addEventListener('mousemove', this.mouseFollow);
    window.addEventListener('deviceorientation', this.mouseFollow);

    setTimeout(
      function() {
        this.setState({ mount: 'enter' });
      }.bind(this),
      2000
    );
    document.addEventListener('keyup', this.escClose.bind(this));
    document.addEventListener('click', this.misClick.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseFollow);
    document.removeEventListener('keyup', this.escClose.bind(this));
    document.removeEventListener('click', this.misClick.bind(this));
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div className="home page m100h">
          <div id="homedes" className={'home-des_1 ' + this.state.mount} />
          <img className="home__logo-big" src={LogoBig} alt="" />
          <BgElements />
          <div className="container" ref={div => (this.fmBlock = div)}>
            <MainTitle>GROWING BUSINESSES BIT&nbsp;BY&nbsp;BIT</MainTitle>
            <AnimaLink className="btn" to="/contact">
              Free Consultation
            </AnimaLink>
          </div>
          <p>© {new Date().getFullYear()} WebCap Studio</p>
          <button onClick={this.popupOpen}>More info</button>
          <div className="home__popup">
            <button onClick={this.popupClose}>
              <BackNext />
            </button>
            <h3>Let’s Create a Stunning Digital Experience</h3>
            <p>
              We’re the web agency that other companies hire to solve their
              toughest problems and to create the most elegant and immersive
              websites and mobile solutions. We are also not some company that
              uses cookie-cutter web designs and recycled code. Each project is
              a blank canvas to us and we take the time to not only learn about
              your design needs but also your company and the needs of your
              industry. We believe great solutions are built with careful
              planning, beautiful design, and cutting-edge technology. When your
              company stands out, your potential customers will be more likely
              to chose you over your competitors.
            </p>
            <h3>Turn your idea into a cutting-edge mobile app</h3>
            <p>
              Are you looking for the best app development company for your
              brand or business? Our team of designers and technicians has
              helped many businesses research, prototype and deploy custom apps
              to every major smartphone store. We take custom software
              development projects very seriously and have the knowledge to
              guide you through each stage of the mobile applications lifecycle.
              From gathering requirements, providing prototypes, to product
              release and continuous maintenance, WebCap is here to help bring
              your best ideas to life!
            </p>
            <h3>One Stop Shop, Full-Stack Development From A To Z</h3>
            <p>
              Webcap Studio is an exclusive team who takes pride in every job we
              agree to take on. High-quality code is our top priority, and we
              believe that it should be yours too! Our team of 20+ senior and
              middle developers are subject matter experts (SME’s) on deploying
              front-end, back-end, databases, DevOps and mobile app development.
              Don't need to develop a full web or mobile application? Let our
              team of experts create a stunning SEO friendly website, to help
              grow your digital presence and allow your business to stand out
              from the competition!
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}
