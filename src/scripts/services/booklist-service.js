import axios from 'axios';
import store from '../store';
import { getBooklistAction, removeBookAction, searchBooklistAction } from '../actions/action-creator';

export function getBooklist() {

    console.log("Here!!5");
    
  return axios.get('http://localhost:3001/booklist')
    .then(response => {
      store.dispatch(getBooklistAction(response.data));
    console.log("Here!!6");

      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function searchBooklist(searchTitle) {
  const serverUrl = "http://localhost:3001";
  let requestUrl = serverUrl + "/master-booklist";
  if (searchTitle !== "*") { 
    requestUrl += "?title=";
    requestUrl += searchTitle;
  }

  return axios.get(requestUrl, {
      // params: {
      //   // title: "Great Expectations"
      //   title: searchTitle
      // }
    })
    .then(response => {
      store.dispatch(searchBooklistAction("title", response.data));
      return response;
    });
}

export function deleteBook(id) {
  // return axios.delete('http://localhost:3001/booklist/' + id);
  return axios.delete('http://localhost:3001/booklist/' + id)
    .then(() => {
      store.dispatch(removeBookAction(id));
    });
}