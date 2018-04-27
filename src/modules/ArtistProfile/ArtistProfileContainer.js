import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'
import { getArtistSelector } from '../../selectors'
import ArtistProfile from './ArtistProfile'

class ArtistProfileContainer extends Component {
	componentWillMount() {
		this.props.fetchArtist(this.props.match.params.artistId)
		this.props.fetchArtistEvents(this.props.match.params.artistId)
	}

	componentWillReceiveProps(newProps) {
		if (newProps.match.params.artistId !== this.props.match.params.artistId) {
			this.props.fetchArtist(newProps.match.params.artistId)
			this.props.fetchArtistEvents(newProps.match.params.artistId)
		}
	}

	render() {
		return <ArtistProfile {...this.props} />
	}
}

ArtistProfileContainer.propTypes = {
	dispatch: PropTypes.function,
	fetchArtist: PropTypes.function,
	fetchArtistEvents: PropTypes.function,
	match: PropTypes.object
}

const mapStateToProps = getArtistSelector

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchArtist,
		fetchArtistEvents
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfileContainer)