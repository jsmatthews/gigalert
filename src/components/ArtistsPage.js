import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists } from '../actions/index'

const Artist = ({ id, name }) => (
    <div>
        {id} - {name}
    </div>
)

class ArtistsPage extends Component {
    componentDidMount(){
        this.props.dispatch(fetchArtists());
    }

    listArtists() {
        return this.props.artists.map(artist => <Artist key={artist.id} { ...artist } />)
    }

    render() {
        return (
            <div>
                {this.listArtists()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { artists } = state.artists;
    return { artists };
}

export default connect(mapStateToProps)(ArtistsPage)