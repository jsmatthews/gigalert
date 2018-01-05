import React, { Component } from 'react'
import { connect } from 'react-redux'

import { displayModal, hideModal, displayUserMenu, hideUserMenu } from '../../actions/index'
import Navbar from './Navbar'

class NavbarContainer extends Component {
    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.toggleUserMenu = this.toggleUserMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
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
        return <Navbar {...this.props} hideMenu={this.hideMenu} openModal={this.openModal} closeModal={this.closeModal} toggleUserMenu={this.toggleUserMenu} />
    }
}

const mapStateToProps = (state) => {
    const { displayLoginModal, displaySignupModal, userMenuDisplayed } = state.app;
    return { displayLoginModal, displaySignupModal, userMenuDisplayed }
}

export default connect(mapStateToProps)(NavbarContainer)