import React, { Component } from 'react'
import {connect} from 'react-redux'

import { displayModal, hideModal, toggleUserMenu } from '../../actions/index'
import Navbar from './Navbar'

class NavbarContainer extends Component {
    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal(type) {
        this.props.dispatch(displayModal(type));
    }

    closeModal(type) {
        this.props.dispatch(hideModal(type));
    }

    render() {
        return <Navbar {...this.props} openModal={this.openModal} closeModal={this.closeModal} toggleUserMenu={this.toggleUserMenu} />
    }
}

const mapStateToProps = (state) => {
    const {displayLoginModal, displaySignupModal, userMenuDropdownModal} = state.app;
    return {displayLoginModal, displaySignupModal, userMenuDropdownModal}
}

export default connect(mapStateToProps)(NavbarContainer)