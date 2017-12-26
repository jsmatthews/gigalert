import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'

import ArtistProfile from './ArtistProfile'

class ArtistProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { artistProfile: {}, artistEvents: [] }
    }

    componentWillMount() {
        this.props.dispatch(fetchArtist(this.props.match.params.artistId))
        this.props.dispatch(fetchArtistEvents(this.props.match.params.artistId))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.artistProfile !== null && nextProps.artistEvents !== null) {
            this.setState({ artistProfile: nextProps.artistProfile, artistEvents: nextProps.artistEvents });
        }
    }

    render() {
        return <ArtistProfile {...this.state} />
    }
}

const mapStateToProps = (state) => {
    const { artistProfile, artistEvents } = state.artists;
    return { artistProfile, artistEvents }
}

export default connect(mapStateToProps)(ArtistProfileContainer)