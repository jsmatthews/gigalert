
const defaultArtists = {
    artists: []
}

const defaultEvents = {
    events: []
}

export function artistsReducer(state = defaultArtists, action) {
    switch (action.type) {
        case 'FETCH_ALL_ARTISTS_SUCCEEDED': {
            return { ...state, artists: action.payload.artists }
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