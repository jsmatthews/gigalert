import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ArtistsPage from './components/ArtistsPage'
import EventsPage from './components/EventsPage'
import HomePage from './components/HomePage/HomePage'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Route path="/" exact component={HomePage} />
                <Route path="/artists" exact component={ArtistsPage} />
                <Route path="/events" component={EventsPage} />
            </div>
        );
    }
}

export default App;
