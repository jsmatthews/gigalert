import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { usersQuery, signUpUserMutation } from './UserQueries'
import { artistsQuery, fetchArtistQuery } from './ArtistQueries'
import { eventsQuery, fetchEventQuery, fetchArtistEventsQuery } from './EventQueries'

export const ac = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:1337/graphql/', }),
	cache: new InMemoryCache()
})

// Artists
export const fetchAllArtists = () => (ac.query({ query: artistsQuery, variables: { detailed: false } }))
export const fetchAllEvents = () => (ac.query({ query: eventsQuery, variables: {} }))
export const fetchArtist = (id) => (ac.query({ query: fetchArtistQuery, variables: { id } }))
export const fetchArtistEvents = (id) => (ac.query({ query: fetchArtistEventsQuery, variables: { id } }))
export const fetchArtistsByKeyword = (name) => (ac.query({ query: artistsQuery, variables: { name, detailed: false } }))

// Events
export const fetchEvent = (id) => (ac.query({ query: fetchEventQuery, variables: { id } }))

// Users
export const signUpUser = ({ email, password }) => (ac.mutate({ mutation: signUpUserMutation, variables: { email, password } }))
export const loginUser = ({ email, password }) => (ac.query({ query: usersQuery, variables: { email, password } }))
export const logOutUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))

export const fetchUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))
export const verifyUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))
