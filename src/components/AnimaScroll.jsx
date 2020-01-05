import React, { Component } from 'react';
import { TweenMax, TimelineMax, Power0 } from 'gsap/TweenMax';

export default class AnimaScroll extends Component {
	constructor(props) {
		super(props);
		if (typeof navigator !== 'undefined') {
			this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		}
		this.appear = this.appear.bind(this);
		this.scrollType = this.scrollType.bind(this);
		this.animaType = this.animaType.bind(this);
		this.init = this.init.bind(this);
		this.tween = new TimelineMax();
	}

	state = {
		elOffset: undefined,
		duration: this.props.duration ? this.props.duration : 2,
		appearFunc1: {
			opacity: 1,
			ease: Power0.easeNone
		},
		appearFunc2: {
			opacity: 1,
			ease: Power0.easeNone
		},
		shift: typeof window !== 'undefined' ? window.innerWidth / 2 : '',
		bounce: this.props.bounce ? this.props.bounce : 0,
		lock: true
	};

	appear() {
		this.tween
			.to(this.instance, this.state.duration, this.state.appearFunc1)
			.to(this.instance, this.state.duration, this.state.appearFunc2);
	}

	scrollType() {
		if (!this.isFirefox) {
			if (typeof window !== 'undefined') {
				window.onmousewheel = (e) => {
					window.webcap = {
						pageY: e.pageY + window.innerWidth / 2
					};
				};
			}
		} else {
			if (typeof window !== 'undefined') {
				window.onscroll = (e) => {
					window.webcap = {
						pageY: 100
					};
				};
			}
		}
	}

	animaType() {
		switch (true) {
			case this.props.left:
				TweenMax.set(this.instance, {
					opacity: 0,
					x: -this.state.shift
				});

				this.setState({
					appearFunc1: {
						opacity: 1,
						x: this.state.bounce,
						ease: Power0.easeNone
					},
					appearFunc2: {
						opacity: 1,
						x: 0,
						ease: Power0.easeNone
					}
				});

				break;

			case this.props.right:
				TweenMax.set(this.instance, {
					opacity: 0,
					x: this.state.shift
				});

				this.setState({
					appearFunc1: {
						opacity: 1,
						x: 0,
						ease: Power0.easeNone
					},
					appearFunc2: {
						opacity: 1,
						x: -this.state.bounce,
						ease: Power0.easeNone
					}
				});
				break;

			case this.props.down:
				TweenMax.set(this.instance, {
					opacity: 0,
					y: this.state.shift / 2
				});

				this.setState({
					appearFunc1: {
						opacity: 1,
						y: -this.state.bounce,
						ease: Power0.easeNone
					},
					appearFunc2: {
						opacity: 1,
						y: 0,
						ease: Power0.easeNone
					}
				});
				break;

			default:
				TweenMax.set(this.instance, {
					opacity: 0
				});
				break;
		}
	}

	init() {
		if (typeof window !== 'undefined') {
			if (window.pageYOffset + window.innerHeight > this.state.elOffset) {
				this.appear();
				this.setState({
					lock: false
				});
			}
		}
	}

	componentDidMount() {
		this.scrollType();
		this.animaType();

		setTimeout(() => {
			this.setState(
				{
					elOffset: this.instance.offsetTop
				},
				() => {
					this.init();
				}
			);
		}, 1000);

		document.addEventListener('scroll', () => {
			if (typeof window !== 'undefined') {
				if (window.webcap.pageY - window.innerHeight / 2 > this.state.elOffset && this.state.lock) {
					this.appear();
					this.setState({
						lock: false
					});
				}
			}
		});
	}

	render() {
		return (
			<div className={this.props.className} ref={(div) => (this.instance = div)}>
				{this.props.children}
			</div>
		);
	}
}
