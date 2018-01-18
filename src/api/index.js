import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:1337/graphql/", }),
    cache: new InMemoryCache()
});

const usersQuery = gql`
query fetchUsers($id: Int, $name: String, $email: String, $password: String){
    users(id: $id, name: $name, email: $email, password: $password) {
        id
        name
        email
        password
    }
}`

const artistsQuery = gql`
query fetchArtists($id: Int, $name: String, $description: String){
    artists(id: $id, name: $name, description: $description) {
        id
        name
        description
    }
}`

const eventsQuery = gql`
query fetchEvents($id: Int, $title: String, $location: String, $artistId:Int, $date: String){
    events(id: $id, title: $title, location: $location, artistId: $artistId, date: $date) {
        id
        title
        location
        artistId
        date
    }
}`


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