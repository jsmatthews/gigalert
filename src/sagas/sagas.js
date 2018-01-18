import { call, all, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api/index'

import { login_modal_type, signup_modal_type } from '../constants'

function* fetchUser(action) {
    try {
        const { data } = yield call(api.fetchUser, action.payload.userId);
        yield put({ type: "FETCH_USER_SUCCEEDED", payload: { user: data.user } });
    } catch (e) {
        yield put({ type: "FETCH_USER_FAILED", message: e.message });
    }
}

function* verifyUser(action) {
    try {
        const { data } = yield call(api.verifyUser, action.payload.userId);
        if (data.users[0] === undefined) throw new Error("User not found");
        yield put({ type: "VERIFY_USER_SUCCEEDED", payload: { currentUser: data.users[0] } });
    } catch (e) {
        yield put({ type: "VERIFY_USER_FAILED", message: e.message });
    }
}

function* signUp(action) {
    try {
        const { data } = yield call(api.signUpUser, action.payload.userInfo)
        yield put({ type: 'USER_SIGNUP_SUCCEEDED', payload: { currentUser: data.users[0] } })
        yield put({ type: 'HIDE_MODAL', payload: { type: signup_modal_type } })
    } catch (e) {
        yield put({ type: 'USER_SIGNUP_FAILED', payload: e.message })
    }
}

function* logIn(action) {
    try {
        const { data } = yield call(api.loginUser, action.payload.userInfo)
        yield put({ type: "USER_LOGIN_SUCCEEDED", payload: { currentUser: data.users[0] } })
        yield put({ type: 'HIDE_MODAL', payload: { type: login_modal_type } })
    } catch (e) {
        yield put({ type: "USER_LOGIN_FAILED", payload: e.message })
    }
}

function* logOut(action) {
    try {
        yield call(api.logOutUser, action.payload.userId);
        yield put({ type: "USER_LOGOUT_SUCCEEDED" })
    } catch (e) {
        yield put({ type: "USER_LOGOUT_FAILED" })
    }
}

function* fetchAllArtists(action) {
    try {
        const { data } = yield call(api.fetchAllArtists)
        yield put({ type: "FETCH_ALL_ARTISTS_SUCCEEDED", payload: { artists: data.artists } })
    } catch (e) {
        yield put({ type: "FETCH_ALL_ARTISTS_FAILED", payload: e.message })
    }
}

function* fetchAllEvents(action) {
    try {
        const { data } = yield call(api.fetchAllEvents)
        yield put({ type: "FETCH_ALL_EVENTS_SUCCEEDED", payload: { events: data.events } })
    } catch (e) {
        yield put({ type: "FETCH_ALL_EVENTS_FAILED", payload: e.message })
    }
}

function* fetchArtist(action) {
    try {
        const { data } = yield call(api.fetchArtist, action.payload.artistId)
        yield put({ type: "FETCH_ARTIST_SUCCEEDED", payload: { artist: data.artists[0] } })
    } catch (e) {
        yield put({ type: "FETCH_ARTIST_FAILED", payload: e.message })
    }
}

function* fetchArtistEvents(action) {
    try {
        const { data } = yield call(api.fetchArtistEvents, action.payload.artistId)
        yield put({ type: "FETCH_ARTIST_EVENTS_SUCCEEDED", payload: { events: data.events } })
    } catch (e) {
        yield put({ type: "FETCH_ARTIST_EVENTS_FAILED", payload: e.message })
    }
}

function* searchDatabase(action) {
    try {
        const { data } = yield call(api.fetchArtistsByKeyword, action.payload.keyword)
        yield put({ type: "FETCH_ARTISTS_BY_KEYWORD_SUCCEEDED", payload: { artists: data.artists } })
    } catch (e) {
        yield put({ type: "FETCH_ARTISTS_BY_KEYWORD_FAILED", payload: e.message })
    }
}

function* watchAppRequests() {
    yield takeEvery("SEARCH_DATABASE", searchDatabase)
}

function* watchUserRequests() {
    yield takeEvery("FETCH_USER_REQUESTED", fetchUser)
    yield takeEvery("VERIFY_USER_REQUESTED", verifyUser)
    yield takeEvery("USER_LOGOUT_REQUESTED", logOut)
    yield takeEvery("USER_LOGIN_REQUESTED", logIn)
    yield takeEvery("USER_SIGNUP_REQUESTED", signUp)
}

function* watchArtistRequests() {
    yield takeEvery("FETCH_ARTIST_EVENTS_REQUESTED", fetchArtistEvents)
    yield takeEvery("FETCH_ALL_ARTISTS_REQUESTED", fetchAllArtists)
    yield takeEvery("FETCH_ARTIST_REQUESTED", fetchArtist)
}

function* watchEventRequests() {
    yield takeEvery("FETCH_ALL_EVENTS_REQUESTED", fetchAllEvents)
}

export default function* rootSaga() {
    yield all([
        watchAppRequests(),
        watchUserRequests(),
        watchArtistRequests(),
        watchEventRequests()
    ])
}