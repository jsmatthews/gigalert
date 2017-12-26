import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import HomePage from '../components/HomePage/HomePage'
import ArtistsPage from '../components/Artists/ArtistsPage'
import ArtistProfileContainer from '../components/ArtistProfile/ArtistProfileContainer'
import EventsPage from '../components/EventsPage'
import DashboardContainer from '../modules/Dashboard/DashboardContainer'

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Route path="/" exact component={HomePage} />
                <Route path="/artists" exact component={ArtistsPage} />
                <Route path="/artists/:artistId" component={ArtistProfileContainer} />
                <Route path="/events" component={EventsPage} />
                <Route path="/dashboard/:userId" component={DashboardContainer} />
            </div>
        );
    }
}

export default App;
