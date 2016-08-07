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

// export function getBooklist_x() {

//   return axios.get('http://localhost:3001/booklist')
//     .then(response => {
//       store.dispatch(getBooklistAction(response.data));

//       console.log(response.data);

//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

export function searchBooklist(searchTitle) {

  const serverUrl = "http://localhost:3001";
  let requestUrl = serverUrl + "/master-booklist";

  if (searchTitle !== "*") { 
    requestUrl += "?title=";
    requestUrl += searchTitle;
  }

 return $.ajax({
    url: requestUrl,
    dataType: 'json'
  })
  .done (function(response) { 
    store.dispatch(searchBooklistAction("title", response));
  })
  .fail (function() { 
    console.log("Error"); 
  });

  // return axios.get(requestUrl, {
  //     // params: {
  //     //   // title: "Great Expectations"
  //     //   title: searchTitle
  //     // }
  //   })
  //   .then(response => {
  //     store.dispatch(searchBooklistAction("title", response.data));
  //     return response;
  //   });
}

export function deleteBook(id) {
  // return axios.delete('http://localhost:3001/booklist/' + id);
  return axios.delete('http://localhost:3001/booklist/' + id)
    .then(() => {
      store.dispatch(removeBookAction(id));
    });
}