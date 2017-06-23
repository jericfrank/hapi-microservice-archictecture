'use strict';

exports.register = ( server, options, next ) => {
	server.route( [
		require( './get-all' ),
		require( './create' )
	] );

	next();
};

exports.register.attributes = {
	'name'    : 'books gateway',
	'version' : '1.0.0'
};
