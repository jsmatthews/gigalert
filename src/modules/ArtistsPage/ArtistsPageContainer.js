import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/Artists.css'
import { getArtistsSelector } from '../../selectors'

class ArtistsPageContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchAllArtists())
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

ArtistsPageContainer.propTypes = {
	artists: PropTypes.array,
	dispatch: PropTypes.func
}

const mapStateToProps = getArtistsSelector
const mapDispatchToProps = dispatch => dispatch

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPageContainer)