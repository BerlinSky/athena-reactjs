import React from 'react';
import { hashHistory, Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import mainLayout from './components/layouts/main-layout';

import booksLayout from './components/layouts/books-layout';
import authorsLayout from './components/layouts/authors-layout';
import clubsLayout from './components/layouts/clubs-layout';

import booksContainer from './components/containers/books-container';
import authorsContainer from './components/containers/authors-container';
import clubsContainer from './components/containers/clubs-container';

const router = (
  <Router history={browserHistory}>
    <Redirect from="/" to="/books" />
    
    <Route path="/" component={mainLayout}>
	    <Route path="books" component={booksLayout}>
				<IndexRoute component={booksContainer} />
	    </Route> 

	    <Route path="authors" component={authorsLayout}>
				<IndexRoute component={authorsContainer} />
	    </Route> 

	    <Route path="clubs" component={clubsLayout}>
				<IndexRoute component={clubsContainer} />
	    </Route>
    </Route>
  </Router>
)

export default router;