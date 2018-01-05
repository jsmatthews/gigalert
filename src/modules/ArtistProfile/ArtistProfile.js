import React, { Component } from 'react'
import '../../styles/ArtistProfile.css'

const ArtistEventsHeader = () => (
    <div className="artist-event-header">
        Events
    </div>
)

const ArtistEventsTable = ({ artistEvents }) => (
    <div className="artist-events-table">
        <ArtistEventsHeader />
        <ArtistEvents events={artistEvents} />
    </div>
)

const eventDate = (date) => {
    let dateObj = new Date(date)

    let month = dateObj.toLocaleString("en-us", { month: "short" });
    let day = `${dateObj.getDate()}`.padStart(2, "0");

    return `${month} ${day}`;
}

const ArtistEvents = ({ events }) => {
    return events.map(event => <ArtistEvent key={event.id} {...event} />)
}

const ArtistEvent = ({ title, location, date }) => (
    <div className="artist-event" >
        <div className="artist-event-title">
            {title}
        </div>
        <div className="artist-event-location">
            {location}
        </div>
        <div className="artist-event-date">
            {eventDate(date)}
        </div>
    </div>
)

const ArtistImage = ({ name }) => (
    <div className="artist-image">
        <div className="artist-name">
            {name}
        </div>
    </div>
)

export default class ArtistProfile extends Component {
    render() {
        return (
            <div className='page artist-profile'>
                {
                    (this.props.artistProfile) ? <ArtistImage {...this.props.artistProfile} /> : null
                }
                <ArtistEventsTable artistEvents={this.props.artistEvents} />
            </div>
        )
    }
}