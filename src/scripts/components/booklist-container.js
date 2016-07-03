import React from 'react';
import $ from 'jquery';

import BooklistPanel from "./booklist-panel";

export default class BooklistContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      booklist: []
    };
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
}

BooklistContainer.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}
