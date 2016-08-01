import React from 'react';
import SearchPanel from '../views/search-panel';
import BooklistPanel from "../views/booklist-panel";

import { connect } from 'react-redux';
import store from '../../store';
import * as dataService from '../../services/booklist-service';

export default class SearchContainer extends React.Component {
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
      <section className="l-mainContent mainContent">

				<SearchPanel onSearch={ this._searchByTitle } />

	      <div className="panelContainer">
	        { booklist }
	      </div>

      </section>
    )
  }

  _getBooklist() {
    return this.props.booklist.map((book) => {
      return <BooklistPanel
              {...book}
              key={book.id} />
    });
  }

  _fetchBooklist() {
    // dataService.getBooklist();
    dataService.searchBooklist('');
  }

  _searchByTitle(bookTitle) {
  	console.log("search => ", bookTitle);
  }

 }

const mapStateToProps = function(store) {
  return {
    booklist: store.booklistState.booklist
  };
};

export default connect(mapStateToProps)(SearchContainer);

