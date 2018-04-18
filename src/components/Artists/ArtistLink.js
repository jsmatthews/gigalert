//@flow
import React from 'react'
import '../../styles/Artists.css'

type ArtistLinkProps = {
	name: String
}
const ArtistLink = ({ name }: ArtistLinkProps) => (
	<div className="artist-link">
		<div className='artist-link-name'>
			{name}
		</div>
	</div>
)

export default ArtistLink