import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists } from '../../actions/index'

class ArtistProfile extends Component {
    componentDidMount() {
        // const { match: { params } } = this.props;
        this.props.dispatch(fetchArtists())
        console.log(this.props)
        // console.log(this.props.artists)
    }

    render() {
        return (
            <div className='artist-profile'>
                PROFILE
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { artists } = state.artists;
    console.log(state)
    return { artists, params: ownProps.match.params }
}

export default connect(mapStateToProps)(ArtistProfile)