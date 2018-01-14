import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchList from './SearchList'

class SearchContainer extends Component {
    render(){
        return <SearchList {...this.props} />
    }
}

const mapStateToProps = (state) => {
    const { searchedArtists } = state.artists
    return {searchedArtists}
}

export default connect(mapStateToProps)(SearchContainer)