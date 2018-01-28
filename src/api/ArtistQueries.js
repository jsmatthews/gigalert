import gql from 'graphql-tag';
import type { Event } from './EventQueries'

export type Artist = {
    id: number;
    name: string;
    description?: string;
    events: Event[]
}

// Return found artists with all attributes
export const artistsQuery = gql`
query fetchArtists($id: Int, $name: String, $description: String, $detailed: Boolean!){
    artists(id: $id, name: $name, description: $description) {
        id
        name
        description @include(if: $detailed)
    }
}`

// Return single artist including artist events
export const fetchArtistQuery = gql`
query fetchArtist($id: Int){
    artist(id: $id) {
        id
        name
        description
        events {
            id
            title
            location
            date
        }
    }
}`

export type CreatedArtist = {
    id: number;
    name: string;
}

export const addArtist = gql`
query AddArtist($id: Int, $name: String, $description: String, $detailed: Boolean!){
    addArtist(id: $id, name: $name, description: $description) {
        id
        name
    }
}`