import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      books: [],
    }
  };

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  handleShelfChange = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== changedBook.id).concat(changedBook)
      }));
    });
  };

  

  render() {
    const {books}=this.state    
    return (
      <div className="app">

          <Route exact path='/' render={()=>(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelves books={books} 
                handleShelfChange={this.handleShelfChange}/>
                
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
          )}/>

          <Route path='/search' render={()=>(
            <SearchBook books={books}
            handleShelfChange={this.handleShelfChange}/>
          )
            
          }/>
      </div>
    )
  }
}

export default BooksApp
