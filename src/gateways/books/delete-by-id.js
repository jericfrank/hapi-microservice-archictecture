'use strict';

const boom  = require( 'boom' );
const joi   = require( 'joi' );

const bookService = use( 'services/books' );
const log         = use( 'logger' );
const generoute   = use( 'utils/generoute' );
const genereply   = use( 'utils/genereply' );

module.exports = {
	'method' : 'DELETE',
	'path'   : '/api/books/{Id}',
	'config' : {
		'description' : 'Delete a book',
		'notes'       : 'Returns success object',
		'tags'        : [ 'api' ],

		'validate' : {
			'params' : {
				'Id' : joi.number().required().description( 'book id' )
			}
		},

		'handler' : generoute( function* ( request, reply ) {
			const id = request.params.Id;

			try {
				const response = yield bookService.deleteById( id );
				if ( !response ) {
					return reply( boom.notFound() );
				}

				return reply( genereply.success( response ) );
			} catch ( error ) {
				log.fatal( error );
				return reply( boom.badImplementation() );
			}
		} )
	}
};