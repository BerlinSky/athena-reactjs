export function addBookAction(id, title, author, imageUrl, description) {
	return {
		type: 'ADD_BOOK',
		id,
		title,
		author,
		imageUrl,
		description
	}
}

export function removeBookAction(id) {
	return {
		type: 'REMOVE_BOOK',
		id
	}
}

export function getBooklistAction(booklist) {
	return {
		type: 'GET_BOOK_LIST',
		booklist
	}
}

export function searchBooklistAction(title) {
	return {
		type: 'SEARCH_BOOK_LIST',
		booklist
	}
}