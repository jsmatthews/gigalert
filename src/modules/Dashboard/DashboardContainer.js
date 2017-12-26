import React, { Component } from 'react'
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
        return <Dashboard {...this.state} />        
    }
}

const mapStateToProps = (state, ownProps) => {
    const { currentUser } = state.users;
    const { userId } = ownProps.match.params;
    return { userId, currentUser };
}

export default connect(mapStateToProps)(DashboardContainer)