import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/Artists.css'

import type { Artist } from '../../api/ArtistQueries'

type Props = { artists: Artist[] }

class ArtistsPageContainer extends Component<Props> {
    componentDidMount() {
        this.props.dispatch(fetchAllArtists());
    }

    render() {
        return <ArtistList artists={this.props.artists} />
    }
}

function mapStateToProps(state) {
    const { artists } = state.artists;
    return { artists };
}

export default connect(mapStateToProps)(ArtistsPageContainer)