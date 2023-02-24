import { gql } from "@apollo/client";

export const GET_ME = gql `

query me{
    _id
    username
    email
    bookCount
    savedBooks: {
        _id
        bookId
        description
        title
        image
        link
        authors
    }
}
`