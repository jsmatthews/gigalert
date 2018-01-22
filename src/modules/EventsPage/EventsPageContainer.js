import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/index'

import EventsPage from './EventsPage'

class EventsPageContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchAllEvents())
    }
    
    render() {
        return <EventsPage events={this.props.events} />
    }
}

function mapStateToProps(state) {
    const { events } = state.events;
    return { events };
}

EventsPageContainer.propTypes = {
    events: PropTypes.array
}

export default connect(mapStateToProps)(EventsPageContainer)