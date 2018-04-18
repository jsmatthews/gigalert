//@flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllArtists } from '../../actions/index'
import ArtistList from '../../components/Artists/ArtistList'
import '../../styles/Artists.css'
import { getArtistsSelector } from '../../selectors'
import type { Artist } from '../../api/ArtistQueries'

type Props = {
	artists: Array<Artist>,
	dispatch: Function
}
class ArtistsPageContainer extends Component<Props> {
	componentDidMount() {
		this.props.dispatch(fetchAllArtists())
	}

	render() {
		return <ArtistList artists={this.props.artists} />
	}
}

const mapStateToProps = getArtistsSelector
const mapDispatchToProps = dispatch => dispatch

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPageContainer)