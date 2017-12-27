import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Modal, ModalHeader } from '../../components/Modal'
import LoginFormContainer from '../../containers/LoginFormContainer'
import SignUpFormContainer from '../../containers/SignUpFormContainer'

import { login_modal_type, signup_modal_type } from '../../constants'
import '../../styles/Navbar.css'

const LoginLink = ({ label, openModal, type }) => (
    <div className="login-link" onClick={() => openModal(type)}>
        {label}
    </div>
)

const LoginModal = ({ closeModal }) => (
    <Modal closeModal={closeModal} type={login_modal_type}>
        <ModalHeader title="Log In" />
        <LoginFormContainer />
    </Modal>
)

const SignupModal = ({ closeModal }) => (
    <Modal closeModal={closeModal} type={signup_modal_type}>
        <ModalHeader title="Sign Up" />
        <SignUpFormContainer />
    </Modal>
)

const LoginLinks = ({ openModal }) => (
    <div className='login-links'>
        <LoginLink label="Log In" openModal={openModal} type={login_modal_type} />
        <LoginLink label="Sign Up" openModal={openModal} type={signup_modal_type} />
    </div>
)

const LogOutLink = ({ logOut }) => <div onClick={(e) => logOut(e)}>Log Out</div>
const UserIcon = ({ id, email }) => <NavLink className="nav-btn" to={`/dashboard/${id}`}>{email}</NavLink>
const AppLogo = () => <div className='logo'><NavLink to="/">GigAlert</NavLink></div>

const UserMenu = ({ currentUser, logOut }) => (
    <div>
        <UserIcon {...currentUser} />
        <LogOutLink logOut={logOut} />
    </div>
)

const SearchBar = () => (
    <div className='nav-links'>
        <input type="text" className="search-input" placeholder="Search..." />
        <NavLink className="nav-btn" to="/artists">Artists</NavLink>
        <NavLink className="nav-btn" to="/events">Events</NavLink>
    </div>
)

const UserInfo = (props) => (
    <div>
        {(props.isLoggedIn) ? <UserMenu {...props} /> : <LoginLinks {...props} />}
    </div>
)

const UserModals = ({ displayLoginModal, displaySignupModal, closeModal }) => (
    <div>
        {(displayLoginModal) ? <LoginModal closeModal={closeModal} /> : null}
        {(displaySignupModal) ? <SignupModal closeModal={closeModal} /> : null}
    </div>
)

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar noselect">
                <AppLogo />
                <SearchBar />
                <UserInfo {...this.props} />
                <UserModals {...this.props} />
            </div>
        )
    }
}