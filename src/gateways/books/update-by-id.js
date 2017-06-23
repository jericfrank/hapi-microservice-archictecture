'use strict';

const _    = require( 'lodash' );
const boom = require( 'boom' );

const bookService = use( 'services/books' );
const log          = use( 'logger' );
const generoute    = use( 'utils/generoute' );
const genereply    = use( 'utils/genereply' );

module.exports = {
	'method' : 'PUT',
	'path'   : '/api/books/{Id}',
	'config' : {
		'description' : 'Update a book',
		'tags'        : [ 'api' ],
		'plugins'     : {
			'hapi-swagger' : {
				'responses' : {
					'500' : { 'description' : 'The server encountered an unexpected condition' },
					'404' : { 'description' : 'The server has not found anything matching the Request' },
					'401' : { 'description' : 'The request requires user authentication' },
					'400' : { 'description' : 'Check json payload for malformed syntax or invalid args' }
				}
			}
		},

		'handler' : generoute( function* ( request, reply ) {
			try {
				const id     = request.params.Id;
				const data   = request.payload;
				
				const response = yield bookService.updateById( id, data );
				
				return reply( genereply.success( response ) ).code( 200 );
			} catch ( error ) {
				log.fatal( error );
				return reply( boom.badImplementation() );
			}
		} )
	}
};
