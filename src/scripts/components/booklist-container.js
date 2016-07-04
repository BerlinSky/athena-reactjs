import React from 'react';
import $ from 'jquery';

import BooklistPanel from "./booklist-panel";
import BooklistForm from "./booklist-form";

export default class BooklistContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      booklist: []
    };

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
    return this.state.booklist.map((book) => {
      return <BooklistPanel
              {...book}
              onRemove={this._removeBook}
              key={book.id} />
    });
  }

  _fetchBooklist() {
    $.ajax({
      method: 'GET',
      url: this.props.apiUrl,
      success: (booklist) => {
        this.setState({ booklist })

      console.info('booklist', booklist.length);
      }
    });
  }

  _removeBook(bookId) {
    const booklist = this.state.booklist.filter (
      book => book.id !== bookId
    );

    this.setState({ booklist });
  }

  _addBook(title, author, description, imageUrl) {
    console.log('title', title);

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

BooklistContainer.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}
