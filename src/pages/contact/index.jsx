import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContactForm from '../../components/ContactForm';
import Map from '../../components/contact/Map';
import './contact.scss';
// images
import LogoDes from '../../images/contact/logo-des.svg';
import ChatIcon from '../../images/contact/chat-icon.svg';
import Linkedin from '../../images/contact/social/in.png';
import Facebook from '../../images/contact/social/facebook.png';
import Skype from '../../images/contact/social/skype.png';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.contactWrapper = React.createRef();
	}

	state = {
		logosInit: 0,
		formCenter: {
			marginLeft: 0,
			opacity: 0
		}
	};

	desLogo() {
		let logos = [];
		for (let index = 0; index <= 2; index++) {
			logos.push(
				<img
					key={index}
					src={LogoDes}
					style={{ transitionDelay: index + 's', opacity: this.state.logosInit }}
					alt=""
				/>
			);
		}

		return logos;
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				logosInit: 1
			});
		}, 500);

		this.setState({
			formCenter: {
				marginLeft: 'calc(50% - ' + this.contactWrapper.current.offsetWidth / 4 + 'px)',
				opacity: 1
			}
		});

		window.onresize = () => {
			this.setState({
				formCenter: {
					marginLeft: 'calc(50% - ' + this.contactWrapper.current.offsetWidth / 4 + 'px)'
				}
			});
		};
	}

	render() {
		return (
			<Layout>
				<SEO title="Contact" keywords={[ 'gatsby', 'application', 'react' ]} />
				<div className="contact">
					<div className="contact__des-logo">{this.desLogo()}</div>
					<img className="contact__des-chat" src={ChatIcon} alt="" />
					<div className="contact-form__wrapper" ref={this.contactWrapper} style={this.state.formCenter}>
						<ContactForm />
					</div>
					<div className="contact__addresses">
						<Map styles={this.props.data.allMapStylesJson.edges} />
						<div className="contact__info">
							<div className="contact__info-wrapper">
								<address>
									<span>Poshtova St.3</span>
									<span>Zaporizhia </span>
									<span>Ukraine 01023</span>
								</address>
								<a href="mailto:sales@webcap.com">sales@webcap.com</a>

								<div className="contact-social _top">
									<ul>
										<li>
											<a href="https://www.linkedin.com/company/webcap-studio/">
												<img src={Linkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src={Facebook} alt="" />
											</a>
										</li>
										<li>
											<a href="skype:sales@webcap.biz?chat">
												<img src={Skype} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="contact-social _bottom">
						<ul>
							<li>
								<a href="https://www.linkedin.com/company/webcap-studio/">
									<img src={Linkedin} alt="" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={Facebook} alt="" />
								</a>
							</li>
							<li>
								<a href="skype:sales@webcap.biz?chat">
									<img src={Skype} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Layout>
		);
	}
}

export const IndexQuery = graphql`
	{
		allMapStylesJson {
			edges {
				node {
					elementType
					stylers {
						color
						visibility
					}
					featureType
				}
			}
		}
	}
`;
