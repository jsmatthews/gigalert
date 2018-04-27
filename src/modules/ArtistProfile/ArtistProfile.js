import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/ArtistProfile.css'

const ArtistEventsHeader = () => (
	<div className='artist-event-header'>
		Events
	</div>
)

const ArtistEventsTable = ({ artistEvents }) => (
	<div className='artist-events-table'>
		<ArtistEventsHeader />
		<ArtistEvents events={artistEvents} />
	</div>
)

ArtistEventsTable.propTypes = {
	artistEvents: PropTypes.array
}

const eventDate = (date) => {
	let dateObj = new Date(date)

	let month = dateObj.toLocaleString('en-us', { month: 'short' })
	let day = String(dateObj.getDate()).padStart(2, '0')

	return `${month} ${day}`
}

const ArtistEvents = ({ events }) => {
	let sortedEvents = [].concat(events).sort((a, b) => a.date > b.date)
	return sortedEvents.map(event => <ArtistEvent key={event.id} {...event} />)
}

const ArtistEvent = ({ id, title, location, date }) => (
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

ArtistEvent.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	location: PropTypes.string,
	date: PropTypes.string
}

const ArtistImage = ({ name }) => (
	<div className='artist-image'>
		<div className='artist-name'>
			{name}
		</div>
	</div>
)

ArtistImage.propTypes = {
	name: PropTypes.string
}

class ArtistProfile extends Component {
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

ArtistProfile.propTypes = {
	artistEvents: PropTypes.array,
	artistProfile: PropTypes.object,
	name: PropTypes.string
}

export default ArtistProfile