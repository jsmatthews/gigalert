import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../../actions/index'

import { Dashboard } from './Dashboard'

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: {} }
    }

    componentWillMount() {
        this.props.dispatch(fetchUser(this.props.userId))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.currentUser !== null) {
            this.setState({ currentUser: newProps.currentUser })
        }
    }

    render() {
        if(!this.props.isLoggedIn) return <Redirect to="/" />
        return <Dashboard {...this.state} />        
    }
}

const mapStateToProps = (state, ownProps) => {
    const { currentUser, isLoggedIn } = state.users;
    const { userId } = ownProps.match.params;
    return { userId, currentUser, isLoggedIn };
}

export default connect(mapStateToProps)(DashboardContainer)