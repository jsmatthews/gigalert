import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'

import ArtistProfile from './ArtistProfile'

class ArtistProfileContainer extends Component {

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

ArtistProfileContainer.propTypes = {
    artistProfile: PropTypes.object,
    artistEvents: PropTypes.array
}

export default connect(mapStateToProps)(ArtistProfileContainer)