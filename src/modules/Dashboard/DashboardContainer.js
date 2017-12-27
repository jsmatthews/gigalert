import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../../actions/index'

import { Dashboard } from './Dashboard'

class DashboardContainer extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUser(this.props.userId))
    }

    render() {
        if(!this.props.isLoggedIn) return <Redirect to="/" />
        return <Dashboard {...this.props} />        
    }
}

const mapStateToProps = (state, ownProps) => {
    const { currentUser, isLoggedIn } = state.users;
    const { userId } = ownProps.match.params;
    return { userId, currentUser, isLoggedIn };
}

export default connect(mapStateToProps)(DashboardContainer)