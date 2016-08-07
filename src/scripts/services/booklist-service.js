import $ from 'jquery';

import axios from 'axios';
import store from '../store';
import { getBooklistAction, removeBookAction, searchBooklistAction } from '../actions/action-creator';

export function getBooklist() {

  return $.ajax({
      url: "http://localhost:3001/booklist",
      dataType: 'json'
    })
    .done (function(response) { 
      store.dispatch(getBooklistAction(response));
    })
    .fail (function() { 
      console.log("Error"); 
    });

}

export function searchBooklist(searchTitle) {

  const serverUrl = "http://localhost:3001";
  let requestUrl = serverUrl + "/master-booklist";

  let params = {
    title: searchTitle
  }

  if (searchTitle === "*") { 
    params = "";
  }

 return $.ajax({
    type: "GET",
    url: requestUrl,
    dataType: 'json',
    data: params
  })
  .done (function(response) { 
    store.dispatch(searchBooklistAction("title", response));
  })
  .fail (function() { 
    console.log("Error"); 
  });
}

export function deleteBook(id) {
  return axios.delete('http://localhost:3001/booklist/' + id)
    .then(() => {
      store.dispatch(removeBookAction(id));
    });
}