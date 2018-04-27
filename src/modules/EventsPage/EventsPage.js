import React, { Component } from 'react'

const EventItem = ({ id, title, location, date }) => (
	<div>
		{id} - {title} - {location} - {date}
	</div>
)

export default class EventsPage extends Component {
	render() {
		return (this.props.events !== null) ? this.props.events.map(event => <EventItem key={event.id} {...event} />) : null
	}
}