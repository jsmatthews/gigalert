const defaultApp = {
    displayLoginModal: false,
    displaySignupModal: false
}

const defaultArtists = {
    artists: [],
    artistProfile: {},
    artistEvents: []
}

const defaultEvents = {
    events: []
}

const defaultUsers = {
    isReady: false,
    currentUser: {},
    isLoggedIn: false
}

export function appReducer(state = defaultApp, action) {
    switch (action.type) {
        case 'DISPLAY_MODAL': {
            return { ...state, [action.payload.type]: true }
        }
        case 'HIDE_MODAL': {
            return { ...state, [action.payload.type]: false }
        }
        default: {
            return state;
        }
    }
}

export function artistsReducer(state = defaultArtists, action) {
    switch (action.type) {
        case 'FETCH_ALL_ARTISTS_SUCCEEDED': {
            return { ...state, artists: action.payload.artists }
        }
        case 'FETCH_ALL_ARTISTS_FAILED': {
            console.log(action.payload)
            return { ...state }
        }
        case 'FETCH_ARTIST_SUCCEEDED': {
            return { ...state, artistProfile: action.payload.artist };
        }
        case 'FETCH_ARTIST_FAILED': {
            console.log(action.payload)
            return { ...state };
        }
        case 'FETCH_ARTIST_EVENTS_SUCCEEDED': {
            return { ...state, artistEvents: action.payload.events };
        }
        case 'FETCH_ARTIST_EVENTS_FAILED': {
            console.log(action.payload)
            return { ...state };
        }
        default: {
            return state;
        }
    }
}

export function eventsReducer(state = defaultEvents, action) {
    switch (action.type) {
        case 'FETCH_ALL_EVENTS_SUCCEEDED': {
            return { ...state, events: action.payload.events }
        }
        case 'FETCH_ALL_EVENTS_FAILED': {
            console.log(action.payload)
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export function usersReducer(state = defaultUsers, action) {
    switch (action.type) {
        case 'USER_SIGNUP_SUCCEEDED': {
            return { ...state, ...action.payload, isLoggedIn: true };
        }
        case 'USER_SIGNUP_FAILED': {
            return { ...state, ...action.payload, isLoggedIn: false };
        }

        case 'USER_LOGIN_SUCCEEDED': {
            return { ...state, ...action.payload, isLoggedIn: true };
        }
        case 'USER_LOGIN_FAILED': {
            return { ...state, ...action.payload, isLoggedIn: false };
        }

        case 'USER_LOGOUT_SUCCEEDED': {
            return { ...state, currentUser: {}, isLoggedIn: false };
        }
        case 'USER_LOGOUT_FAILED': {
            return { ...state, isLoggedIn: true };
        }

        case 'FETCH_USER_SUCCEEDED': {
            return { ...state, ...action.payload };
        }
        case 'FETCH_USER_FAILED': {
            console.log(action.payload)
            return { ...state };
        }
        case 'VERIFY_USER_SUCCEEDED': {
            return { ...state, ...action.payload, isLoggedIn: true, isReady: true };
        }
        case 'VERIFY_USER_FAILED': {
            return { ...state, currentUser: {}, isLoggedIn: false, isReady: true };
        }

        default: {
            return state;
        }
    }
}