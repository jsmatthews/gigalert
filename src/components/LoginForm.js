import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/index'

import { Form, SubmitButton, FormTextInput, FormPasswordInput } from './FormComponents'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.email === "" || this.state.password === "") {
        //     return;
        // }
        this.props.dispatch(loginUser(this.state))
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ ...this.state, [name]: value });
    }

    render() {
        return (
            <Form>
                <FormTextInput id="loginEmail" autocomplete="email" name="email" ph="Email" value={this.state.email} onChange={this.handleInputChange} />
                <FormPasswordInput id="loginPassword" autocomplete="current-password" name="password" ph="Password" value={this.state.password} onChange={this.handleInputChange} />
                <SubmitButton id="loginSubmit" onClick={this.handleSubmit} />
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch;
}

export default connect(mapDispatchToProps)(LoginForm)