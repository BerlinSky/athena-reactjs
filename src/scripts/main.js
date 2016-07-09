import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from "./router";
// import { hashHistory, Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';

// import store, { history } from './store';

// import App from './layout/app';
// import Layout from './layout/layout';
// import bookLanding from './pages/books-landing';

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Redirect from="/" to="/books" />
//       <Route path="/" component={App}>
//         <IndexRoute component={bookLanding} />
//         <Route path="books" component={bookLanding} />
//       </Route>
//     </Router>
//   </Provider>
// )

$(function() {
  ReactDOM.render(
    router,
    document.getElementById('react-app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})




