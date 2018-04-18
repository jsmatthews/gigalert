//@flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchList from './SearchList'
import { hideSearch, clearSearchBarValue, clearSearchedArtists } from '../../actions/index'
import type { dispatch } from '../../reducers/index'
import type { Artist } from '../../api/ArtistQueries'
import { getSearchedArtistsSelector } from '../../selectors'

type Props = dispatch & {
	searchedArtists: Array<Artist>
}
class SearchContainer extends Component<Props> {
	constructor(props) {
		super(props)
		this.handleSearchClick = this.handleSearchClick.bind(this)
	}

	handleSearchClick = () => {
		this.props.dispatch(hideSearch())
		this.props.dispatch(clearSearchBarValue())
		this.props.dispatch(clearSearchedArtists())
	}

	render() {
		return <SearchList {...this.props} handleSearchClick={this.handleSearchClick} />
	}
}

const mapStateToProps = getSearchedArtistsSelector

export default connect(mapStateToProps)(SearchContainer)