import gql from 'graphql-tag';

export type Event = {
    id: number;
    title: string;
    location: string;
    artistId: number;
    date: string;
}

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