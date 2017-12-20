import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist } from '../../actions/index'

class ArtistProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedArtist: {} }
    }

    componentWillMount(){
        this.props.dispatch(fetchArtist(this.props.match.params.artistId))
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.artistProfile !== null) {
            this.setState({ selectedArtist: nextProps.artistProfile });
        }
    }

    render() {
        return (
            <div className='artist-profile'>
                {(this.state.selectedArtist) ? this.state.selectedArtist.name : "Not Defined"}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { artistProfile } = state.artists;
    return { artistProfile }
}

export default connect(mapStateToProps)(ArtistProfile)