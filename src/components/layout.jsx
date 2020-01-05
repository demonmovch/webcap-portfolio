import React, { Component } from 'react';
import Header from './header';
import AnimaLink from './AnimaLink';
import Footer from './footer';
import './layout.scss';

export default class layout extends Component {
	constructor(props) {
		super(props);
		this.cookieRef = React.createRef();
	}

	cookieAccept = () => {
		localStorage.setItem('cookie', true);
		this.cookieRef.current.style.opacity = 0;
		setTimeout(() => {
			this.cookieRef.current.style.display = 'none';
		}, 300);
	};

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', () => {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			});
		}
	}

	render() {
		return (
			<div className="layout">
				<Header />
				{this.props.children}
				<div
					className="cookie"
					ref={this.cookieRef}
					style={
						typeof window !== 'undefined'
							? localStorage.getItem('cookie')
								? { display: 'none' }
								: {}
							: {}
					}
				>
					<p>
						This website uses cookies to ensure you get the best experience on
						our website. <AnimaLink to="/privacy-policy">Learn more</AnimaLink>
					</p>
					<button onClick={this.cookieAccept}>AGREE</button>
				</div>
				{this.props.footer && <Footer />}
			</div>
		);
	}
}
