import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Artists
export function fetchAllArtists() {
    return client.get('/artists');
}

export function fetchAllEvents() {
    return client.get('/events');
}

export function fetchArtist(artistId) {
    return client.get(`/artists/${artistId}`);
}

// Events
export function fetchArtistEvents(artistId) {
    return client.get(`/events?artistId=${artistId}`);
}


// Users
export function signUpUser({ email, password }) {
    return client.post(`/users`, { email: email, password: password })
}

export function loginUser({ email, password }) {
    return client.get(`/users?email=${email}&password=${password}`)
}

export function fetchUser(userId) {
    return client.get(`/users/${userId}`);
}


export function verifyUser(userId) {
    //get user token from cookies
    return client.get(`/users?id=${userId}`);
}

export function logOutUser(userId){
    return client.get(`/users?id=${userId}`);
}