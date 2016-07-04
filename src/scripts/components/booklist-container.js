import React from 'react';
import $ from 'jquery';

import BooklistPanel from "./booklist-panel";

export default class BooklistContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      booklist: []
    };

    this._removeBook = this._removeBook.bind(this);
  }


  componentWillMount() {
    this._fetchBooklist();
  }

  render() {
    const booklist = this._getBooklist();

    return (
      <div className="panelContainer">
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
}

BooklistContainer.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}
