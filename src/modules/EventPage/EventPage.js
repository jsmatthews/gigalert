import React, { Component } from 'react'

export default class EventPage extends Component {
    render() {
        return (
            <div className=''>
                {this.props.event.title}
            </div>
        )
    }
}