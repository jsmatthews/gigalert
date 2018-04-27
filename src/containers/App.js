import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsersSelector } from '../selectors'

// Components
import NavbarContainer from '../modules/Navbar/NavbarContainer'
import HomePage from '../modules/HomePage/HomePage'
import ArtistsPageContainer from '../modules/ArtistsPage/ArtistsPageContainer'
import ArtistProfileContainer from '../modules/ArtistProfile/ArtistProfileContainer'
import EventsPageContainer from '../modules/EventsPage/EventsPageContainer'
import EventPageContainer from '../modules/EventPage/EventPageContainer'
import DashboardContainer from '../modules/Dashboard/DashboardContainer'

import { verifyUser, logOutUser, hideUserMenu } from '../actions/index'

import '../styles/App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { isLoggedIn: false }
		this.logOut = this.logOut.bind(this)
	}

	componentWillMount() {
		this.props.verifyUser(1)
	}

	componentWillReceiveProps(newProps) {
		this.setState({ ...this.state, newProps })
	}

	logOut(e) {
		e.preventDefault()
		this.props.logOutUser(this.props.currentUser.id)
		this.props.hideUserMenu()
	}

	render() {
		if (!this.props.isReady) return null
		return (
			<div id="app" className="App">
				<NavbarContainer isLoggedIn={this.props.isLoggedIn} currentUser={this.props.currentUser} logOut={this.logOut} />
				<div id="appBody">
					<Route path="/" exact component={HomePage} />
					<Route path="/artists" exact component={ArtistsPageContainer} />
					<Route path="/artists/:artistId" component={ArtistProfileContainer} />
					<Route path="/events" component={EventsPageContainer} />
					<Route path="/event/:eventId" component={EventPageContainer} />
					<Route path="/dashboard" component={DashboardContainer} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = getUsersSelector

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	currentUser: PropTypes.object,
	isReady: PropTypes.bool,
	verifyUser: PropTypes.func,
	logOutUser: PropTypes.func,
	hideUserMenu: PropTypes.func
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		verifyUser,
		logOutUser,
		hideUserMenu
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
