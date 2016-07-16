import _ from 'lodash';

const initialState = {
  booklist: []
}

function booklist(state = initialState, action) {
	console.log(state, action);

	switch(action.type) {
		case 'GET_BOOK_LIST':
			return Object.assign({}, state, { booklist: action.booklist });

		case 'REMOVE_BOOK':
			const newBooklist = _.filter(state.booklist, book => book.id != action.id);
			return Object.assign({}, state, { booklist: newBooklist });
	}

	return state;
}

export default booklist;