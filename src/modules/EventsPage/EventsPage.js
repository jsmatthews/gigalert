import React, { Component } from 'react'

const Event = ({ id, name, location, date }) => (
    <div>
        {id} - {name} - {location} - {date}
    </div>
)

export default class EventsPage extends Component {
    render() {
        return (this.props.events !== null) ? this.props.events.map(event => <Event key={event.id} {...event} />) : null
    }
}