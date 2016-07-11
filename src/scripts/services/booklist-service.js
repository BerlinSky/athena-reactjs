import axios from 'axios';

export function getBooklist() {
	return axios.get('http://localhost:3001/booklist')
    .then(response => response.data);
}

export function deleteBook(id) {
  return axios.delete('http://localhost:3001/booklist/' + id);
}