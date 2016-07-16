import React from 'react';
import $ from 'jquery';

import BooklistPanel from "../views/booklist-panel";
import BooklistForm from "../views/booklist-form";

import { connect } from 'react-redux';
import store from '../../store';
import * as dataService from '../../services/booklist-service';

export default class BooksContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      booklist: []
    };

    this.apiUrl = '../data/booklist.json';

    this._removeBook = this._removeBook.bind(this);
    this._addBook = this._addBook.bind(this);
  }

  componentWillMount() {
    this._fetchBooklist();
  } 

  render() {
    const booklist = this._getBooklist();

    return (
      <div className="panelContainer">
        <BooklistForm addBook={ this._addBook } />
        
        { booklist }
      </div>
    )
  }

  _getBooklist() {
    return this.props.booklist.map((book) => {
      return <BooklistPanel
              {...book}
              onRemove={this._removeBook}
              key={book.id} />
    });
  }

  _fetchBooklist() {
    dataService.getBooklist();
  }

  _removeBook(bookId) {
    dataService.deleteBook(bookId);
    // dataService.deleteBook(bookId).then(() => {
    //   const booklist = this.state.booklist.filter (
    //     book => book.id !== bookId
    //   );

    //   this.setState({ booklist: booklist })
    // });
  }

  _addBook(title, author, description, imageUrl) {
    console.log('imageUrl', imageUrl);

    const book = {
      id: this.state.booklist.length + 1,
      title: title,
      author: author,
      description: description,
      imageUrl: imageUrl
    };

    this.setState({
      booklist: this.state.booklist.concat([book])
    });
  }

}

const mapStateToProps = function(store) {
  return {
    booklist: store.booklistState.booklist
  };
};

export default connect(mapStateToProps)(BooksContainer);
