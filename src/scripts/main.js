import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';

import Layout from './layout/layout'
import Landing from './pages/landing'


const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/landing" />
    <Route path="/" component={Layout}>
      <Route path="landing" component={Landing} />
    </Route>
  </Router>
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




