import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { usersQuery } from './UserQueries'
import { artistsQuery, addArtist } from './ArtistQueries'
import { eventsQuery } from './EventQueries'

export const ac = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:1337/graphql/", }),
    cache: new InMemoryCache()
});

// Artists
export const fetchAllArtists = () => (ac.query({ query: artistsQuery, variables: { detailed: false } }))
export const fetchAllEvents = () => (ac.query({ query: eventsQuery, variables: {} }))
export const fetchArtist = (id) => (ac.query({ query: artistsQuery, variables: { id, detailed: true } }))
export const fetchArtistsByKeyword = (name) => (ac.query({ query: artistsQuery, variables: { name, detailed: false } }))

export const postAddArtist = (id, name) => (ac.query({ query: artistsQuery, variables: { id, name } }))

// Events
export const fetchArtistEvents = (artistId) => (ac.query({ query: eventsQuery, variables: { artistId } }))

// Users
export const signUpUser = ({ email, password }) => (ac.query({ query: usersQuery, variables: { email, password } }))
export const loginUser = ({ email, password }) => (ac.query({ query: usersQuery, variables: { email, password } }))
export const logOutUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))

export const fetchUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))
export const verifyUser = (id) => (ac.query({ query: usersQuery, variables: { id } }))
