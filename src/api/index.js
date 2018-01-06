import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Artists
export const fetchAllArtists = () => (client.get('/artists'))
export const fetchAllEvents = () => (client.get('/events'))
export const fetchArtist = (artistId) => (client.get(`/artists/${artistId}`))
export const fetchArtistsByKeyword = (keyword) => (client.get(`/artists?name=${keyword}`))

// Events
export const fetchArtistEvents = (artistId) => (client.get(`/events?artistId=${artistId}`))

// Users
export const signUpUser = ({email, password}) => (client.post(`/users`, { email: email, password: password }))
export const loginUser = ({ email, password }) => (client.get(`/users?email=${email}&password=${password}`))
export const fetchUser = (userId) => (client.get(`/users/${userId}`))
export const verifyUser = (userId) => (client.get(`/users?id=${userId}`))
export const logOutUser = (userId) => (client.get(`/users?id=${userId}`))