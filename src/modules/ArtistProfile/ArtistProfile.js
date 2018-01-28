//@flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/ArtistProfile.css'

import type { Artist } from '../../api/ArtistQueries'
import type { Event } from '../../api/EventQueries'

const ArtistEventsHeader = () => (
    <div className="artist-event-header">
        Events
    </div>
)

const ArtistEventsTable = ({ events }) => (
    <div className="artist-events-table">
        <ArtistEventsHeader />
        <ArtistEvents events={events} />
    </div>
)

const eventDate = (date) => {
    let dateObj = new Date(date)
    let month = dateObj.toLocaleString("en-us", { month: "short" });
    let day = String(dateObj.getDate()).padStart(2, "0");

    return `${month} ${day}`;
}

const ArtistEvents = ({ events }) => {
    let sortedEvents: Event[] = [].concat(events).sort((a: Event, b: Event): any => a.date > b.date)
    return sortedEvents.map(event => <ArtistEvent key={event.id} {...event} />)
}

const ArtistEvent = ({ id, title, location, date }) => (
    <Link to={`/event/${id}`} >
        <div className="artist-event" >
            <div className="artist-event-column">
                <div className="artist-event-date">
                    {eventDate(date)}
                </div>
                <div className="artist-event-title">
                    {title}
                </div>
            </div>
            <div className="artist-event-location">
                {location}
            </div>
        </div>
    </Link>
)

const ArtistImage = ({ name }) => (
    <div className="artist-image">
        <div className="artist-name">
            {name}
        </div>
    </div>
)

type Props = { artist: Artist; }

export default class ArtistProfile extends Component<Props> {
    render() {
        return (
            <div className='page artist-profile'>
                <ArtistImage {...this.props.artist} />
                <ArtistEventsTable {...this.props.artist} />
            </div>
        )
    }
}