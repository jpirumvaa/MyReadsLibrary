import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SearchBook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            query: ""
        }
    }
    updateQuery= (query)=>{
        this.setState(()=>({
            query: query
        }))
    }

    render() {
        const {query}= this.state
        const {books}= this.props
        const booksToShow= query===""?null: books.filter((b)=>{
            return b.title.toLowerCase().includes(query.toLowerCase()) || 
            b.authors[0].toLowerCase().includes(query.toLowerCase())
        })
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event)=>this.updateQuery(event.target.value)}/>
                        </div>
                </div>
                <div className="search-books-results">
                    {booksToShow===null?
                    <div className="welcome-note">
                        <img alt="Library Home" src='https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                        <h2>Welcome to the Library!</h2>
                        <p>You currently have no books to display. Search books by <strong>Author</strong> or <strong>Title</strong></p>
                        <p>Choose your favorite book and enjoy reading!</p>
                    </div>:
                        <ol className="books-grid">
                        {booksToShow.map((book)=>(
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors[0]}</div>
                                </div>
                            </li>
                            )   
                            )}
                        </ol>
                    }
                
                </div>
            </div> 
            
        )
    }
}

export default SearchBook
