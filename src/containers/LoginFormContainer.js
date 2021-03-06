import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/index'
import LoginForm from '../components/Forms/LoginForm'

class LoginFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '', password: '' }
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		// if (this.state.email === '' || this.state.password === '') {
		//     return
		// }
		this.props.loginUser(this.state)
	}

	handleInputChange(e) {
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({ ...this.state, [name]: value })
	}

	render() {
		return <LoginForm {...this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
	}
}

LoginFormContainer.propTypes = {
	loginUser: PropTypes.func
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		loginUser
	}, dispatch)
}

export default connect(mapDispatchToProps)(LoginFormContainer)