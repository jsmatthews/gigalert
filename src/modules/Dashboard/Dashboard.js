import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink } from 'react-router-dom'
import '../../styles/Dashboard.css'
import AccountSettings from './AccountSettings'

const DashboardNavItem = ({ label, to, order }) => (
	<div className="dashboard-nav-item" order={order}>
		<NavLink className="dashboard-nav-btn" activeClassName="dashboard-nav-active" to={to}>{label}</NavLink>
	</div>
)

DashboardNavItem.propTypes = {
	label: PropTypes.string,
	to: PropTypes.string,
	order: PropTypes.number
}

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

export class Dashboard extends Component {
	render() {
		return (
			<div className='page dashboard'>
				<DashboardNav {...this.props} />
				<DashboardMain {...this.props} />
			</div>
		)
	}
}