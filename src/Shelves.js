import React from 'react';
import Books from './Books';

const Shelves = props => {
  const { books, handleShelfChange } = props;

  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelfTypes.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              {/*If there is a book in a shelf, display it otherwise, display no books */}
            {shelfBooks.length===0?
            <div>
              <p>No books to display....</p>
            <p>Select a book and add it to this category</p>
            </div>:
            <Books books={shelfBooks} handleShelfChange={handleShelfChange}/>
            }
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shelves;
