import React, { Component } from 'react';
import AOS from 'aos';
import Des1 from '../../images/wwd/devops/bg-top.svg';
import './hiw.scss';

export default class hiw extends Component {
	componentDidMount() {
		AOS.init();
	}

	componentDidUpdate() {
		AOS.refresh();
	}
	render() {
		return (
			<div className="hiw">
				<img className="hiw-img" src={Des1} alt="" />
				<h2>How it works</h2>
				<div className="hiw-grid">
					<div className="hiw-item">
						<div
							className="hiw-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>1. We set up your development team/own development center</h4>
							<p>
								We build your team based your requirments, using our internal
								development resources and recruitment capabilities. We strive to
								keep our best people in-house? so you may find some developer
								resources avaliable right from the start. if required, our HR
								team will help to meet your specialist needs to custom
								recruitment localy, nationally, and regionally (Eastern Europe).
							</p>
						</div>
					</div>
					<div className="hiw-item">
						<div
							className="hiw-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>2. We take care of administration</h4>
							<p>
								We take care of all administration pertaining to your team at
								our development centers. We provide technical infrastructure,
								encourage continued education and stimulate professional growth
								of your team. Your developers will not work isolated – we work
								to make sure that 900+ developers working at our development
								centers in Ukraine (Lviv, Kiev), Poland (Krakow), Belarus
								(Minsk), and Bulgaria have the environment to develop
								professionally.
							</p>
						</div>
					</div>
					<div className="hiw-item">
						<div
							className="hiw-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>3. We integrate the team/center with your site</h4>
							<p>
								A Delivery Manager responsible for team integration with your
								site is allocated to your account. He will work closely with you
								for the first months of cooperation to work out an efficient
								remote cooperation model and help to set up all the agile
								processes necessary for a geographically distributed team. He
								will be responsible for business processes integration,
								technology alignment, team-building activities and setting up
								and overseeing effective communication.
							</p>
						</div>
					</div>
					<div className="hiw-item">
						<div
							className="hiw-item__content"
							data-aos="fade"
							data-aos-duration="1000"
							data-aos-offset="300"
						>
							<h4>4. You retain full control over product development</h4>
							<p>
								The engagement model enables you to manage your team as you do
								your in-house one, while we give you the necessary tools and
								provide our continued assistance. Also, you can involve us at
								any stage of our cooperation so that we help facilitate
								communication and relationships with your team.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
