import { call, all, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api/index'

import { login_modal_type, signup_modal_type } from '../constants'

function* fetchUser(action) {
    try {
        const user = yield call(api.fetchUser, action.payload.userId);
        yield put({ type: "FETCH_USER_SUCCEEDED", payload: user });
    } catch (e) {
        yield put({ type: "FETCH_USER_FAILED", message: e.message });
    }
}

function* verifyUser(action) {
    try {
        const user = yield call(api.verifyUser, action.payload.userId);
        yield put({ type: "VERIFY_USER_SUCCEEDED", payload: { currentUser: user.data[0] } });
    } catch (e) {
        yield put({ type: "VERIFY_USER_FAILED", message: e.message });
    }
}

function* signUp(action) {
    try {
        const signedUpUser = yield call(api.signUpUser, action.payload.userInfo)
        yield put({ type: 'USER_SIGNUP_SUCCEEDED', payload: signedUpUser })
        yield put({ type: 'HIDE_MODAL', payload: { type: signup_modal_type } })
    } catch (e) {
        yield put({ type: 'USER_SIGNUP_FAILED', payload: e.message })
    }
}

function* logIn(action) {
    try {
        const loggedInUser = yield call(api.loginUser, action.payload.userInfo)
        yield put({ type: "USER_LOGIN_SUCCEEDED", payload: loggedInUser })
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
        const allArtists = yield call(api.fetchAllArtists)
        yield put({ type: "FETCH_ALL_ARTISTS_SUCCEEDED", payload: { artists: allArtists.data } })
    } catch (e) {
        yield put({ type: "FETCH_ALL_ARTISTS_FAILED", payload: e.message })
    }
}

function* fetchAllEvents(action) {
    try {
        const allEvents = yield call(api.fetchAllEvents)
        yield put({ type: "FETCH_ALL_EVENTS_SUCCEEDED", payload: { events: allEvents.data } })
    } catch (e) {
        yield put({ type: "FETCH_ALL_EVENTS_FAILED", payload: e.message })
    }
}

function* fetchArtist(action) {
    try {
        const artist = yield call(api.fetchAllEvents, action.payload.artistId)
        yield put({ type: "FETCH_ARTIST_SUCCEEDED", payload: artist })
    } catch (e) {
        yield put({ type: "FETCH_ARTIST_FAILED", payload: e.message })
    }
}

function* fetchArtistEvents(action) {
    try {
        const artistEvents = yield call(api.fetchArtistEvents, action.payload.artistId)
        yield put({ type: "FETCH_ARTIST_EVENTS_SUCCEEDED", payload: { events: artistEvents.data } })
    } catch (e) {
        yield put({ type: "FETCH_ARTIST_EVENTS_FAILED", payload: e.message })
    }
}


function* watchFetchUser() {
    yield takeEvery("FETCH_USER_REQUESTED", fetchUser)
}

function* watchVerifyUser() {
    yield takeEvery("VERIFY_USER_REQUESTED", verifyUser)
}

function* watchUserLogout() {
    yield takeEvery("USER_LOGOUT_REQUESTED", logOut)
}

function* watchUserLogin() {
    yield takeEvery("USER_LOGIN_REQUESTED", logIn)
}

function* watchUserSignUp() {
    yield takeEvery("USER_SIGNUP_REQUESTED", signUp)
}

function* watchFetchArtistEvents() {
    yield takeEvery("FETCH_ARTIST_EVENTS_REQUESTED", fetchArtistEvents)
}

function* watchFetchAllArtists() {
    yield takeEvery("FETCH_ALL_ARTISTS_REQUESTED", fetchAllArtists)
}

function* watchFetchAllEvents() {
    yield takeEvery("FETCH_ALL_EVENTS_REQUESTED", fetchAllEvents)
}

function* watchFetchArtist() {
    yield takeEvery("FETCH_ARTIST_REQUESTED", fetchArtist)
}

export default function* rootSaga() {
    yield all([
        watchFetchUser(),
        watchVerifyUser(),
        watchUserLogout(),
        watchUserLogin(),
        watchUserSignUp(),
        watchFetchArtistEvents(),
        watchFetchAllArtists(),
        watchFetchAllEvents(),
        watchFetchArtist()
    ])
}