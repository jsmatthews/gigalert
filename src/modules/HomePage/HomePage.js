import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchAllArtists } from '../../actions/index'

import ArtistList from '../../components/Artists/ArtistList'

import '../../styles/HomePage.css'

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAllArtists())
    }

    render() {
        return <ArtistList artists={this.props.artists} />
    }
}

const mapStateToProps = (state) => {
    const { artists } = state.artists
    return { artists }
}

HomePage.propTypes = {
    artists: PropTypes.array
}

export default connect(mapStateToProps)(HomePage)