import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, hideUserMenu } from '../../actions/index'
import { Dashboard } from './Dashboard'
import { getDashboardSelector } from '../../selectors'

class DashboardContainer extends Component {
	componentWillMount() {
		this.props.fetchUser(this.props.currentUser.id)

		if (this.props.userMenuDisplayed) {
			this.props.hideUserMenu()
		}
	}

	render() {
		if (!this.props.isLoggedIn) return <Redirect to="/" />
		return <Dashboard {...this.props} />
	}
}

DashboardContainer.propTypes = {
	currentUser: PropTypes.string,
	isLoggedIn: PropTypes.string,
	userMenuDisplayed: PropTypes.string,
	fetchUser: PropTypes.number,
	hideUserMenu: PropTypes.number
}

const mapStateToProps = getDashboardSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchUser,
		hideUserMenu
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)