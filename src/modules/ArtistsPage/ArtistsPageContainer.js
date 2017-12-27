import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistLink from '../../components/Artists/ArtistLink'
import '../../styles/Artists.css'

class ArtistsPageContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchAllArtists());
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

export default connect(mapStateToProps)(ArtistsPageContainer)