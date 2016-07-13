export function addBook (id, title, author, imageUrl, description) {
	return {
		type: 'ADD_BOOK',
		id,
		title,
		author,
		imageUrl,
		description
	}
}

export function removeBook(id) {
	return {
		type: 'REMOVE_BOOK',
		id
	}
}

export function getBooklist(booklist) {
	return {
		type: GET_BOOK_LIST,
		booklist
	}
}