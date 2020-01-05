import React, { Component } from 'react';
import { TweenMax, Power1 } from 'gsap/TweenMax';
import './BgElements.scss';

import elm1 from '../images/home_v-1.svg';
import elm2 from '../images/home_v-2.svg';
import elm3 from '../images/home_v-3.svg';
import elm4 from '../images/home_v-4.svg';
import elm5 from '../images/home_v-5.svg';
import elm6 from '../images/home_v-6.svg';

import RotationMatrixFromEuler from '../components/gimbal';

export const elementsArr = [elm1, elm2, elm3, elm4, elm5, elm6];

export default class BgElements extends Component {
  constructor(props) {
    super(props);
    this.myElements = [];
  }

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

    let matrixHelper = new RotationMatrixFromEuler(),
      finalMatrix;

    window.addEventListener('deviceorientation', e => {
      finalMatrix = matrixHelper.computeMatrix(e);

      if (finalMatrix != null) {
        TweenMax.to(this.myElements, 1, {
          x: finalMatrix[1] * -40,
          y: finalMatrix[8] * 40,
          ease: Power1.easeOut,
        });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseFollow);

    this.myElements.map(elem => {
      TweenMax.killChildTweensOf(elem);
    });
  }

  render() {
    return (
      <div className="bg-el">
        {elementsArr.map((img, index) => {
          return (
            <img
              ref={img => (this.myElements[index] = img)}
              className={'bg-el__' + (index + 1)}
              src={img}
              key={index}
              alt="wierd element"
            />
          );
        })}
      </div>
    );
  }
}
