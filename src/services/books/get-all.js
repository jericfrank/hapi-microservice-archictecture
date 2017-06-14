'use strict';

const model     = use( 'models' );
const generoute = use( 'utils/generoute' );

const Books = model.Books;

module.exports =  generoute( function* () {
	const books = yield Books.findAll({});

	return books;
} );
