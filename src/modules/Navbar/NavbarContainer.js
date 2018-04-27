import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNavbarSelector } from '../../selectors'
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
		this.props.updateSearchBarValue(e.target.value)
	}

	handleSearchBarKeyUp(e) {
		switch (e.keyCode) {
			case 27: {
				this.props.clearSearchBarValue()
				this.props.hideSearch()
				break
			}
			case 13: {
				if (typeof this.props.searchBarValue !== 'string') return
				this.props.searchDatabase(this.props.searchBarValue)
				break
			}
			default: {
				this.props.searchDatabase(this.props.searchBarValue)
				if (this.props.searchBarValue.length === 1) {
					this.props.displaySearch()
					break
				}
				if (this.props.searchBarValue.length === 0) {
					this.props.hideSearch()
					break
				}
			}
		}
	}

	openModal(type) {
		this.props.displayModal(type)
	}

	closeModal(type) {
		this.props.hideModal(type)
	}

	toggleUserMenu() {
		if (this.props.userMenuDisplayed) {
			this.props.hideUserMenu()
		} else {
			this.props.displayUserMenu()
		}
	}

	hideMenu() {
		this.props.hideUserMenu()
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

NavbarContainer.propTypes = {
	displayModal: PropTypes.func,
	hideModal: PropTypes.func,
	displayUserMenu: PropTypes.func,
	hideUserMenu: PropTypes.func,
	updateSearchBarValue: PropTypes.func,
	clearSearchBarValue: PropTypes.func,
	searchDatabase: PropTypes.func,
	displaySearch: PropTypes.func,
	hideSearch: PropTypes.func,
	userMenuDisplayed: PropTypes.bool,
	searchBarValue: PropTypes.string
}

const mapStateToProps = getNavbarSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		displayModal,
		hideModal,
		displayUserMenu,
		hideUserMenu,
		updateSearchBarValue,
		clearSearchBarValue,
		searchDatabase,
		displaySearch,
		hideSearch
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)