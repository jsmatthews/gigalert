//@flow

import React, { Component } from 'react'
import type { Event } from '../../api/EventQueries'

const EventItem = ({ id, title, location, date }: Event) => (
    <div>
        {id} - {title} - {location} - {date}
    </div>
)
type Props = Event & { events: Event[] }
export default class EventsPage extends Component<Props> {
    render() {
        return (this.props.events !== null) ? this.props.events.map(event => <EventItem key={event.id} {...event} />) : null
    }
}