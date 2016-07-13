import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from "./router";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

const provider = (
  <Provider store={store}>
    {router}
  </Provider>
);

$(function() {
  console.log('store: ', store.getState());

  ReactDOM.render(
    provider,
    document.getElementById('react-app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})

