import React from 'react';
import AnimaLink from './AnimaLink';
import img1 from '../images/wwd/dev/1.svg';
import img2 from '../images/wwd/dev/2.svg';
import img3 from '../images/wwd/dev/3.svg';
import './Estimate.scss';

export default function Estimate(props){
	const finalClass = props.addClass ? `estimate ${props.addClass}` : 'estimate';

	return 	(
		<div className={finalClass}>
			<div className="estimate-title">
				<h2>{props.title}</h2>
			</div>
			<div className="estimate--left">
				{props.children}
			</div>
			<div className="estimate--right">
				<figure className="--art1">
					<img src={img1} alt="" />
					<img src={img2} alt="" />
					<img src={img3} alt="" />
				</figure>
				<figure className="--art2" />
				<h4>Get an estimation</h4>
				<AnimaLink className="btn" to="/contact">
					LETS GO!
				</AnimaLink>
			</div>
		</div>
	);
}
