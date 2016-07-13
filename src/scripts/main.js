import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from "./router";

import { Provider } from 'react-redux';
import store from './store';

const provider = (
  <Provider store={store}>
    {router}
  </Provider>
);

$(function() {
  ReactDOM.render(
    provider,
    document.getElementById('react-app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})

