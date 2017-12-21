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
        api.signUpUser(userInfo).then(resp => {
            dispatch(signUpSucceeded());
        })
    }
}

const signUpSucceeded = () => {
    return {
        type: 'SIGN_UP_USER_SUCCEEDED',
    }
}

const signUpFailed = () => {
    return {
        type: 'SIGN_UP_USER_FAILED',
    }
}