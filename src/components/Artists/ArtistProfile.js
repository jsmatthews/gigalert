import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist, fetchArtistEvents } from '../../actions/index'

const ArtistInfo = ({ name, description }) => (
    <div className='artist-info'>
        {name} - {description}
    </div>
)

const ArtistEvents = props => props.events.map(event => <div key={event.id}>{event.name}</div>)

class ArtistProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedArtist: {}, artistEvents: [] }
    }

    componentWillMount() {
        this.props.dispatch(fetchArtist(this.props.match.params.artistId))
        this.props.dispatch(fetchArtistEvents(this.props.match.params.artistId))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.artistProfile !== null && nextProps.artistEvents !== null) {
            this.setState({ selectedArtist: nextProps.artistProfile, artistEvents: nextProps.artistEvents });
        }
    }

    render() {
        return (
            <div className='artist-profile'>
                {
                    (this.state.selectedArtist) ? <ArtistInfo {...this.state.selectedArtist} /> : ""
                }
                <ArtistEvents events={this.state.artistEvents} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { artistProfile, artistEvents } = state.artists;
    return { artistProfile, artistEvents }
}

export default connect(mapStateToProps)(ArtistProfile)