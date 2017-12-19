import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import ArtistsPage from './components/Artists/ArtistsPage'
import ArtistProfile from './components/Artists/ArtistProfile'
import EventsPage from './components/EventsPage'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Route path="/" exact component={HomePage} />
                <Route path="/artists" exact component={ArtistsPage} />
                <Route path="/artists/:artistId" component={ArtistProfile} />
                <Route path="/events" component={EventsPage} />
            </div>
        );
    }
}

export default App;
