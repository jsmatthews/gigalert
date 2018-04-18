//@flow
import React, { Component } from 'react'
import type { Event } from '../../api/EventQueries'

type Props = {
	event: Event
}
export default class EventPage extends Component<Props> {
	render() {
		return (
			<div className=''>
				{this.props.event.title}
			</div>
		)
	}
}