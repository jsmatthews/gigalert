import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    displayModal,
    hideModal,
    displayUserMenu,
    hideUserMenu,
    updateSearchBarValue,
    clearSearchBarValue,
    searchDatabase
} from '../../actions/index'

import Navbar from './Navbar'

class NavbarContainer extends Component {
    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.toggleUserMenu = this.toggleUserMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.handleSearchBarInput = this.handleSearchBarInput.bind(this)
        this.handleSearchBarKeyUp = this.handleSearchBarKeyUp.bind(this)
    }

    handleSearchBarInput(e) {
        this.props.dispatch(updateSearchBarValue(e.target.value))
    }

    handleSearchBarKeyUp(e) {
        if (e.keyCode === 27) {
            this.props.dispatch(clearSearchBarValue())
            return;
        }

        if (e.keyCode === 13) {
            if(typeof this.props.searchBarValue !== 'string') return;
            this.props.dispatch(searchDatabase(this.props.searchBarValue))
            return;
        }
    }

    openModal(type) {
        this.props.dispatch(displayModal(type))
    }

    closeModal(type) {
        this.props.dispatch(hideModal(type))
    }

    toggleUserMenu() {
        if (this.props.userMenuDisplayed) {
            this.props.dispatch(hideUserMenu())
        } else {
            this.props.dispatch(displayUserMenu())
        }
    }

    hideMenu() {
        this.props.dispatch(hideUserMenu())
    }

    render() {
        return <Navbar {...this.props}
            hideMenu={this.hideMenu}
            openModal={this.openModal}
            closeModal={this.closeModal}
            toggleUserMenu={this.toggleUserMenu}
            onChange={this.handleSearchBarInput}
            onKeyUp={this.handleSearchBarKeyUp} />
    }
}

const mapStateToProps = (state) => {
    const { displayLoginModal, displaySignupModal, userMenuDisplayed, searchBarValue } = state.app;
    return { displayLoginModal, displaySignupModal, userMenuDisplayed, searchBarValue }
}

export default connect(mapStateToProps)(NavbarContainer)