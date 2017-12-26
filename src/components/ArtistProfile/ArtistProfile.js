import React, { Component } from 'react'
import { isEmpty, oneIsEmpty } from '../../helpers/ObjectHelpers'

const ArtistInfo = ({ name, description }) => (
    <div className='artist-info'>
        {name} - {description}
    </div>
)

const ArtistEvents = props => props.events.map(event => <div key={event.id}>{event.name}</div>)

export default class ArtistProfile extends Component {
    componentWillReceiveProps() {
        oneIsEmpty(this.props);
    }

    render() {
        return (
            (isEmpty(this.props.artistProfile)) ? null :

                <div className='artist-profile'>
                    <ArtistInfo {...this.props.artistProfile} />
                    <ArtistEvents events={this.props.artistEvents} />
                </div>
        )
    }
}