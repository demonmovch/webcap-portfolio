import React, { Component } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgElements from '../../components/BgElements';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import AnimaLink from '../../components/AnimaLink';
import { graphql } from 'gatsby';
import './wwd.scss';

export default class Wwd extends Component {

  plates = [];

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
          TweenMax.to(plate, 0.5, {
            scale: 1.1,
            boxShadow: '0px 0px 35px rgba(0, 0, 0, 1)',
          });

          plate.addEventListener('mousemove', e => {
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
      <Layout>
        <SEO title="What We Do" keywords={['gatsby', 'application', 'react']} />
        <div className="wwd">
          <BgElements />
          <div className="container">
            <div className="wwd-wrapper">
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[0] = div)}
              >
                <AnimaLink
                  to="/what-we-do/design"
                  className="wwd__item-wrapper"
                >
                  <h2>Design</h2>
                </AnimaLink>
              </div>
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[1] = div)}
              >
                <AnimaLink
                  to="/what-we-do/development"
                  className="wwd__item-wrapper"
                >
                  <h2>Web Development</h2>
                </AnimaLink>
              </div>
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[2] = div)}
              >
                <AnimaLink
                  to="/what-we-do/mobile"
                  className="wwd__item-wrapper"
                >
                  <h2>Mobile app</h2>
                </AnimaLink>
              </div>
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[3] = div)}
              >
                <AnimaLink to="/what-we-do/qa-testing" className="wwd__item-wrapper">
                  <h2>QA</h2>
                </AnimaLink>
              </div>
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[4] = div)}
              >
                <AnimaLink
                  to="/what-we-do/devops"
                  className="wwd__item-wrapper"
                >
                  <h2>DevOps</h2>
                </AnimaLink>
              </div>
              <div
                className={'wwd__item ' + this.state.init}
                ref={div => (this.plates[5] = div)}
              >
                <AnimaLink to="/what-we-do/seo" className="wwd__item-wrapper">
                  <h2>SEO</h2>
                </AnimaLink>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const IndexQuery = graphql`
  {
    allPlatesJson {
      edges {
        node {
          title
          img {
            hero
            left
            right
          }
          content {
            top {
              title
              text
            }
            bottom {
              title
              text
            }
          }
        }
      }
    }
  }
`;
