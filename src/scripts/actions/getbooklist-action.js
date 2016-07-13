import * as dataService from '../services/booklist-service';

export function getBooklistRequest() {
	return dispatch => {
		dataService.getBooklist().then(booklist => booklist);
	}
}

