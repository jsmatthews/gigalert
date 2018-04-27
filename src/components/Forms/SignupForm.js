import React, { Component } from 'react'
import { Form, SubmitButton, FormTextInput, FormPasswordInput } from './FormItems'

export default class SignupForm extends Component {
	render() {
		return (
			<Form>
				<FormTextInput id="signupEmail" autocomplete="email" name="email" ph="Email" value={this.props.email} onChange={this.props.handleInputChange} />
				<FormPasswordInput id="signupPassword" autocomplete="new-password" name="password" ph="Password" value={this.props.password} onChange={this.props.handleInputChange} />
				<FormPasswordInput id="signupPasswordConfirmation" autocomplete="new-password" name="passwordConfirmation" ph="Confirm Password" value={this.props.passwordConfirmation} onChange={this.props.handleInputChange} />
				<SubmitButton id="signupSubmit" onClick={this.props.handleSubmit} />
			</Form>
		)
	}
}