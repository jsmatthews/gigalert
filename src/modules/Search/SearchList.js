import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/Search.css'

const SearchListRow = ({ id, name, handleSearchClick }) => (
	<div onClick={(e) => handleSearchClick(e)}>
		<Link to={`/artists/${id}`} >
			<div className='search-list-row'>
				{name}
			</div>
		</Link>
	</div>
)

SearchListRow.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	handleSearchClick: PropTypes.func
}

class SearchList extends Component {
	render() {
		return (
			<div className='search-list'>
				{this.props.searchedArtists.map(artist => <SearchListRow key={artist.id} {...artist} handleSearchClick={this.props.handleSearchClick} />)}
			</div>
		)
	}
}

SearchList.propTypes = {
	searchedArtists: PropTypes.array,
	handleSearchClick: PropTypes.func
}

export default SearchList
