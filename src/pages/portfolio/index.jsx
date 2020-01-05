import React, { Component } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgElements from '../../components/BgElements';
import AnimaLink from '../../components/AnimaLink';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import { graphql } from 'gatsby';
import './portfolio.scss';

export default class Portfolio extends Component {
  plates = [];

  componentDidMount() {
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
  }

  render() {
    return (
      <Layout>
        <SEO title="Portfolio" keywords={['gatsby', 'application', 'react']} />
        <div className="portfolio hasFooter">
          <BgElements />
          <div className="container">
            <ul className="portfolio__list">
              {this.props.data.allPortfolioJson.edges.map((item, index) => {
                return (
                  <li key={index} ref={li => (this.plates[index] = li)}>
                    <AnimaLink to={'/portfolio/' + item.node.slug} key={index}>
                      <img
                        src={'/img/portfolio/' + item.node.slug + '/logo.png'}
                        alt=""
                      />
                      <h5>{item.node.subtitle}</h5>
                    </AnimaLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const IndexQuery = graphql`
  {
    allPortfolioJson {
      edges {
        node {
          slug
          title
          subtitle
          color_theme
          text {
            about
            technologies
            list
          }
        }
      }
    }
  }
`;
