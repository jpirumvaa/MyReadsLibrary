import React, { Component } from 'react'


class Book extends Component {
  handleShelfUpdate = e =>
  this.props.handleShelfChange(this.props.book, e.target.value);

  
    render() {
      const {books, book}= this.props


      let currentShelf = 'none';

      for (let b of books) {
        if (b.id === book.id) {
          currentShelf = b.shelf;
          break;
        }
      }
        return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.handleShelfUpdate} defaultValue={currentShelf}>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              
              <div className="book-authors">
              {
              book.authors &&
              book.authors.map((author, index) => (
                <div className="book-authors" key={index}>
                  {author}
                </div>
              ))}
                </div>
            </div>
          </li>                        
        )
    }
}

export default Book
