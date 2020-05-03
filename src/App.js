import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Reading from './Reading'
import Read from './Read'
import WantToRead from './WantToRead'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      books: [],
      shelf: 'None'
    }
  };
  handleShelfChange= (event)=>{
    {/*Here is the problem because the function isn't updating the state of shelf to match the value of selected shelf */};
    console.log(event)
    this.setState(()=>({
      shelf: event.target.value
      
    }))
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }

  render() {
    const {books, handleShelfChange, shelf}=this.state
    
    return (
      <div className="app">

          <Route exact path='/' render={()=>(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Reading books={books} 
                shelf={shelf}
                onShelfChange={handleShelfChange}/>
                <WantToRead books={books} 
                shelf={shelf}
                onShelfChange={handleShelfChange}/>/>

                <Read books={books} 
                shelf={shelf}
                onShelfChange={handleShelfChange}/>
                
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
            <SearchBook books={books}/>
          )
            
          }/>
      </div>
    )
  }
}

export default BooksApp
