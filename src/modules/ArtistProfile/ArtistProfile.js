//@flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ArtistProfile.css'
import type { Artist } from '../../api/ArtistQueries'
import type { Event } from '../../api/EventQueries'

const ArtistEventsHeader = () => (
	<div className='artist-event-header'>
		Events
	</div>
)

const ArtistEventsTable = ({ artistEvents }: Array<Event>) => (
	<div className='artist-events-table'>
		<ArtistEventsHeader />
		<ArtistEvents events={artistEvents} />
	</div>
)

const eventDate = (date) => {
	let dateObj = new Date(date)

	let month = dateObj.toLocaleString('en-us', { month: 'short' })
	let day = String(dateObj.getDate()).padStart(2, '0')

	return `${month} ${day}`
}

const ArtistEvents = ({ events }: Array<Event>) => {
	let sortedEvents: Array<Event> = [].concat(events).sort((a: Event, b: Event): Event => a.date > b.date)
	return sortedEvents.map(event => <ArtistEvent key={event.id} {...event} />)
}

const ArtistEvent = ({ id, title, location, date }: Event) => (
	<Link to={`/event/${id}`} >
		<div className='artist-event' >
			<div className='artist-event-column'>
				<div className='artist-event-date'>
					{eventDate(date)}
				</div>
				<div className='artist-event-title'>
					{title}
				</div>
			</div>
			<div className='artist-event-location'>
				{location}
			</div>
		</div>
	</Link>
)

const ArtistImage = ({ name }: String) => (
	<div className='artist-image'>
		<div className='artist-name'>
			{name}
		</div>
	</div>
)

type Props = { artistProfile: Artist, artistEvents: Array<Event> }

export default class ArtistProfile extends Component<Props> {
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