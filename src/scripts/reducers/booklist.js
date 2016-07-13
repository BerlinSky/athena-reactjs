const initialState = {
  booklist: []
}

function booklist(state = initialState, action) {
	console.log(state, action);

	switch(action.type) {
		case 'GET_BOOK_LIST':
			return Object.assign({}, state, { booklist: action.booklist });

		case 'REMOVE_BOOK':
			return;

			// Use lodash to create a new user array without the user we want to remove
      // const newUsers = _.filter(state.users, user => user.id != action.userId);
      // return Object.assign({}, state, { users: newUsers });
	}

	return state;
}

export default booklist;