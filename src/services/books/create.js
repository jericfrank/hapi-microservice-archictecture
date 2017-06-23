'use strict';

const _ = require( 'lodash' );

const model     = use( 'models' );
const generoute = use( 'utils/generoute' );

const Books = model.Books;

module.exports =  generoute( function* ( request ) {
	try {
		const books = yield Books.create( request );

		return books.toJSON();
	} catch ( error ) {
		return error;
	}
} );