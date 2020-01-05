import React, { Component } from 'react';
import SEO from '../../../components/seo';
import Layout from '../../../components/layout';
import AnimaLink from '../../../components/AnimaLink';
import AOS from 'aos';
import Bottom from '../../../components/wwd/bottom';
import DPE from '../../../components/wwd/design/dpe';
import CasesSlider from '../../../components/wwd/casesSlider';
import ScrollToTop from '../../../components/scrollToTop';
import back from '../../../images/back.svg';
import top from '../../../images/wwd/design/top.png';
import figureLogoDes from '../../../images/wwd/design/logo.svg';
import './des.scss';

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
        <SEO title="Design" keywords={['gatsby', 'application', 'react']} />
        <div className="wwd-page wwd-design">
          <div className="container">
            <div className="wwd-page__title">
              <AnimaLink to="/what-we-do" back>
                <img src={back} alt="" />
              </AnimaLink>
              <h1>
                <span>Design</span>
              </h1>
            </div>
            <div className="wwd-page__top">
              <p>
                By identifying and understanding the essence and core values of
                your brand, we create your unique identity.
              </p>
              <AnimaLink className="btn" to="/contact">
                Free Consultation
              </AnimaLink>
            </div>
          </div>
          <div className="wwd-design__bg">
            <div className="wwd-design__bg-wrapper">
              <img
                src={top}
                alt=""
                style={{ opacity: this.state.topLoad }}
                onLoad={this.topShow.bind(this)}
              />
              <ul>
                <li>
                  <span>Brainstorm</span>
                </li>
                <li>
                  <span>Organize</span>
                </li>
                <li>
                  <span>Design</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="wwd-design__wedo">
              <h2>Design services we offer</h2>
              <div
                className="wwd-design__wedo-item"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4>Web UI/UX Design</h4>
                <figure
                  style={{ backgroundImage: 'url("' + figureLogoDes + '")' }}
                />
                <p>
                  Дизайн сайта — это то, что в первую очередь видит пользователь
                  заходя на веб-ресурс. В этот момент происходит оценка Вашей
                  компании и сравнение её с конкурентами. Исходя из дизайна
                  сайта, у пользователя складывается впечатление об уровне
                  компании
                </p>
              </div>
              <div
                className="wwd-design__wedo-item"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4>Brand Identity</h4>
                <figure
                  style={{ backgroundImage: 'url("' + figureLogoDes + '")' }}
                />
                <p>
                  Увидев Ваш логотип человек должен мгновенно запомнить его и
                  узнать при следующий встрече. Логотип обязан вызвать у людей
                  доверие, восхищение и преданность.
                </p>
              </div>
              <div
                className="wwd-design__wedo-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h4>Graphic Design</h4>
                <figure
                  style={{ backgroundImage: 'url("' + figureLogoDes + '")' }}
                />
                <p>
                  Разработка фирменного стиля необходима для создания
                  индивидуального и запоминающегося образ компании.
                </p>
              </div>
            </div>
          </div>
          <DPE />
          <div className="wwd-design__cases">
            <h2>Our Cases</h2>
            <CasesSlider />
          </div>
          <Bottom />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
