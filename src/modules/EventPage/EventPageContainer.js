import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventPage from './EventPage'
import { fetchEvent } from '../../actions/index'
import { getEventSelector } from '../../selectors'

class EventPageContainer extends Component {
	componentWillMount() {
		this.props.fetchEvent(this.props.match.params.eventId)
	}

	render() {
		return (this.props.event !== null) ? <EventPage {...this.props} /> : null
	}
}

EventPageContainer.propTypes = {
	fetchEvent: PropTypes.func,
	event: PropTypes.object,
	match: PropTypes.object
}

const mapStateToProps = getEventSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchEvent
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventPageContainer)