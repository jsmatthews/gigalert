import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists } from '../../actions/index'
import ArtistLink from './ArtistLink'
import '../../styles/Artists.css'

class ArtistsPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchArtists());
    }

    listArtists() {
        return this.props.artists.map(artist => <ArtistLink key={artist.id} { ...artist } />)
    }

    render() {
        return (
            <div className="page artists-page">
                {this.listArtists()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { artists } = state.artists;
    return { artists };
}

export default connect(mapStateToProps)(ArtistsPage)