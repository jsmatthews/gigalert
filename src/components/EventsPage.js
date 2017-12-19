import React, { Component } from 'react'

const Event = ({id, name, location, date}) => (
    <div>
        {id} - {name} - {location} - {date}
    </div>
)

export default class EventsPage extends Component {
    listEvents(){
        return(
            this.props.events.map(event => {
                return <Event key={event.id} {...event} />
            })
        )
    }
    render() {
        return (
            <div>
                {this.listEvents()}
            </div>
        )
    }
}