//@flow

import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import '../../styles/Dashboard.css'
import AccountSettings from './AccountSettings';

type NavItemArgs = { label: string; to: string; order: string };
const DashboardNavItem = ({ label, to, order }: NavItemArgs) => (
    <div className="dashboard-nav-item" order={order}>
        <NavLink className="dashboard-nav-btn" activeClassName="dashboard-nav-active" to={to}>{label}</NavLink>
    </div>
)

const DashboardNav = () => (
    <div className="dashboard-nav">
        <DashboardNavItem order="1" label="Main" to="/dashboard/main" />
        <DashboardNavItem order="2" label="Events" to="/dashboard/events" />
        <DashboardNavItem order="3" label="Account" to='/dashboard/accountSettings' />
    </div>
)

const DashboardMain = () => (
    <div className='dashboard-main'>
        <Route path="/dashboard/main" component={AccountSettings} />
        <Route path="/dashboard/events" component={AccountSettings} />
        <Route path="/dashboard/accountSettings" component={AccountSettings} />
    </div>
)

type Props = {

}

export class Dashboard extends Component<Props> {
    render() {
        return (
            <div className='page dashboard'>
                <DashboardNav {...this.props} />
                <DashboardMain {...this.props} />
            </div>
        )
    }
}