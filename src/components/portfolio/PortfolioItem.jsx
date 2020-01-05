import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Image from './image';
import LayoutImage from './LayoutImage';
import AnimaLink from '../../components/AnimaLink';
import Share from '../../components/share';
import ContactForm from '../ContactForm';
import LogosRow from '../LogosRow';
import ScrollToTop from '../scrollToTop';
import AOS from 'aos';
import BgLogo from '../../images/portfolio/bg-logo.svg';
import BackNext from '../../components/BackNext';
import './portfolioItem.scss';

export default class PortfolioItem extends Component {
	state = {
		nextPj: 0
	};

	componentDidMount() {
		this.props.data.allPortfolioJson.edges.map((slug, index) => {
			if (slug.node.slug === this.props.pathContext.slug) {
				if (index !== this.props.data.allPortfolioJson.edges.length - 1) {
					this.setState({
						nextPj: index + 1
					});
				}
			}
		});

		AOS.init();
	}

	componentDidUpdate() {
		AOS.refresh();
	}

	render() {
		return (
			<Layout footer="true">
				<SEO title={this.props.pathContext.title} keywords={[ 'gatsby', 'application', 'react' ]} />
				<ScrollToTop />
				<div
					className="portfolio__item hasFooter"
					style={{ backgroundColor: this.props.pathContext.color_theme }}
				>
					<img className="portfolio__item-bglogo" src={BgLogo} alt="" />
					<div className="container">
						<div className="portfolio__item-top">
							<div
								className="portfolio__item-top__text"
								data-aos="fade-up"
								data-aos-easing="ease-in"
								data-aos-duration="1000"
							>
								<AnimaLink back className="portfolio__item-back" to="/portfolio">
									<BackNext />
								</AnimaLink>
								<h1>{this.props.pathContext.title}</h1>
								<h3>
									<AnimaLink back className="portfolio__item-back" to="/portfolio">
										<BackNext />
									</AnimaLink>
									{this.props.pathContext.subtitle}
								</h3>
							</div>
							<div
								className="portfolio__item-top__logo"
								data-aos="fade"
								data-aos-easing="ease-in"
								data-aos-duration="2000"
							>
								<Image type="logo" data={this.props.pathContext} />
							</div>
						</div>
					</div>
					<div
						className="portfolio__item-banner"
						data-aos="fade-right"
						data-aos-easing="ease-in"
						data-aos-duration="1000"
					>
						<LayoutImage type="banner" data={this.props.pathContext} />
					</div>
					<div className="container">
						<div className="portfolio__item-desc">
							<div
								data-aos="fade-right"
								data-aos-easing="ease-in"
								data-aos-duration="500"
								data-aos-offset="380"
								data-aos-delay="100"
								className="portfolio__item-desc__text"
							>
								<h3>About</h3>
								<p>{this.props.pathContext.text.about}</p>
								<h3>Technologies</h3>
								<p>{this.props.pathContext.text.technologies}</p>
							</div>
							<ul
								className="list"
								data-aos="fade-up"
								data-aos-easing="ease-in"
								data-aos-duration="500"
								data-aos-offset="380"
								data-aos-delay="100"
							>
								{this.props.pathContext.text.list.map((item, index) => {
									return <li key={index}>{item}</li>;
								})}
							</ul>
						</div>
					</div>
					<div 
						className={`container ${this.props.pathContext.slug !== 'rx-photo' ? 'container_wide' : ''}`}
					>
						<div
							className="portfolio__item-main"
							data-aos="fade-up"
							data-aos-easing="ease-in"
							data-aos-duration="1000"
						>
							<LayoutImage type="main" data={this.props.pathContext} />
						</div>
					</div>
					<div className="container">
						<div className="portfolio__item-bt">
							<Share />
							<AnimaLink
								className="portfolio__item-nextpj"
								to={'/portfolio/' + this.props.data.allPortfolioJson.edges[this.state.nextPj].node.slug}
							>
								Next Project <BackNext />
							</AnimaLink>
						</div>
					</div>
					<div className="portfolio__item-enjoy">
						<LogosRow />
						<h1
							data-aos="zoom-in"
							data-aos-duration="1000"
							data-aos-once="true"
							data-aos-anchor-placement="top-center"
						>
							<span>Enjoy our</span>
							<span>work ?</span>
						</h1>
					</div>
					<ContactForm />
				</div>
			</Layout>
		);
	}
}

export const IndexQuery = graphql`
	{
		allPortfolioJson {
			edges {
				node {
					slug
				}
			}
		}
	}
`;
