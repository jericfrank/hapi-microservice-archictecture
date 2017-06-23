'use strict';

const boom = require( 'boom' );
const joi  = require( 'joi' );

const bookService = use( 'services/books/' );
const log         = use( 'logger' );
const generoute   = use( 'utils/generoute' );
const genereply   = use( 'utils/genereply' );

module.exports = {
	'method' : 'POST',
	'path'   : '/api/books',
	'config' : {
		'description' : 'Create a book',
		'notes'       : 'Returns a newly created book object',
		'tags'        : [ 'api' ],
		'response'    : {
			'schema' : joi.object().keys( {
				'statusCode' : joi.number().description( 'response status' ).example( 200 ),
				'data'       : joi.object().keys( {
					'Id'              : joi.number().required().description( 'book unique id' ),
					'Title'           : joi.string().description( 'book distinct title' ),
					'CreatedBy'       : joi.number().description( 'created by whom' ),
					'UpdatedBy'       : joi.number().description( 'updated by whom' ),
					'updated_at'      : joi.any().description( 'updated date' ),
					'created_at'      : joi.any().description( 'created date' )
				} )
			} )
		},

		'plugins' : {
			'hapi-swagger' : {
				'responses' : {
					'500' : { 'description' : 'The server encountered an unexpected condition' },
					'400' : { 'description' : 'Check json payload for malformed syntax or invalid args' }
				}
			}
		},

		'validate' : {
			'payload' : {
				'Title' : joi.string().required().description( 'title to identify the title of the book' )
			}
		},

		'handler' : generoute( function* ( request, reply ) {
			try {
				const data     = request.payload;
				const response = yield bookService.create( data );

				return reply( genereply.created( response ) ).code( 201 );
			} catch ( error ) {
				log.fatal( error );
				return reply( boom.badImplementation() );
			}
		} )
	}
};
