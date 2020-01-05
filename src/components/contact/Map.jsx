import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MarkerIcon from '../../images/contact/marker.png';

export default class Map extends Component {
	state = {
		initDelay: 'none'
	};

	initMap() {
		const gStyles = [];
		this.props.styles.map((style) => {
			gStyles.push(style.node);
		});

		if (typeof window !== 'undefined') {
			window.initMap = function() {
				const map = new window.google.maps.Map(document.getElementById('map'), {
					center: { lat: 47.8146508, lng: 35.1758211 },
					zoom: 18,
					disableDefaultUI: true,
					styles: gStyles
				});

				new window.google.maps.Marker({
					position: { lat: 47.8146508, lng: 35.1758211 },
					map: map,
					icon: MarkerIcon,
					title: 'Webcap Studio'
				});
			};
		}
	}
	componentDidMount() {
		if (document.getElementById('google-map') == null) {
			const script = document.createElement('script');
			script.id = 'google-map';
			script.async = true;
			script.defer = true;
			script.src =
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyBb0Tt2ZslsgTQtUA675J863O1CPvLnXy8&callback=initMap';
			document.head.appendChild(script);
			this.initMap();
		} else {
			window.initMap();
		}

		setTimeout(() => {
			this.setState({
				initDelay: 'block'
			});
		}, 3000);
	}

	render() {
		return (
			<div className="contact__map">
				<div id="map" className="contact__map-wrapper" style={{ display: this.state.initDelay }} />
				<Helmet>
					{/* <script
						src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBb0Tt2ZslsgTQtUA675J863O1CPvLnXy8&callback=initMap"
						async
						defer
					/> */}
				</Helmet>
			</div>
		);
	}
}
