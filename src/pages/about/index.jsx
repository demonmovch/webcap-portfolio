import React, { Component } from 'react';
import Slider from 'react-slick';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContactForm from '../../components/ContactForm';
import LogosRow from '../../components/LogosRow';
import MaskSVG from '../../components/MaskSVG';
import { graphql } from 'gatsby';
import ScrollToTop from '../../components/scrollToTop';
import AOS from 'aos';
import Work from '../../components/about/work';
// images
import Culture1 from '../../images/about/main/culture1.png';
import Culture2 from '../../images/about/main/culture2.png';
import Culture3 from '../../images/about/main/culture3.png';
import Culture4 from '../../images/about/main/culture4.png';
import video from '../../images/about/video.jpg';
import signature from '../../images/about/signature.png';
// styles
import './about.scss';

export default class About extends Component {
  textEl = React.createRef();

  componentDidMount() {
    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  handleClick = () => {
    this.textEl.current.classList.add('active');
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: dots => (
        <div style={{}}>
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <img
          src={
            this.props.data.clients.edges[i].node.childImageSharp.original.src
          }
          alt=""
        />
      ),
    };

    console.log(this.props.data);

    return (
      <Layout footer="true">
        <SEO title="About" keywords={['gatsby', 'application', 'react']} />
        <ScrollToTop />
        <div className="about hasFooter">
          <div className="container">
            <div className="about__top">
              <h1
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
              >
                {this.props.data.content.edges[0].node.title}
              </h1>
              <div className="about__top-img"></div>
              <div className="about__top-wrapper">
                <div
                  className="about__top-text"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.content.edges[0].node.text.top1,
                  }}
                />
                <div
                  className="about__top-text"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.content.edges[0].node.text.top2,
                  }}
                />
              </div>
            </div>
            <Work />
            <div className="about__culture">
              <LogosRow />
              <h2
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="500"
              >
                Culture
              </h2>
              <div className="about__culture-imgs">
                <div
                  data-aos="flip-left"
                  data-aos-once="true"
                  data-aos-duration="700"
                >
                  <MaskSVG src={Culture1} />
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-once="true"
                  data-aos-duration="700"
                >
                  <MaskSVG src={Culture2} />
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-once="true"
                  data-aos-duration="700"
                >
                  <MaskSVG src={Culture3} />
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-once="true"
                  data-aos-duration="700"
                >
                  <MaskSVG src={Culture4} />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="500"
                className="about__culture-text"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.content.edges[0].node.text.culture,
                }}
              />
            </div>
          </div>
          <div className="about__values">
            <div className="container">
              <h3>
                What values are the basis core <br /> and foundation of our
                company?
              </h3>
              <div className="about__values-wrapper">
                <p className="about__values-content" ref={this.textEl}>
                  Our company exists due to many values and principles that we
                  hold dear to us, to achieve a common goal and maximize our
                  work results. One of our main principles is that we exercise
                  “Family First” as a common rule, making us stand out from
                  other comparative web design companies. Professional activity
                  is the economic basis and foundation. Therefore, we understand
                  colleagues and try to help them with their difficulties if
                  they should so arise. We readily help each other and are all
                  working to achieve a common goal and result. <br /> Our
                  employees are responsible and concerned about their reputation
                  and image of the firm. <br /> More text More text More text
                  More text More text More text More text More text More text
                  More text More text More text More text More text More text
                  More text More text More text More text More text More text
                  More text More text More text More text More text More text
                  More text More text More text
                  <button onClick={this.handleClick}>READ MORE</button>
                </p>
                <div className="about__values-video">
                  <img src={video} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="about__clients-reviews">
              <h3>Clients Reviews</h3>
              <Slider {...settings}>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
                <div className="about__clients-reviews-slide">
                  <p className="brand">Apple Inc.</p>
                  <div className="about__clients-reviews-slide-content">
                    <blockquote>
                      Apple Inc. is an American multinational technology company
                      headquartered in Cupertino, California, that designs,
                      develops, and sells consumer electronics, computer
                      software, and online services. It is considered one of the
                      Big Four tech companies along with Amazon, Google, and
                      Facebook.
                    </blockquote>
                    <div>
                      <time>12.05.2019</time>
                      <img src={signature} alt="signature" />
                      <p className="author">Timothy Donald Cook, CEO </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <ContactForm />
          </div>
        </div>
      </Layout>
    );
  }
}

const styles = {
  display: 'flex',
  width: 76,
  height: 35,
  color: '#fff',
  fontWeight: 900,
  position: 'absolute',
  top: '75%',
  transform: 'translateY(-50%)',
  zIndex: 10,
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...styles,
        right: 0,
      }}
      onClick={onClick}
    >
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.359375 21.0081L3.17139 12.9828L5.92964 14.1101L4.44249 18.3555L17.2977 11.5052L4.44347 4.64767L5.92964 8.89003L3.17139 10.0172L0.359375 1.99193L2.39191 0L21.282 10.0783V12.9341L2.39191 23L0.359375 21.0081Z"
          fill="white"
        />
      </svg>
      Next
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...styles,
        right: 100,
      }}
      onClick={onClick}
    >
      Prev
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2813 1.99193L18.4692 10.0172L15.711 8.88985L17.1981 4.64449L4.34291 11.4948L17.1972 18.3523L15.711 14.11L18.4692 12.9828L21.2813 21.0081L19.2487 23L0.358647 12.9217L0.358648 10.0659L19.2487 -5.89974e-06L21.2813 1.99193Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export const IndexQuery = graphql`
  {
    clients: allFile(
      filter: {
        relativeDirectory: { eq: "about" }
        extension: { regex: "/(png)/" }
        name: { regex: "/slider-logo/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
    content: allAboutJson {
      edges {
        node {
          title
          text {
            top1
            top2
            work
            culture
          }
        }
      }
    }
  }
`;
