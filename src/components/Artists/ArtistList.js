import React, { Component } from 'react'
import ArtistLink from './ArtistLink'
import { Link } from 'react-router-dom'

import '../../styles/HomePage.css'

export default class ArtistList extends Component {

    listPopularArtists() {
        return this.props.artists.map(artist => {
            return (
                <Link key={artist.id} to={`/artists/${artist.id}`}>
                    <ArtistLink {...artist} />
                </Link>
            )
        })
    }

    render() {
        return (
            <div className='page home-page'>
                {this.listPopularArtists()}
            </div>
        )
    }
}