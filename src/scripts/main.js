import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from "./router";

$(function() {
  ReactDOM.render(
    router,
    document.getElementById('react-app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})

