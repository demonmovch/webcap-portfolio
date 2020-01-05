import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import SEO from '../components/seo';
import Layout from '../components/layout';
import images from '../images/404';
import error404Img from '../images/404/bg-404.png';
import './404.scss';

const elementsArr = [images.img1, images.img2, images.img3];

export default class NotFoundPage extends Component {
  myElements = [];

  mouseFollow = e => {
    let xPos, yPos;

    if (window.innerWidth > 830) {
      xPos = e.clientX / window.innerWidth - 0.5;
      yPos = e.clientY / window.innerHeight - 0.5;

      TweenMax.to(this.myElements, 1, {
        x: xPos * 40,
        y: yPos * 40,
        ease: Power1.easeOut,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseFollow);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseFollow);
  }

  render() {
    return (
      <Layout>
        <SEO title="Page 404" />
        <div className="home page page404">
          <div className="bg-el-404">
            {elementsArr.map((img, index) => {
              return (
                <img
                  ref={img => (this.myElements[index] = img)}
                  className={'bg-el-404__' + (index + 1)}
                  src={img}
                  key={index}
                  alt="wierd element"
                />
              );
            })}
            <div className="error-404">
              <img src={error404Img} alt="error 404" />
              <p className="text1">OOPS!!! Error 404</p>
              <p className="text2">PAGE NOT FOUND</p>
              <a class="btn" href="/">
                HOME PAGE
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
