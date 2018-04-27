import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchList from './SearchList'
import { hideSearch, clearSearchBarValue, clearSearchedArtists } from '../../actions/index'
import { getSearchedArtistsSelector } from '../../selectors'

class SearchContainer extends Component {
	constructor(props) {
		super(props)
		this.handleSearchClick = this.handleSearchClick.bind(this)
	}

	handleSearchClick = () => {
		this.props.hideSearch()
		this.props.clearSearchBarValue()
		this.props.clearSearchedArtists()
	}

	render() {
		return <SearchList {...this.props} handleSearchClick={this.handleSearchClick} />
	}
}

SearchContainer.propTypes = {
	clearSearchedArtists: PropTypes.func,
	clearSearchBarValue: PropTypes.func,
	hideSearch: PropTypes.func
}

const mapStateToProps = getSearchedArtistsSelector
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		clearSearchedArtists,
		clearSearchBarValue,
		hideSearch
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)