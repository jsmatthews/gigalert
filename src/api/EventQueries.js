import gql from 'graphql-tag'

// Return found events with all attributes
export const eventsQuery = gql`
query fetchEvents($id: Int, $title: String, $location: String, $artistId:Int, $date: String){
    events(id: $id, title: $title, location: $location, artistId: $artistId, date: $date) {
        id
        title
        location
        artistId
        date
    }
}`

export const fetchEventQuery = gql`
query fetchEvent($id: Int, $title: String, $location: String, $artistId:Int, $date: String){
    event(id: $id, title: $title, location: $location, artistId: $artistId, date: $date) {
        id
        title
        location
        artistId
        date
    }
}`

// TODO(JM): Update to include artist ID
export const fetchArtistEventsQuery = gql`
query fetchEvents ($id: Int, $title: String, $location: String, $artistId:Int, $date: String){
    event(id: $id, title: $title, location: $location, artistId: $artistId, date: $date) {
        id
        title
        location
        artistId
        date
    }
}`