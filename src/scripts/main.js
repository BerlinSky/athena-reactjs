import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { hashHistory, Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Layout from './layout/layout'
import Landing from './pages/landing'

const app = (
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="/landing" />
      <Route path="/" component={Layout}>
        <IndexRoute component={Landing}>
        </IndexRoute>
        <Route path="landing" component={Landing} />
      </Route>
    </Router>
  </Provider>
)

$(function() {
  ReactDOM.render(
    app,
    document.getElementById('react-app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})




