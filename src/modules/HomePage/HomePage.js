import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/HomePage.css'
import { getArtistsSelector } from '../../selectors'

class HomePage extends Component {
	componentDidMount() {
		this.props.fetchAllArtists()
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

HomePage.propTypes = {
	artists: PropTypes.array,
	fetchAllArtists: PropTypes.func
}

const mapStateToProps = getArtistsSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchAllArtists
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)