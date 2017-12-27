import React, { Component } from 'react'

const ArtistInfo = ({ name, description }) => (
    <div className='artist-info'>
        {name} - {description}
    </div>
)

const ArtistEvents = props => props.events.map(event => <div key={event.id}>{event.name}</div>)

export default class ArtistProfile extends Component {
    render(){
        return(
            <div className='artist-profile'>
                {
                    (this.props.selectedArtist) ? <ArtistInfo {...this.props.selectedArtist} /> : ""
                }
                <ArtistEvents events={this.props.artistEvents} />
            </div>
        )
    }
}