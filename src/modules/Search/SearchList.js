import React, { Component } from 'react'
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

export default class SearchList extends Component {
    render() {
        return (
            <div className='search-list'>
                {this.props.searchedArtists.map(artist => <SearchListRow key={artist.id} {...artist} handleSearchClick={this.props.handleSearchClick} />)}
            </div>
        )
    }
}