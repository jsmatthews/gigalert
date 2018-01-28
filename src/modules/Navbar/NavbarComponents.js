//@flow

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Modal, ModalHeader } from '../../components/Modal'
import LoginFormContainer from '../../containers/LoginFormContainer'
import SignUpFormContainer from '../../containers/SignUpFormContainer'
import DropdownMenu from '../../components/DropdownMenu'

import { login_modal_type, signup_modal_type, user_menu_dropdown_modal_type } from '../../constants'
import type { User } from '../../api/UserQueries'

type LoginModalTypes = { 
    closeModal: Function 
}
export const LoginModal = ({ closeModal }: LoginModalTypes) => (
    <Modal closeModal={closeModal} type={login_modal_type}>
        <ModalHeader title="Log In" />
        <LoginFormContainer />
    </Modal>
)

type SignupModalTypes = { 
    closeModal: Function 
}

export const SignupModal = ({ closeModal }: SignupModalTypes) => (
    <Modal closeModal={closeModal} type={signup_modal_type}>
        <ModalHeader title="Sign Up" />
        <SignUpFormContainer />
    </Modal>
)

type UserMenuTypes = {
    currentUser: User;
    logOut: Function;
    toggleUserMenu: Function;
    userMenuDisplayed: boolean;
    hideMenu: Function;
}
export const UserMenu = ({ currentUser, logOut, toggleUserMenu, userMenuDisplayed, hideMenu }: UserMenuTypes) => (
    <Fragment>
        <UserIcon {...currentUser} userMenuDisplayed={userMenuDisplayed} toggleUserMenu={toggleUserMenu} type={user_menu_dropdown_modal_type} />
        {(userMenuDisplayed) ? <UserMenuDropdown id={currentUser.id} logOut={logOut} hideMenu={hideMenu} /> : null}
    </Fragment>
)

type LoginLinksTypes = { 
    openModal: Function 
}
export const LoginLinks = ({ openModal }: LoginLinksTypes) => (
    <div className='login-links'>
        <LoginLink label="Log In" openModal={openModal} type={login_modal_type} />
        <LoginLink label="Sign Up" openModal={openModal} type={signup_modal_type} />
    </div>
)

type UserMenuDropdownItemTypes = {
    id: string;
    icon: string;
    label: string;
}
const UserMenuDropdownItem = ({ id, icon, label }: UserMenuDropdownItemTypes) => (
    <div className="user-menu-dropdown-item">
        <span id={id} className={`user-menu-dropdown-item-icon fa fa-${icon}`}></span>
        <span className="user-menu-dropdown-item-label">{label}</span>
    </div>
)

type UserMenuDropdownTypes = {
    logOut: Function;
    hideMenu: Function;
}
const UserMenuDropdown = ({ logOut, hideMenu }: UserMenuDropdownTypes) => (
    <DropdownMenu dropdownMenuRoot="userIcon" hideMenu={hideMenu}>

        <Link to='/dashboard' >
            <UserMenuDropdownItem id="dashboardLink" icon="rocket" label="Dashboard" />
        </Link>

        <Link to='/dashboard/accountSettings' >
            <UserMenuDropdownItem id="accountSettingsLink" icon="cog" label="Settings" />
        </Link>

        <div onClick={(e) => logOut(e)}>
            <UserMenuDropdownItem id="logOutLink" icon="sign-out" label="Log Out" />
        </div>

    </DropdownMenu>
)

type UserIconTypes = {
    userMenuDisplayed: boolean;
    toggleUserMenu: Function;
    email: string;
    type: string;
}
const UserIcon = ({ userMenuDisplayed, toggleUserMenu, email, type }: UserIconTypes) => (
    <div id="userIcon" className="user-icon">
        <span onClick={() => toggleUserMenu()}>{email}</span>
    </div>
)

type LoginLinkTypes = {
    label: string;
    openModal: Function;
    type: string;
}
const LoginLink = ({ label, openModal, type }: LoginLinkTypes) => (
    <div className="login-link" onClick={(): void => openModal(type)}>
        {label}
    </div>
)