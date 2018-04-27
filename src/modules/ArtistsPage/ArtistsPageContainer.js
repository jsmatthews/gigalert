import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/Artists.css'
import { getArtistsSelector } from '../../selectors'
import { fetchAllArtists } from '../../actions/index'

class ArtistsPageContainer extends Component {
	componentDidMount() {
		this.props.fetchAllArtists()
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

ArtistsPageContainer.propTypes = {
	artists: PropTypes.array,
	fetchAllArtists: PropTypes.func
}

const mapStateToProps = getArtistsSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchAllArtists
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPageContainer)