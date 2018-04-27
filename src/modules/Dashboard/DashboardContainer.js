import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser, hideUserMenu } from '../../actions/index'
import { Dashboard } from './Dashboard'
import { getDashboardSelector } from '../../selectors'

class DashboardContainer extends Component {
	componentWillMount() {
		this.props.dispatch(fetchUser(this.props.currentUser.id))

		if (this.props.userMenuDisplayed) {
			this.props.dispatch(hideUserMenu())
		}
	}

	render() {
		if (!this.props.isLoggedIn) return <Redirect to="/" />
		return <Dashboard {...this.props} />
	}
}

const mapStateToProps = getDashboardSelector

export default connect(mapStateToProps)(DashboardContainer)