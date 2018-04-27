import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/HomePage.css'
import { getArtistsSelector } from '../../selectors'

class HomePage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchAllArtists())
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

const mapStateToProps = getArtistsSelector

export default connect(mapStateToProps)(HomePage)