'use strict';

exports.register = ( server, options, next ) => {
	server.route( [
		require( './get-all' ),
		require( './create' ),
		require( './delete-by-id' )
	] );

	next();
};

exports.register.attributes = {
	'name'    : 'books gateway',
	'version' : '1.0.0'
};
