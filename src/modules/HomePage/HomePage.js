//@flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/HomePage.css'
import type { dispatch } from '../../reducers/index'
import type { Artist } from '../../api/ArtistQueries'
import { getArtistsSelector } from '../../selectors'

type Props = dispatch & {
	artists: Array<Artist>
}

class HomePage extends Component<Props> {

	componentDidMount() {
		this.props.dispatch(fetchAllArtists())
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

const mapStateToProps = getArtistsSelector

export default connect(mapStateToProps)(HomePage)