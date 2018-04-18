//@flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Search.css'
import type { Artist } from '../../api/ArtistQueries'

type SearchListRowProps = {
	id: Number,
	name: String,
	handleSearchClick: Function
}
const SearchListRow = ({ id, name, handleSearchClick }: SearchListRowProps) => (
	<div onClick={(e) => handleSearchClick(e)}>
		<Link to={`/artists/${id}`} >
			<div className='search-list-row'>
				{name}
			</div>
		</Link>
	</div>
)

type SearchListProps = {
	searchedArtists: Array<Artist>,
	handleSearchClick: Function
}
export default class SearchList extends Component<SearchListProps> {
	render() {
		return (
			<div className='search-list'>
				{this.props.searchedArtists.map(artist => <SearchListRow key={artist.id} {...artist} handleSearchClick={this.props.handleSearchClick} />)}
			</div>
		)
	}
}