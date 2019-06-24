import React, { Component } from 'react';
import './App.css';

import AddBookmark from './addBookmark/AddBookmark';
import BookmarkApp from './bookmarkApp/bookmarkApp';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }
  setShowAddForm(show){
    this.setState({
      showAddForm: show
    })
  }
  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    });
  }
  componentDidMount(){
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks'
    const options = {
      method: 'GET',
      headers: {
        // Add your key after Bearer
        "Authorization": "Bearer $2a$10$PMYEd8k79e3u0o/jXPbcX.0.zd8fTYXxZKnjY1hdi7U3xSy32RUkO",
        "Content-Type": "application/json"
      }
    }
    fetch(url, options)
      .then(res => {
        if (!res.ok){
          throw new Error('Something went horribly wrong')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }
  render() {
    const page = this.state.showAddForm
          ? <AddBookmark 
              showForm={show => this.setShowAddForm(show)}
              handleAdd={bookmark => this.addBookmark(bookmark)}
            />
          : <BookmarkApp 
              bookmarks={this.state.bookmarks}
              showForm={show => this.setShowAddForm(show)}
            />;
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
