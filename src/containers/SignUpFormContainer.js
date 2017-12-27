import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpUser } from '../actions/index'
import SignupForm from '../components/Forms/SignupForm'

class SignUpFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", passwordConfirmation: "" }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // console.log(this.props)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
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
        return <SignupForm {...this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return dispatch;
}

export default connect(mapDispatchToProps)(SignUpFormContainer)