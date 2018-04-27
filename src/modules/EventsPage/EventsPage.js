import React, { Component } from 'react'
import PropTypes from 'prop-types'

const EventItem = ({ id, title, location, date }) => (
	<div>
		{id} - {title} - {location} - {date}
	</div>
)

EventItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	location: PropTypes.string,
	date: PropTypes.string,
}

class EventsPage extends Component {
	render() {
		return (this.props.events !== null) ? this.props.events.map(event => <EventItem key={event.id} {...event} />) : null
	}
}

EventsPage.propTypes = {
	events: PropTypes.array
}

export default EventsPage
