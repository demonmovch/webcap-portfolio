import React, { Component } from 'react';
import Logo from '../images/Logo.svg';
import AnimaLink from './AnimaLink';
import './header.scss';

export default class Header extends Component {
	state = {
		openMenu: false,
	};
	
	render() {
		return (
			<header className="header">
				<div className="header__left">
					<AnimaLink to="/" back>
						<img src={Logo} alt="" />
					</AnimaLink>
				</div>
				<div
					className={'header__collapse ' + (this.state.openMenu ? 'show' : '')}
				>
					<ul className="header__middle">
						<li>
							<AnimaLink className="header__can-hover" to="/what-we-do">
								What we do
							</AnimaLink>
						</li>
						<li>
							<AnimaLink className="header__can-hover" to="/portfolio">
								Portfolio
							</AnimaLink>
						</li>
						<li>
							<AnimaLink className="header__can-hover" to="/about">
								About us
							</AnimaLink>
						</li>
						<li>
							<AnimaLink className="header__can-hover" to="/our-approach">
								Our approach
							</AnimaLink>
						</li>
					</ul>
					<div className="header__right">
						<AnimaLink className="header__can-hover" to="/contact">
							Contact us
						</AnimaLink>
					</div>
				</div>
				<button
					className={this.state.openMenu ? 'show' : ''}
					onClick={() => {
						this.setState({ openMenu: !this.state.openMenu });
					}}
				>
					<span />
					<span />
					<span />
				</button>
			</header>
		);
	}
}
