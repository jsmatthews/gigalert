import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Search.css'

const SearchListRow = ({ id, name }) => (
    <Link to={`/artists/${id}`} >
        <div className='search-list-row'>
            {name}
        </div>
    </Link>
)

export default class SearchList extends Component {
    render() {
        return (
            <div className='search-list'>
                {this.props.searchedArtists.map(artist => <SearchListRow key={artist.id} {...artist} />)}
            </div>
        )
    }
}