//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    displayModal,
    hideModal,
    displayUserMenu,
    hideUserMenu,
    updateSearchBarValue,
    clearSearchBarValue,
    searchDatabase,
    displaySearch,
    hideSearch
} from '../../actions/index'

import Navbar from './Navbar'
import type { AppState, dispatch } from '../../reducers/index'

type Props = AppState & dispatch;

class NavbarContainer extends Component<Props> {
    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.toggleUserMenu = this.toggleUserMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.handleSearchBarInput = this.handleSearchBarInput.bind(this)
        this.handleSearchBarKeyUp = this.handleSearchBarKeyUp.bind(this)
    }

    handleSearchBarInput: Function = (e): void => {
        this.props.dispatch(updateSearchBarValue(e.target.value))
    }

    handleSearchBarKeyUp: Function = (e): void => {
        switch (e.keyCode) {
            case 27: {
                this.props.dispatch(clearSearchBarValue())
                this.props.dispatch(hideSearch())
                break;
            }
            case 13: {
                if (typeof this.props.searchBarValue !== 'string') return;
                this.props.dispatch(searchDatabase(this.props.searchBarValue))
                break;
            }
            default: {
                this.props.dispatch(searchDatabase(this.props.searchBarValue))
                if (this.props.searchBarValue.length === 1) {
                    this.props.dispatch(displaySearch())
                    break;
                }
                if (this.props.searchBarValue.length === 0) {
                    this.props.dispatch(hideSearch())
                    break;
                }
            }
        }
    }

    openModal: Function = (type): void => {
        this.props.dispatch(displayModal(type))
    }

    closeModal: Function = (type): void => {
        this.props.dispatch(hideModal(type))
    }

    toggleUserMenu: Function = (): void => {
        if (this.props.userMenuDisplayed) {
            this.props.dispatch(hideUserMenu())
        } else {
            this.props.dispatch(displayUserMenu())
        }
    }

    hideMenu: Function = (): void => {
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
    const { displayLoginModal, displaySignupModal, userMenuDisplayed, searchBarValue, displaySearch } = state.app;
    return { displayLoginModal, displaySignupModal, userMenuDisplayed, searchBarValue, displaySearch }
}

export default connect(mapStateToProps)(NavbarContainer)