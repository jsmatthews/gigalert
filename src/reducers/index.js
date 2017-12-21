const defaultArtists = {
    artists: [],
    artistProfile: {},
    artistEvents:[]
}

const defaultEvents = {
    events: []
}

const defaultUsers = {
    currentUser: {}
}

export function artistsReducer(state = defaultArtists, action) {
    switch (action.type) {
        case 'FETCH_ALL_ARTISTS_SUCCEEDED': {
            return { ...state, artists: action.payload.artists }
        }
        case 'FETCH_ARTIST_SUCCEEDED':{
            return {...state, artistProfile: action.payload.artist};
        }
        case 'FETCH_ARTIST_EVENTS_SUCCEEDED':{
            return {...state, artistEvents: action.payload.events};
        }
        default: {
            return state;
        }
    }
}

export function eventsReducer(state = defaultEvents, action){
    switch(action.type){
        case 'FETCH_ALL_EVENTS_SUCCEEDED':{
            return {...state, events: action.payload.events}
        }
        default:{
            return state;
        }
    }
}

export function usersReducer(state = defaultUsers, action) {
    switch (action.type) {
        case 'SIGN_UP_USER_SUCCEEDED':{
            return {...state, ...action.payload};
        }
        case 'SIGN_UP_USER_FAILED':{
            return {...state, ...action.payload};
        }
        case 'LOGIN_USER_SUCCEEDED':{
            return {...state, ...action.payload};
        }
        case 'LOGIN_USER_FAILED':{
            return {...state, ...action.payload};
        }
        case 'FETCH_USER_SUCCEEDED':{
            return {...state, ...action.payload};
        }
        default: {
            return state;
        }
    }
}