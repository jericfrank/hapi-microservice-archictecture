'use strict';

const boom  = require( 'boom' );

const booksService = use( 'services/books/' );
const log         = use( 'logger' );
const generoute   = use( 'utils/generoute' );

module.exports = {
	'method' : 'GET',
	'path'   : '/api/books',
	'config' : {
		'description' : 'Fetch all books',
		'notes'       : 'Returns array of object',
		'tags'        : [ 'api' ],

		'handler' : generoute( function* ( request, reply ) {
			try {
				const response = yield booksService.getAll();
				return reply( response );
			} catch ( error ) {
				log.fatal( error );
				return reply( boom.badImplementation() );
			}
		} )
	}
};