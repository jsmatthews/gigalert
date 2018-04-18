//@flow
import React, { Component } from 'react'
import ArtistLink from './ArtistLink'
import { Link } from 'react-router-dom'
import type { Artist } from '../../api/ArtistQueries'
import '../../styles/HomePage.css'

type Props = {
	artists: Array<Artist>
}
export default class ArtistList extends Component<Props> {
	listPopularArtists() {
		return this.props.artists.map(artist => {
			return (
				<Link key={artist.id} to={`/artists/${artist.id}`}>
					<ArtistLink {...artist} />
				</Link>
			)
		})
	}

	render() {
		return (
			<div className='page home-page'>
				{this.listPopularArtists()}
			</div>
		)
	}
}