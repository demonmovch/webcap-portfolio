import React, { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import { Link, navigate } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class AnimaLink extends Component {
	render() {
		return (
			<AniLink fade to={this.props.to} className={this.props.className}>
				{this.props.children}
			</AniLink>
		);
	}
}
