//@flow

import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { LoginModal, SignupModal, UserMenu, LoginLinks } from './NavbarComponents'
import SearchContainer from '../Search/SearchContainer'

import '../../styles/Navbar.css'
import type { User } from '../../api/UserQueries'

const AppLogo = () => <div className='logo'><NavLink to="/">GigAlert</NavLink></div>

const Search = ({ searchBarValue, onChange, onKeyUp, displaySearch }) => (
    <div className='search-container'>
        <input id="searchBar" type="text" className="search-input" placeholder="Search..." value={searchBarValue} onChange={(e) => onChange(e)} onKeyUp={(e) => onKeyUp(e)} />
        {(displaySearch) ? <SearchContainer /> : null}
    </div>
)

const SearchBar = (props) => (
    <div className='nav-links'>
        <Search {...props}/>
        <NavLink className="nav-btn" to="/artists">Artists</NavLink>
        <NavLink className="nav-btn" to="/events">Events</NavLink>
    </div>
)

const UserInfo = (props) => (
    <Fragment>
        {(props.isLoggedIn) ? <UserMenu {...props} /> : <LoginLinks {...props} />}
    </Fragment>
)

const UserModals = ({ displayLoginModal, displaySignupModal, closeModal }) => (
    <Fragment>
        {(displayLoginModal) ? <LoginModal closeModal={closeModal} /> : null}
        {(displaySignupModal) ? <SignupModal closeModal={closeModal} /> : null}
    </Fragment>
)

type Props = {
    displayLoginModal: boolean;
    displaySignupModal: boolean;
    openModal: Function;
    closeModal: Function;
    searchBarValue: string;
    onChange: Function;
    onKeyUp: Function;
    displaySearch: boolean;
    currentUser: User;
    logOut: Function;
    toggleUserMenu: Function;
    userMenuDisplayed: boolean;
    hideMenu: Function;
}

export default class Navbar extends Component<Props> {
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