import React, { Component } from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className='logo'>
                    <NavLink to="/">GigAlert</NavLink>
                </div>
                <NavLink to="/artists">ARTISTS</NavLink>
                <NavLink to="/events">EVENTS</NavLink>
            </div>
        )
    }
}