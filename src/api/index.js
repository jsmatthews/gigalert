//@flow
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { usersQuery, signUpUserMutation } from './UserQueries'
import { artistsQuery } from './ArtistQueries'
import { eventsQuery } from './EventQueries'

export const ac = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:1337/graphql/', }),
	cache: new InMemoryCache()
})

// Artists
export const fetchAllArtists = () => (ac.query({ query: artistsQuery, variables: { detailed: false } }))
export const fetchAllEvents = () => (ac.query({ query: eventsQuery, variables: {} }))
export const fetchArtist = (id: number) => (ac.query({ query: artistsQuery, variables: { id, detailed: true } }))
export const fetchArtistsByKeyword = (name: string) => (ac.query({ query: artistsQuery, variables: { name, detailed: false } }))

// Events
export const fetchArtistEvents = (artistId: number) => (ac.query({ query: eventsQuery, variables: { artistId } }))
export const fetchEvent = (id: number) => (ac.query({ query: eventsQuery, variables: { id } }))

// Users
export const signUpUser = ({ email, password }: { email: string, password: string }) => (ac.mutate({ mutation: signUpUserMutation, variables: { email, password } }))
export const loginUser = ({ email, password }: { email: string, password: string }) => (ac.query({ query: usersQuery, variables: { email, password } }))
export const logOutUser = (id: number) => (ac.query({ query: usersQuery, variables: { id } }))

export const fetchUser = (id: number) => (ac.query({ query: usersQuery, variables: { id } }))
export const verifyUser = (id: number) => (ac.query({ query: usersQuery, variables: { id } }))
