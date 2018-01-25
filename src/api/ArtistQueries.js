import gql from 'graphql-tag';

export type Artist = {
    id: number;
    name: string;
    description?: string;
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