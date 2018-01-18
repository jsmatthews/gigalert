import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { usersQuery } from './UserQueries'
import { artistsQuery } from './ArtistQueries'
import { eventsQuery } from './EventQueries'

export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:1337/graphql/", }),
    cache: new InMemoryCache()
});


// Artists
export const fetchAllArtists = () => (apolloClient.query({ query: artistsQuery, variables: {} }))
export const fetchAllEvents = () => (apolloClient.query({ query: eventsQuery, variables: {} }))
export const fetchArtist = (id) => (apolloClient.query({ query: artistsQuery, variables: { id } }))
export const fetchArtistsByKeyword = (name) => (apolloClient.query({ query: artistsQuery, variables: { name } }))

// Events
export const fetchArtistEvents = (artistId) => (apolloClient.query({ query: eventsQuery, variables: { artistId } }))

// Users
export const signUpUser = ({ email, password }) => (apolloClient.query({ query: usersQuery, variables: { email, password } }))
export const loginUser = ({ email, password }) => (apolloClient.query({ query: usersQuery, variables: { email, password } }))

export const fetchUser = (id) => (apolloClient.query({ query: usersQuery, variables: { id } }))
export const verifyUser = (id) => (apolloClient.query({ query: usersQuery, variables: { id } }))
export const logOutUser = (id) => (apolloClient.query({ query: usersQuery, variables: { id } }))