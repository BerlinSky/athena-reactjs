import React from 'react';
import { hashHistory, Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import layout from './layout/layout';
import bookLanding from './pages/books-landing';

const router = (
  <Router history={browserHistory}>
    <Redirect from="/" to="/books" />
    <Route path="/" component={layout}>
      <IndexRoute component={bookLanding} />
      <Route path="books" component={bookLanding} />
    </Route>
  </Router>
)

export default router;