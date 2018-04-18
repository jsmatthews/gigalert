//@flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventPage from './EventPage'
import { fetchEvent } from '../../actions/index'
import type { dispatch } from '../../reducers/index'
import type { Event } from '../../api/EventQueries'
import { getEventSelector } from '../../selectors'

type Props = dispatch & {
	event: Event;
	match: { params: any }
}
class EventPageContainer extends Component<Props> {
	componentWillMount() {
		this.props.dispatch(fetchEvent(this.props.match.params.eventId))
	}

	render() {
		return (this.props.event !== null) ? <EventPage {...this.props} /> : null
	}
}

const mapStateToProps = getEventSelector
export default connect(mapStateToProps)(EventPageContainer)