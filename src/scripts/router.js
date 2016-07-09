import React from 'react';
import { hashHistory, Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import layout from './layout/layout';
import booksLanding from './pages/books-landing';
import authorsLanding from './pages/authors-landing';
import clubsLanding from './pages/clubs-landing';

const router = (
  <Router history={browserHistory}>
    <Redirect from="/" to="/books" />
    <Route path="/" component={layout}>
      <IndexRoute component={booksLanding} />
      <Route path="books" component={booksLanding} />
      <Route path="authors" component={authorsLanding} />
      <Route path="clubs" component={clubsLanding} />
    </Route>
  </Router>
)

export default router;