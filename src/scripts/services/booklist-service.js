import axios from 'axios';
import store from '../store';
import { getBooklistAction } from '../actions/action-creator';

export function getBooklist() {
	return axios.get('http://localhost:3001/booklist')
    // .then(response => response.data);
    .then(response => {
    	store.dispatch(getBooklistAction(response.data));
			return response;
    });
}

export function deleteBook(id) {
  return axios.delete('http://localhost:3001/booklist/' + id);
}
