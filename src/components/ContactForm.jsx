import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contactForm.scss';

export default class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.recaptchaRef = React.createRef();
		this.emailField = React.createRef();
	}

	state = {
		disabled: false,
		sendSucess: false,
		sendError: false,
		name: '',
		email: '',
		message: ''
	};

	onChange = (value) => {
		if (value.length) {
			console.log('success');

			let data = {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message
			};

			fetch(window.location.origin + '/send.php', {
				method: 'post',
				body: JSON.stringify(data)
			}).then((resp) => {
				this.setState({
					disabled: true,
					sendSucess: true
				});
			});

			console.log(data);
		} else {
			console.log('error');

			this.setState({
				disabled: true,
				sendError: true
			});
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	checkEmailField = () => {
		if (this.emailField.current.value.length) {
			this.emailField.current.classList.add('notEmpty');
		} else {
			this.emailField.current.classList.remove('notEmpty');
		}
	}

	render() {
		return (
			<div className="contact-form">
				<h3>Let’s talk</h3>
				<h4>Always ready to process your request</h4>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.recaptchaRef.current.execute();
					}}
				>
					<div className="contact-form__input short">
						<input type="text" name="name" required onChange={this.handleChange} />
						<span>Name</span>
					</div>
					<div className="contact-form__input short">
						<input
							type="email"
							name="email"
							id=""
							required
							onChange={this.handleChange}
							ref={this.emailField}
							onKeyUp={this.checkEmailField}
						/>
						<span>Email</span>
					</div>
					<div className="contact-form__input long">
						<input
							type="text"
							name="message"
							id=""
							autoComplete="off"
							required
							onChange={this.handleChange}
						/>
						<span>Project details</span>
					</div>
					<button className="btn" disabled={this.state.disabled ? 'disabled' : ''}>
						send
					</button>
					<ReCAPTCHA
						ref={this.recaptchaRef}
						sitekey="6LfmPJsUAAAAAJxWnPSXQRkWAMCgxwbw0ZgQpFFP"
						size="invisible"
						onChange={this.onChange}
					/>
					<div className="contact-form__message">
						<p className="success" style={{ display: this.state.sendSucess ? 'block' : 'none' }}>
							Your message has been successfully sent. We will contact you very soon!
						</p>
						<p className="error" style={{ display: this.state.sendError ? 'block' : 'none' }}>
							Oppps! Something went wrong, please contact us in another way.
						</p>
					</div>
				</form>
			</div>
		);
	}
}
