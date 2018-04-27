import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArtistLink from './ArtistLink'
import { Link } from 'react-router-dom'
import '../../styles/HomePage.css'

class ArtistList extends Component {
	render() {
		const artists = this.props.artists.map(artist => {
			return (
				<Link key={artist.id} to={`/artists/${artist.id}`}>
					<ArtistLink {...artist} />
				</Link>
			)
		})
		return (
			<div className='page home-page'>
				{artists}
			</div>
		)
	}
}

ArtistList.propTypes = {
	artists: PropTypes.array
}

export default ArtistList
