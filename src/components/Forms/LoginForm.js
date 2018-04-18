//@flow
import React, { Component } from 'react'
import { Form, SubmitButton, FormTextInput, FormPasswordInput } from './FormItems'

type LoginFormProps = {
	email: String,
	password: String,
	handleSubmit: Function,
	handleInputChange: Function
}
export default class LoginForm extends Component<LoginFormProps> {
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