import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import booklist from './booklist';

const rootReducer = combineReducers({ 
	booklistState: booklist,
	routing: routerReducer
})

export default rootReducer;