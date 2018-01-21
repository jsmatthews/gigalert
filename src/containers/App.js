import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NavbarContainer from '../modules/Navbar/NavbarContainer'
import HomePage from '../modules/HomePage/HomePage'
import ArtistsPageContainer from '../modules/ArtistsPage/ArtistsPageContainer'
import ArtistProfileContainer from '../modules/ArtistProfile/ArtistProfileContainer'
import EventsPageContainer from '../modules/EventsPage/EventsPageContainer'
import EventPageContainer from '../modules/EventPage/EventPageContainer'
import DashboardContainer from '../modules/Dashboard/DashboardContainer'

import { verifyUser, logOutUser, hideUserMenu } from '../actions/index'

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(verifyUser(1));
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ...this.state, newProps })
    }

    logOut(e) {
        e.preventDefault();
        this.props.dispatch(logOutUser(this.props.currentUser.id))
        this.props.dispatch(hideUserMenu())
    }

    render() {
        if (!this.props.isReady) return null;
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
        );
    }
}

const mapStateToProps = (state) => {
    const { isLoggedIn, currentUser, isReady } = state.users;
    return { isLoggedIn, currentUser, isReady };
}

export default connect(mapStateToProps)(App);
