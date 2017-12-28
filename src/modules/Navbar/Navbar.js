import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Modal, ModalHeader } from '../../components/Modal'
import LoginFormContainer from '../../containers/LoginFormContainer'
import SignUpFormContainer from '../../containers/SignUpFormContainer'

import { login_modal_type, signup_modal_type, user_menu_dropdown_modal_type } from '../../constants'
import '../../styles/Navbar.css'

const LoginLink = ({ label, openModal, type }) => (
    <div className="login-link" onClick={() => openModal(type)}>
        {label}
    </div>
)

const LoginLinks = ({ openModal }) => (
    <div className='login-links'>
        <LoginLink label="Log In" openModal={openModal} type={login_modal_type} />
        <LoginLink label="Sign Up" openModal={openModal} type={signup_modal_type} />
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

const UserIcon = ({ openModal, email, type }) => <div className="user-icon" onClick={() => openModal(type)}>{email}</div>
const AppLogo = () => <div className='logo'><NavLink to="/">GigAlert</NavLink></div>

const UserMenuDropdown = ({ id, logOut }) => (
    <div className="user-dropdown-menu">
        <div className="user-menu-dropdown-row">
            <Link to={`/dashboard/${id}`} >Dashboard</Link>
        </div>
        <div className="user-menu-dropdown-row" onClick={(e) => logOut(e)}>
            Log Out
        </div>
    </div>
)

const UserMenuDropdownModal = ({ closeModal, logOut }) => {
    const modalStyles = {
        modalContainerStyle: "modal-dropdown-container",
        modalBackgroundStyle: "modal-dropdown-background",
        modalStyle: "modal-dropdown"
    }
    return (
        <Modal closeModal={closeModal} type={user_menu_dropdown_modal_type} {...modalStyles}>
            <UserMenuDropdown logOut={logOut} />
        </Modal>
    )
}

const UserMenu = ({ currentUser, logOut, openModal, userMenuDropdownModal, closeModal }) => (
    <div>
        <UserIcon {...currentUser} openModal={openModal} type={user_menu_dropdown_modal_type} />
        {(userMenuDropdownModal) ? <UserMenuDropdownModal logOut={logOut} closeModal={closeModal} /> : null}
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