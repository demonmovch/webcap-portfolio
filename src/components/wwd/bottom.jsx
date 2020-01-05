import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import AnimaLink from '../AnimaLink';
import Share from '../share';
import LogosRow from '../LogosRow';
import './bottom.scss';

export default class bottom extends Component {
  constructor(props) {
    super(props);
    this.plates = [];
  }

  state = {
    init: '',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        init: '_init',
      });

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
    }, 1000);
  }
  render() {
    return (
      <div className="wwd-page__bottom">
        <h2>See all our services</h2>
        <div className="container">
          <div className="wwd-page__bottom-wrapper">
            <div className="wwd-page__item" ref={div => (this.plates[0] = div)}>
              <AnimaLink
                to="/what-we-do/design"
                className="wwd-page__item-wrapper"
              >
                <h3>Design</h3>
              </AnimaLink>
            </div>
            <div className="wwd-page__item" ref={div => (this.plates[1] = div)}>
              <AnimaLink
                to="/what-we-do/development"
                className="wwd-page__item-wrapper"
              >
                <h3>Web Development</h3>
              </AnimaLink>
            </div>
            <div className="wwd-page__item" ref={div => (this.plates[2] = div)}>
              <AnimaLink
                to="/what-we-do/mobile"
                className="wwd-page__item-wrapper"
              >
                <h3>Mobile app</h3>
              </AnimaLink>
            </div>
            <div className="wwd-page__item" ref={div => (this.plates[3] = div)}>
              <AnimaLink
                to="/what-we-do/qa-testing"
                className="wwd-page__item-wrapper"
              >
                <h3>QA</h3>
              </AnimaLink>
            </div>
            <div className="wwd-page__item" ref={div => (this.plates[4] = div)}>
              <AnimaLink
                to="/what-we-do/devops"
                className="wwd-page__item-wrapper"
              >
                <h3>DevOps</h3>
              </AnimaLink>
            </div>
            <div className="wwd-page__item" ref={div => (this.plates[5] = div)}>
              <AnimaLink
                to="/what-we-do/seo"
                className="wwd-page__item-wrapper"
              >
                <h3>SEO</h3>
              </AnimaLink>
            </div>
          </div>
        </div>
        <div className="container">{/*<Share />*/}</div>
        <div className="wwd-page__enjoy">
          <LogosRow />
          <strong>
            Enjoy our
            <br />
            work ?
          </strong>
          <AnimaLink to="/contact" className="btn">
            Discuss my project
          </AnimaLink>
        </div>
      </div>
    );
  }
}
