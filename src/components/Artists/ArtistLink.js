import React from 'react'
import '../../styles/Artists.css'

const ArtistLink = ({ id, name }) => (
    <div className="artist-link">
        <div className='artist-link-name'>
            {name}
        </div>
    </div>
)

export default ArtistLink