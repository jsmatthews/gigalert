import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Artists.css'

const ArtistLink = ({ name }) => (
	<div className="artist-link">
		<div className='artist-link-name'>
			{name}
		</div>
	</div>
)

ArtistLink.propTypes = {
	name: PropTypes.string
}

export default ArtistLink