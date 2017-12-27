export function fetchAllArtists() {
    return {
        type: 'FETCH_ALL_ARTISTS_REQUESTED'
    }
}

export function fetchAllEvents() {
    return {
        type: 'FETCH_ALL_EVENTS_REQUESTED'
    }
}

export function fetchArtist(artistId) {
    return {
        type: 'FETCH_ARTIST_REQUESTED',
        payload: { artistId }
    }
}

export function fetchArtistEvents(artistId) {
    return {
        type: 'FETCH_ARTIST_EVENTS_REQUESTED',
        payload: { artistId }
    }
}

export function signUpUser(userInfo) {
    return {
        type: 'USER_SIGNUP_REQUESTED',
        payload: { userInfo }
    }
}

export function loginUser(userInfo) {
    return {
        type: 'USER_LOGIN_REQUESTED',
        payload: { userInfo }
    }
}

export function verifyUser(userId) {
    return {
        type: 'VERIFY_USER_REQUESTED',
        payload: { userId: userId }
    }
}

export function fetchUser(userId) {
    return {
        type: 'USER_FETCH_REQUESTED',
        payload: { userId: userId }
    }
}


export function logOutUser(userId) {
    return {
        type: 'USER_LOGOUT_REQUESTED',
        payload: { userId: userId }
    }
}

export function displayModal(type) {
    return {
        type: 'DISPLAY_MODAL',
        payload: { type }
    }
}

export function hideModal(type) {
    return {
        type: 'HIDE_MODAL',
        payload: { type }
    }
}