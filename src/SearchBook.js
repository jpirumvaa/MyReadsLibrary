import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

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
        const {books,handleShelfChange}= this.props
        const booksToShow= query===""?null: books.filter((b)=>{
            return b.title.toLowerCase().includes(query.toLowerCase()) || 
            b.authors&&
            b.authors.map((author)=>author.toLowerCase().includes(query.toLowerCase()))
        })
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    
                        <div className="search-books-input-wrapper">
                            
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
                            <Book
                            book={book}
                            books={books}
                            handleShelfChange={handleShelfChange}
                        />
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
