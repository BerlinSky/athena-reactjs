import axios from 'axios';

export function getBooklist() {
	return axios.get('http://localhost:3001/booklist')
    .then(response => response.data);
}