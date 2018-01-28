//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist } from '../../actions/index'
import { isEmpty } from '../../helpers/ObjectHelpers'

import ArtistProfile from './ArtistProfile'
import type { Artist } from '../../api/ArtistQueries'

type Props = {
    artist: Artist,
    dispatch: Function,
    match: {
        params: {
            artistId: number
        }
    }
}

class ArtistProfileContainer extends Component<Props> {

    componentWillMount() {
        this.props.dispatch(fetchArtist(this.props.match.params.artistId))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.artistId !== this.props.match.params.artistId) {
            this.props.dispatch(fetchArtist(newProps.match.params.artistId))
        }
    }

    render() {
        return (!isEmpty(this.props.artist)) ? <ArtistProfile {...this.props} /> : null
    }
}

const mapStateToProps = (state) => {
    const { artist } = state.artists;
    return { artist }
}

export default connect(mapStateToProps)(ArtistProfileContainer)