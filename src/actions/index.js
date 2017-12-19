import * as api from '../api/index'

export function fetchArtists() {
    return dispatch => {
        api.fetchAllArtists()
            .then(resp => {
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
        api.fetchAllEvents()
            .then(resp => {
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