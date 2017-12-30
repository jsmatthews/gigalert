import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'

import '../../styles/Dashboard.css'
import AccountSettings from './AccountSettings';

const Avatar = ({ avatarSource }) => <div className="avatar"><img src={avatarSource} alt="avatar" /></div>
const UserName = ({ userName }) => <div className="username">{userName}</div>

const DashboardMenu = (props) => (
    <div className="dashboard-menu">
        {props.children.map(child => <DashboardMenuRow key={child.props.order} child={child} />)}
    </div>
)

const DashboardMenuRow = (props) => <div className="dashboard-menu-row">{props.child}</div>

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
            <DashboardMenuItem order="3" label="Account" to='/dashboard/accountSettings' />
        </DashboardMenu>
    </div>
)

const DashboardMain = (props) => (
    <div className='dashboard-main'>
        <Route path={`/dashboard/${props.currentUser.id}/accountSettings`} component={AccountSettings} />
    </div>
)

export class Dashboard extends Component {
    render() {
        const { id } = this.props.currentUser;
        console.log(id)
        // if (id === undefined || id === null ) return <Redirect to="/" />
        return (
            <div className='page dashboard'>
                <DashboardSidebar {...this.props} />
                <DashboardMain {...this.props} />
            </div>
        )
    }
}