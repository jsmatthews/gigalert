//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventPage from './EventPage'
import { fetchEvent } from '../../actions/index'
import type { dispatch } from '../../reducers/index'
import type { Event } from '../../api/EventQueries'

type Props = { event: Event; match: { params: any } } & dispatch;

class EventPageContainer extends Component<Props> {
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