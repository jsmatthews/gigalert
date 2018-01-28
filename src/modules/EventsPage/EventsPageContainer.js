//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/index'

import EventsPage from './EventsPage'
import type { Event } from '../../api/EventQueries'
import type { dispatch } from '../../reducers/index'

type Props = { events: Event[] } & dispatch;

class EventsPageContainer extends Component<Props> {
    componentDidMount() {
        this.props.dispatch(fetchAllEvents())
    }

    render() {
        return (this.props.events !== undefined) ? <EventsPage events={this.props.events} /> : null
    }
}

function mapStateToProps(state) {
    const { events } = state.events;
    return { events };
}

export default connect(mapStateToProps)(EventsPageContainer)