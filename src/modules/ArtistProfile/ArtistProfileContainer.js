import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'
import { getArtistSelector } from '../../selectors'
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

const mapStateToProps = getArtistSelector

export default connect(mapStateToProps)(ArtistProfileContainer)