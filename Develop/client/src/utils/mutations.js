import {gql} from "@apollo/client"

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        user{
            _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email, String!){
    addUser(username: $username, password: $password, email: $email){
        user{
            _id
            username
            email
            bookCount
            savedBooks{
                _id
                bookdId
                description
                title
                image
                link
                author
            }
        }
        token
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: bookInput){
    saveBook(book: $book){
        username
        email
        bookCount
        savedBooks{
            bookId
            description
            title
            image
            link
            authors
        }
    }
}


`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        username
        email
        bookCount
        savedBooks{
            bookId
            description
            title
            image
            link
            authors
        }
    }
}
`;



