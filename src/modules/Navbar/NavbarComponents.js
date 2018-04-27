import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader } from '../../components/Modal'
import LoginFormContainer from '../../containers/LoginFormContainer'
import SignUpFormContainer from '../../containers/SignUpFormContainer'
import DropdownMenu from '../../components/DropdownMenu'
import { login_modal_type, signup_modal_type, user_menu_dropdown_modal_type } from '../../constants'

export const LoginModal = ({ closeModal }) => (
	<Modal closeModal={closeModal} type={login_modal_type}>
		<ModalHeader title="Log In" />
		<LoginFormContainer />
	</Modal>
)

LoginModal.propTypes = {
	closeModal: PropTypes.func
}

export const SignupModal = ({ closeModal }) => (
	<Modal closeModal={closeModal} type={signup_modal_type}>
		<ModalHeader title="Sign Up" />
		<SignUpFormContainer />
	</Modal>
)

SignupModal.propTypes = {
	closeModal: PropTypes.func
}

export const UserMenu = ({ currentUser, logOut, toggleUserMenu, userMenuDisplayed, hideMenu }) => (
	<Fragment>
		<UserIcon {...currentUser} userMenuDisplayed={userMenuDisplayed} toggleUserMenu={toggleUserMenu} type={user_menu_dropdown_modal_type} />
		{(userMenuDisplayed) ? <UserMenuDropdown id={currentUser.id} logOut={logOut} hideMenu={hideMenu} /> : null}
	</Fragment>
)

UserMenu.propTypes = {
	currentUser: PropTypes.func,
	logOut: PropTypes.func,
	toggleUserMenu: PropTypes.func,
	userMenuDisplayed: PropTypes.bool,
	hideMenu: PropTypes.func,
}

export const LoginLinks = ({ openModal }) => (
	<div className='login-links'>
		<LoginLink label="Log In" openModal={openModal} type={login_modal_type} />
		<LoginLink label="Sign Up" openModal={openModal} type={signup_modal_type} />
	</div>
)

LoginLinks.propTypes = {
	openModal: PropTypes.func
}

const UserMenuDropdownItem = ({ id, icon, label }) => (
	<div className="user-menu-dropdown-item">
		<span id={id} className={`user-menu-dropdown-item-icon fa fa-${icon}`}></span>
		<span className="user-menu-dropdown-item-label">{label}</span>
	</div>
)

UserMenuDropdownItem.propTypes = {
	id: PropTypes.string,
	icon: PropTypes.string,
	label: PropTypes.string
}

const UserMenuDropdown = ({ logOut, hideMenu }) => (
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

UserMenuDropdown.propTypes = {
	logOut: PropTypes.func,
	hideMenu: PropTypes.func
}

const UserIcon = ({ toggleUserMenu, email }) => (
	<div id="userIcon" className="user-icon">
		<span onClick={() => toggleUserMenu()}>{email}</span>
	</div>
)

UserIcon.propTypes = {
	toggleUserMenu: PropTypes.func,
	email: PropTypes.string
}

const LoginLink = ({ label, openModal, type }) => (
	<div className="login-link" onClick={() => openModal(type)}>
		{label}
	</div>
)

LoginLink.propTypes = {
	label: PropTypes.string,
	openModal: PropTypes.func,
	type: PropTypes.string
}