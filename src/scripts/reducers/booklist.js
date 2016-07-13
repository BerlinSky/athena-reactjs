const initialState = {
  booklist: []
}

function booklist(state = initialState, action) {
	console.log(state, action);

	switch(action.type) {
		case 'GET_BOOK_LIST':
			return Object.assign({}, state, { booklist: action.booklist });
	}

	return state;
}

export default booklist;