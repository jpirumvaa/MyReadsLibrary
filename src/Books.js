import React, { Component } from 'react'
import Book from './Book'

class Books extends Component {
    
    render() {
        const { books, handleShelfChange} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book
                    book={book}
                    books={books}
                    key={book.id}
                    handleShelfChange={handleShelfChange}
                />
                ))}
            </ol>
        )
    }
}

export default Books


