import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export function fetchAllArtists() {
    return client.get('/artists');
}

export function fetchAllEvents() {
    return client.get('/events');
}

export function fetchArtist(artistId) {
    return client.get(`/artists/${artistId}`);
}

export function fetchArtistEvents(artistId){
    return client.get(`/events?artistId=${artistId}`);
}

export function signUpUser({email, password}){
    return client.post(`/users`, {email: email, password: password})
}