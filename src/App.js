import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchArtists, fetchEvents } from './actions/index'

import './App.css';
import Navbar from './components/Navbar/Navbar'
import ArtistsPage from './components/ArtistsPage'
import EventsPage from './components/EventsPage'

import { Route } from 'react-router-dom'


class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar />
                <Route path="/" exact component={ArtistsPage} />
                <Route path="/events" component={EventsPage} />
            </div>
        );
    }
}

export default App;
