import React from 'react'
import { Link } from 'react-router-dom'

import { Modal, ModalHeader } from '../../components/Modal'
import LoginFormContainer from '../../containers/LoginFormContainer'
import SignUpFormContainer from '../../containers/SignUpFormContainer'

import { login_modal_type, signup_modal_type, user_menu_dropdown_modal_type } from '../../constants'

export const LoginModal = ({ closeModal }) => (
    <Modal closeModal={closeModal} type={login_modal_type}>
        <ModalHeader title="Log In" />
        <LoginFormContainer />
    </Modal>
)

export const SignupModal = ({ closeModal }) => (
    <Modal closeModal={closeModal} type={signup_modal_type}>
        <ModalHeader title="Sign Up" />
        <SignUpFormContainer />
    </Modal>
)

export const UserMenu = ({ currentUser, logOut, toggleUserMenu, userMenuDisplayed }) => (
    <div>
        <UserIcon {...currentUser} userMenuDisplayed={userMenuDisplayed} toggleUserMenu={toggleUserMenu} type={user_menu_dropdown_modal_type} />
        {(userMenuDisplayed) ? <UserMenuDropdown id={currentUser.id} logOut={logOut} /> : null}
    </div>
)

export const LoginLinks = ({ openModal }) => (
    <div className='login-links'>
        <LoginLink label="Log In" openModal={openModal} type={login_modal_type} />
        <LoginLink label="Sign Up" openModal={openModal} type={signup_modal_type} />
    </div>
)


const UserMenuDropdown = ({ id, logOut }) => (
    <div id="userDropdownMenu" className="user-dropdown-menu">
        <div className="user-menu-dropdown-item">
            <Link to='/dashboard' >
                <span className="user-menu-dropdown-item-icon fa fa-rocket"></span>
                <span className="user-menu-dropdown-item-label">Dashboard</span>
            </Link>
        </div>
        <div className="user-menu-dropdown-item" onClick={(e) => logOut(e)}>
            <span className="user-menu-dropdown-item-icon fa fa-sign-out"></span>
            <span className="user-menu-dropdown-item-label">Log Out</span>
        </div>
    </div>
)



const Triangles = () => (
    <div className="triangles">
        <div className="triangle"></div>
        <div className="triangle2"></div>
    </div>
)

const UserIcon = ({ userMenuDisplayed, toggleUserMenu, email, type }) => (
    <div className="user-icon" onClick={() => toggleUserMenu()}>
        {email}
        {(userMenuDisplayed) ? <Triangles /> : null}
    </div>
)


const LoginLink = ({ label, openModal, type }) => (
    <div className="login-link" onClick={() => openModal(type)}>
        {label}
    </div>
)
