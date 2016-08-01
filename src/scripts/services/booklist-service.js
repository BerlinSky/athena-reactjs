import axios from 'axios';
import store from '../store';
import { getBooklistAction, removeBookAction, searchBooklistAction } from '../actions/action-creator';

export function getBooklist() {
	return axios.get('http://localhost:3001/booklist')
    // .then(response => response.data);
    .then(response => {
    	store.dispatch(getBooklistAction(response.data));
			return response;
    });
}

export function searchBooklist(searchTitle) {
  return axios.get('http://localhost:3001/master-booklist', {
      // params: {
      //   title: "Great Expectations"
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