import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import request from 'superagent';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBooks = (e) => {
        e.preventDefault();
        request
        .get('https://www.googleapis.com/books/v1/volumes')
        .query({q: this.searchField})
        .then((data) => {
            console.log(data);

        })


    }
    
handSearch = (e) => {
    this.setState({ searchField: e.target.value})
}
  render() {
      return(
    <div>  
        <Search searchBooks={this.searchBooks} handSearch={this.handSearch}/>      
    </div>
  );
}
}

export default Books;