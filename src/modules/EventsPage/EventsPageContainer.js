import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllEvents } from '../../actions/index'
import EventsPage from './EventsPage'
import { getEventsSelector } from '../../selectors'

class EventsPageContainer extends Component {
	componentDidMount() {
		this.props.fetchAllEvents()
	}

	render() {
		return (this.props.events !== undefined) ? <EventsPage events={this.props.events} /> : null
	}
}

EventsPageContainer.propTypes = {
	events: PropTypes.array,
	fetchAllEvents: PropTypes.func
}

const mapStateToProps = getEventsSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchAllEvents
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPageContainer)