import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/index'
import EventsPage from './EventsPage'
import { getEventsSelector } from '../../selectors'

class EventsPageContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchAllEvents())
	}

	render() {
		return (this.props.events !== undefined) ? <EventsPage events={this.props.events} /> : null
	}
}

const mapStateToProps = getEventsSelector

export default connect(mapStateToProps)(EventsPageContainer)