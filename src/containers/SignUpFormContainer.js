import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signUpUser } from '../actions/index'
import SignupForm from '../components/Forms/SignupForm'

class SignUpFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '', password: '', passwordConfirmation: '' }
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		if (this.state.email === '' || this.state.password === '') {
			return
		}

		this.props.signUpUser(this.state)
	}

	handleInputChange(e) {
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({ ...this.state, [name]: value })
	}

	render() {
		return <SignupForm {...this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
	}
}

SignUpFormContainer.propTypes = {
	signUpUser: PropTypes.func
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		signUpUser
	}, dispatch)
}
export default connect(null, mapDispatchToProps)(SignUpFormContainer)