import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventPage from './EventPage'
import { fetchEvent } from '../../actions/index'

class EventPageContainer extends Component {
    componentWillMount() {
        this.props.dispatch(fetchEvent(this.props.match.params.eventId))
    }

    render() {
        return (this.props.event !== null) ? <EventPage {...this.props} /> : null
    }
}

const mapStateToProps = state => {
    const { event } = state.events
    return { event }
}

export default connect(mapStateToProps)(EventPageContainer)