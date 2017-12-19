import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/index'

const Event = ({ id, name, location, date }) => (
    <div>
        {id} - {name} - {location} - {date}
    </div>
)

class EventsPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchEvents())
    }

    listEvents() {
        return this.props.events.map(event => <Event key={event.id} {...event} />)
    }
    
    render() {
        return (
            <div>
                {this.listEvents()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { events } = state.events;
    return { events };
}

export default connect(mapStateToProps)(EventsPage)