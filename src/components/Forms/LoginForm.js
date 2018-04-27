import React, { Component } from 'react'
import { Form, SubmitButton, FormTextInput, FormPasswordInput } from './FormItems'

export default class LoginForm extends Component {
	render() {
		return (
			<Form>
				<FormTextInput id="loginEmail" autocomplete="email" name="email" ph="Email" value={this.props.email} onChange={this.props.handleInputChange} />
				<FormPasswordInput id="loginPassword" autocomplete="current-password" name="password" ph="Password" value={this.props.password} onChange={this.props.handleInputChange} />
				<SubmitButton id="loginSubmit" onClick={this.props.handleSubmit} />
			</Form>
		)
	}
}