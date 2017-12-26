import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/Dashboard.css'

const Avatar = ({ avatarSource }) => (
    <div className="avatar">
        <img src={avatarSource} alt="avatar" />
    </div>
)

const UserName = ({ userName }) => (
    <div className="username">
        {userName}
    </div>
)

const DashboardMenu = (props) => (
    <div className="dashboard-menu">
        {
            props.children.map(child => (
                <div key={child.props.order} className="dashboard-menu-row">
                    {child}
                </div>
            ))
        }
    </div>
)

const DashboardMenuItem = ({ label, to, order }) => (
    <div className="dashboard-menu-item" order={order}>
        <NavLink className="dashboard-menu-nav-btn" to={to}>{label}</NavLink>
    </div>
)

const DashboardSidebar = (props) => (
    <div className="dashboard-sidebar">
        <Avatar />
        <UserName userName={props.currentUser.name} />
        <DashboardMenu>
            <DashboardMenuItem order="1" label="Events" to="/events" />
            <DashboardMenuItem order="2" label="Artists" to="/artists" />
            <DashboardMenuItem order="3" label="Account" to="/dashboard" />
        </DashboardMenu>
    </div>
)

export class Dashboard extends Component {
    render() {
        return (
            <div className='page dashboard'>
                <DashboardSidebar {...this.props} />
            </div>
        )
    }
}