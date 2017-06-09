'use strict';

const boom  = require( 'boom' );

const userService = use( 'services/users/' );
const log         = use( 'logger' );
const generoute   = use( 'utils/generoute' );

module.exports = {
	'method' : 'GET',
	'path'   : '/api/users',
	'config' : {
		'description' : 'Fetch all user',
		'notes'       : 'Returns array of object',
		'tags'        : [ 'api' ],

		'handler' : generoute( function* ( request, reply ) {
			try {
				const response = yield userService.getAll();
				return reply( response );
			} catch ( error ) {
				log.fatal( error );
				return reply( boom.badImplementation() );
			}
		} )
	}
};