//@flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/index'
import EventsPage from './EventsPage'
import type { Event } from '../../api/EventQueries'
import type { dispatch } from '../../reducers/index'
import { getEventsSelector } from '../../selectors'

type Props = dispatch & {
	events: Array<Event>
}

class EventsPageContainer extends Component<Props> {
	componentDidMount() {
		this.props.dispatch(fetchAllEvents())
	}

	render() {
		return (this.props.events !== undefined) ? <EventsPage events={this.props.events} /> : null
	}
}

const mapStateToProps = getEventsSelector

export default connect(mapStateToProps)(EventsPageContainer)