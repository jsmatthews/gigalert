//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'

import ArtistProfile from './ArtistProfile'
import type { Event} from '../../api/EventQueries'
import type { Artist } from '../../api/ArtistQueries'

type Props = {
    artistProfile: Artist,
    artistEvents: Array<Event>,
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
        this.props.dispatch(fetchArtistEvents(this.props.match.params.artistId))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.artistId !== this.props.match.params.artistId) {
            this.props.dispatch(fetchArtist(newProps.match.params.artistId))
            this.props.dispatch(fetchArtistEvents(newProps.match.params.artistId))
        }
    }

    render() {
        return <ArtistProfile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    const { artistProfile, artistEvents } = state.artists;
    return { artistProfile, artistEvents }
}

export default connect(mapStateToProps)(ArtistProfileContainer)