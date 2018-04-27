import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EventPage extends Component {
	render() {
		return (
			<div className=''>
				{this.props.event.title}
			</div>
		)
	}
}

EventPage.propTypes = {
	event: PropTypes.object
}

export default EventPage
