import React, { Component } from 'react'
import '../../styles/Navbar.css'

import { NavLink } from 'react-router-dom'
import { Modal, ModalHeader } from '../Modal'
import { LoginForm } from '../LoginForm'
import SignUpForm from '../SignUpForm'

const LoginLink = ({ label, openModal, type }) => (
    <div className="nav-btn" onClick={() => openModal(type)}>
        {label}
    </div>
)

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { displayLoginModal: false, displaySignupModal: false }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    openModal(type) {
        this.setState({ [type]: true })
    }

    closeModal(type) {
        this.setState({ [type]: false })
    }

    renderLoginModal() {
        return (
            (this.state.displayLoginModal) ?
                <Modal closeModal={this.closeModal} type="displayLoginModal">
                    <ModalHeader title="Log In" />
                    <LoginForm />
                </Modal>
                : null
        )
    }

    renderSignupModal() {
        return (
            (this.state.displaySignupModal) ?
                <Modal closeModal={this.closeModal} type="displaySignupModal">
                    <ModalHeader title="Sign Up" />
                    <SignUpForm />
                </Modal>
                : null
        )
    }

    render() {
        return (
            <div className="navbar">
                <div className='logo'>
                    <NavLink to="/">GigAlert</NavLink>
                </div>
                <NavLink to="/artists">ARTISTS</NavLink>
                <NavLink to="/events">EVENTS</NavLink>

                <LoginLink label="Log In" openModal={this.openModal} type="displayLoginModal" />
                <LoginLink label="Sign Up" openModal={this.openModal} type="displaySignupModal" />

                {this.renderLoginModal()}
                {this.renderSignupModal()}
            </div>
        )
    }
}