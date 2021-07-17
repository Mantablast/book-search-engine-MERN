// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
// ADD_USER will execute the addUser mutation.
// SAVE_BOOK will execute the saveBook mutation.
// REMOVE_BOOK will execute the removeBook mutation.
import gql from "graphql-tag";

//save and delete books from list,  similar to the get me query
export const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBookInput!) {
        saveBook(book: $book) {
            username
            email
            bookCount

            savedBooks {
                authors
                description
                bookId
                image
                title
                link
            }
        }
    }
`;
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            email
            bookCount

            savedBooks {
                authors
                description
                bookId
                image
                title
                link
            }
        }
    }
`;
