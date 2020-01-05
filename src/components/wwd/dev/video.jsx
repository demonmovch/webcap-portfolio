import React, { Component } from 'react';

export default class Video extends Component {

	videoRef = null;

	playVideo = (e) => {
		if (window.pageYOffset > this.videoRef.offsetTop / 2) {
			this.videoRef.play();
			window.removeEventListener('scroll', this.playVideo);
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.playVideo); 
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.playVideo); 
	}

	render() {
		return (
			<video ref={(node) => { this.videoRef = node }} src="/img/video.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		);
	}
}
