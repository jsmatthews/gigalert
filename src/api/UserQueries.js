import gql from 'graphql-tag'

// Return found users with all attributes
export const usersQuery = gql`
query fetchUsers($id: Int, $name: String, $email: String, $password: String){
    users(id: $id, name: $name, email: $email, password: $password) {
        id
        name
        email
    }
}`

export const signUpUserMutation = gql`
mutation signUpUser($email: String, $password: String){
    signUpUser(email: $email, password: $password) {
        email
    }
}`