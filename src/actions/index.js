import * as api from '../api/index'

export function fetchArtists() {
    return dispatch => {
        api.fetchAllArtists().then(resp => {
            dispatch(fetchAllArtistsSucceeded(resp.data))
        })
    }
};

const fetchAllArtistsSucceeded = (artists) => {
    return {
        type: 'FETCH_ALL_ARTISTS_SUCCEEDED',
        payload: { artists }
    }
}

export function fetchEvents() {
    return dispatch => {
        api.fetchAllEvents().then(resp => {
            dispatch(fetchAllEventsSucceeded(resp.data))
        })
    }
}

const fetchAllEventsSucceeded = (events) => {
    return {
        type: 'FETCH_ALL_EVENTS_SUCCEEDED',
        payload: { events }
    }
}

export function fetchArtist(artistId) {
    return dispatch => {
        api.fetchArtist(artistId).then(resp => {
            dispatch(fetchArtistSucceeded(resp.data))
        })
    }
}

const fetchArtistSucceeded = (artist) => {
    return {
        type: 'FETCH_ARTIST_SUCCEEDED',
        payload: { artist }
    }
}

export function fetchArtistEvents(artistId) {
    return dispatch => {
        api.fetchArtistEvents(artistId).then(resp => {
            dispatch(fetchArtistEventsSucceeded(resp.data));
        })
    }
}

const fetchArtistEventsSucceeded = (events) => {
    return {
        type: 'FETCH_ARTIST_EVENTS_SUCCEEDED',
        payload: { events }
    }
}

export function signUpUser(userInfo) {
    return dispatch => {
        api.signUpUser(userInfo)
            .then(resp => dispatch(signUpSucceeded(resp.data)))
            .catch(e => dispatch(signUpFailed(e)))
    }
}

const signUpSucceeded = (userInfo) => {
    return {
        type: 'SIGN_UP_USER_SUCCEEDED',
        payload: { userInfo }
    }
}

const signUpFailed = (error) => {
    return {
        type: 'SIGN_UP_USER_FAILED',
        payload: { error }
    }
}


export function loginUser(userInfo) {
    return dispatch => {
        api.loginUser(userInfo)
            .then(resp => dispatch(loginUserSucceeded(resp.data[0])))
            .catch(e => dispatch(loginUserFailed(e)))
    }
}

const loginUserSucceeded = (userInfo) => {
    return {
        type: 'LOGIN_USER_SUCCEEDED',
        payload: { userInfo }
    }
}

const loginUserFailed = (error) => {
    return {
        type: 'LOGIN_USER_FAILED',
        payload: { error }
    }
}

export function fetchUser(userId) {
    return dispatch => {
        api.fetchUser(userId).then(resp => {
            dispatch(fetchUserSucceeded(resp.data))
        })
    }
}

const fetchUserSucceeded = (currentUser) => {
    return {
        type: 'FETCH_USER_SUCCEEDED',
        payload: { currentUser }
    }
}