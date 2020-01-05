import React, { Component } from 'react';
import logo from '../images/logo-color.svg';

export default class scrollToTop extends Component {

	scrollToTopButton = React.createRef();
	flag = false;

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

	disableOpacity = () => {
		this.scrollToTopButton.current.style.display = 'none';
		this.scrollToTopButton.current.classList.remove('scrollToTop-opacity-0');
		this.scrollToTopButton.current.removeEventListener('transitionend', this.disableOpacity);
	}

  scrollAppear = () => {
    if (window.pageYOffset > window.innerHeight && !this.flag) {
			this.scrollToTopButton.current.style.display = 'block';
    	this.scrollToTopButton.current.classList.add('scrollToTop-opacity-0');

    	window.requestAnimationFrame(() => {
	    	window.requestAnimationFrame(() => {
	    		this.scrollToTopButton.current.classList.remove('scrollToTop-opacity-0');
	    	});    		
    	});
   	
    	this.flag = true;    
    } else if(window.pageYOffset < window.innerHeight && this.flag) {
    	this.scrollToTopButton.current.classList.add('scrollToTop-opacity-0');
    	this.scrollToTopButton.current.addEventListener('transitionend', this.disableOpacity);
      this.flag = false;
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.scrollAppear);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollAppear);
  }

  render() {
    return (
      <button
        className="scrollToTop"
        onClick={this.scrollToTop}
        ref={this.scrollToTopButton}
      >
        <div className="scrollToTop-img">
          <img src={logo} alt="" />
        </div>
        <span>Up</span>
      </button>
    );
  }
}
