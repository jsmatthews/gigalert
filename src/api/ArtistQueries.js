// Return found artists with all attributes
export const artistsQuery = gql`
query fetchArtists($id: Int, $name: String, $description: String){
    artists(id: $id, name: $name, description: $description) {
        id
        name
        description
    }
}`