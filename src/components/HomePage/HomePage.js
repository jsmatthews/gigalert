import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchArtists } from '../../actions/index'
import ArtistLink from '../Artists/ArtistLink'

import '../../styles/HomePage.css'

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchArtists())
    }

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

const mapStateToProps = (state) => {
    const { artists } = state.artists
    return { artists }
}

export default connect(mapStateToProps)(HomePage)