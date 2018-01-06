import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { LoginModal, SignupModal, UserMenu, LoginLinks } from './NavbarComponents'

import '../../styles/Navbar.css'

const AppLogo = () => <div className='logo'><NavLink to="/">GigAlert</NavLink></div>

const SearchBar = ({ searchBarValue, onChange, onKeyUp }) => (
    <div className='nav-links'>
        <input id="searchBar" type="text" className="search-input" placeholder="Search..." value={searchBarValue} onChange={(e) => onChange(e)} onKeyUp={(e) => onKeyUp(e)} />
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
            <div id="navbar" className="navbar noselect">
                <AppLogo />
                <SearchBar {...this.props} />
                <UserInfo {...this.props} />
                <UserModals {...this.props} />
            </div>
        )
    }
}