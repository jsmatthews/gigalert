import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchArtists, fetchEvents } from './actions/index'

import './App.css';
import Navbar from './components/Navbar/Navbar'
import ArtistsPage from './components/ArtistsPage'
import EventsPage from './components/EventsPage'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchArtists())
        this.props.dispatch(fetchEvents())
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <ArtistsPage artists={this.props.artists} />
                <EventsPage events={this.props.events} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { artists } = state.artists;
    const { events } = state.events;
    return { artists, events };
}

export default connect(mapStateToProps)(App);
