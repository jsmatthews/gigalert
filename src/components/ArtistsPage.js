import React, { Component } from 'react'

const Artist = ({ id, name }) => (
    <div>
        {id} - {name}
    </div>
)

export default class ArtistsPage extends Component {
    listArtists() {
        return this.props.artists.map(artist => <Artist key={artist.id} { ...artist } />)
    }

    render() {
        return (
            <div>
                {this.listArtists()}
            </div>
        )
    }
}