import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpUser } from '../actions/index'

import { Form, SubmitButton, FormTextInput, FormPasswordInput } from './FormComponents'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", passwordConfirmation: "" }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // console.log(this.props)
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email === "" || this.state.password === ""){
            return;
        }
        
        this.props.dispatch(signUpUser(this.state))
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
                <FormTextInput id="signupEmail" autocomplete="email" name="email" ph="Email" value={this.state.email} onChange={this.handleInputChange} />
                <FormPasswordInput id="signupPassword" autocomplete="new-password" name="password" ph="Password" value={this.state.password} onChange={this.handleInputChange} />
                <FormPasswordInput id="signupPasswordConfirmation" autocomplete="new-password" name="passwordConfirmation" ph="Confirm Password" value={this.state.passwordConfirmation} onChange={this.handleInputChange} />
                <SubmitButton id="signupSubmit" onClick={this.handleSubmit} />
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return dispatch;
}

export default connect(mapDispatchToProps)(SignUpForm)