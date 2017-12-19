import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArtists } from '../../actions/index'
import ArtistLink from '../Artists/ArtistLink'

import './HomePage.css'

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchArtists())
    }

    listPopularArtists() {
        return this.props.artists.map(artist => <ArtistLink key={artist.id} {...artist} />)
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
    const {artists} = state.artists
    return {artists}
            }

export default connect(mapStateToProps)(HomePage)