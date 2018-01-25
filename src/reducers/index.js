//@flow

import type { Artist } from '../api/ArtistQueries'
import type { Event } from '../api/EventQueries'
import type { User } from '../api/UserQueries'

export type dispatch = {
    dispatch: Function;
}

type Action = {
    type: string;
    payload: {
        type: string;
        keyword: string;
        artists: Array<Artist>;
        artist: Artist;
        events: Array<Event>;
        event: Event;
    }
}

export type AppState = {
    searchBarValue: string;
    displaySearch: boolean;
    displayLoginModal: boolean;
    displaySignupModal: boolean;
    userMenuDisplayed: boolean;
}

type ArtistState = {
    artists: Array<Artist>;
    artistProfile: Artist;
    artistEvents: Array<Event>;
    artistsError: any;
    searchedArtists: Array<Event>;
}

type EventState = {
    event: Event;
    events: Array<Event>;
    eventsError: any;
}

type UserState = {
    isReady: boolean;
    currentUser: User;
    isLoggedIn: boolean;
    userError: any;
}

const defaultApp: AppState = {
    searchBarValue: "",
    displaySearch: false,
    displayLoginModal: false,
    displaySignupModal: false,
    userMenuDisplayed: false
}

const defaultArtists: ArtistState = {
    artists: [],
    artistProfile: {},
    artistEvents: [],
    artistsError: null,
    searchedArtists: []
}

const defaultEvents: EventState = {
    event: {},
    events: [],
    eventsError: null
}

const defaultUsers = {
    isReady: false,
    currentUser: {},
    isLoggedIn: false,
    userError: null
}



export function appReducer(state: AppState = defaultApp, action: Action) {
    switch (action.type) {
        case 'DISPLAY_MODAL': return { ...state, [action.payload.type]: true }
        case 'HIDE_MODAL': return { ...state, [action.payload.type]: false }
        case 'DISPLAY_USER_MENU': return { ...state, userMenuDisplayed: true }
        case 'HIDE_USER_MENU': return { ...state, userMenuDisplayed: false }

        case 'UPDATE_SEARCH_BAR_VALUE': return { ...state, searchBarValue: action.payload.keyword }
        case 'CLEAR_SEARCH_BAR_VALUE': return { ...state, searchBarValue: "" }
        case 'DISPLAY_SEARCH_LIST': return { ...state, displaySearch: true }
        case 'HIDE_SEARCH_LIST': return { ...state, displaySearch: false }

        default: return state;
    }
}

export function artistsReducer(state: ArtistState = defaultArtists, action: Action) {
    switch (action.type) {
        case 'FETCH_ALL_ARTISTS_SUCCEEDED': return { ...state, artists: action.payload.artists }
        case 'FETCH_ARTIST_SUCCEEDED': return { ...state, artistProfile: action.payload.artist };
        case 'FETCH_ARTIST_EVENTS_SUCCEEDED': return { ...state, artistEvents: action.payload.events };
        case 'FETCH_ARTISTS_BY_KEYWORD_SUCCEEDED': return { ...state, searchedArtists: action.payload.artists };

        case 'FETCH_ARTIST_FAILED':
        case 'FETCH_ARTIST_EVENTS_FAILED':
        case 'FETCH_ALL_ARTISTS_FAILED': return { ...state, artistsError: action.payload }
        case 'FETCH_ARTISTS_BY_KEYWORD_FAILED': return { ...state, artistsError: action.payload }

        case 'CLEAR_SEARCHED_ARTISTS': return { ...state, searchedArtists: [] }

        default: return state;
    }
}

export function eventsReducer(state: EventState = defaultEvents, action: Action) {
    switch (action.type) {
        case 'FETCH_ALL_EVENTS_SUCCEEDED': return { ...state, events: action.payload.events }
        case 'FETCH_ALL_EVENTS_FAILED': return { ...state, eventsError: action.payload }

        case 'FETCH_EVENT_SUCCEEDED': return { ...state, event: action.payload.event }
        case 'FETCH_EVENT_FAILED': return { ...state, eventsError: action.payload }

        default: return state;
    }
}

export function usersReducer(state: UserState = defaultUsers, action: Action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCEEDED':
        case 'USER_SIGNUP_SUCCEEDED': return { ...state, ...action.payload, isLoggedIn: true };

        case 'USER_LOGIN_FAILED':
        case 'USER_SIGNUP_FAILED': return { ...state, userError: action.payload, isLoggedIn: false };

        case 'USER_LOGOUT_SUCCEEDED': return { ...state, currentUser: {}, isLoggedIn: false };
        case 'USER_LOGOUT_FAILED': return { ...state, isLoggedIn: true };

        case 'FETCH_USER_SUCCEEDED': return { ...state, ...action.payload };
        case 'FETCH_USER_FAILED': return { ...state, userError: action.payload };

        case 'VERIFY_USER_SUCCEEDED': return { ...state, ...action.payload, isLoggedIn: true, isReady: true };
        case 'VERIFY_USER_FAILED': return { ...state, currentUser: {}, isLoggedIn: false, isReady: true };

        default: return state;
    }
}