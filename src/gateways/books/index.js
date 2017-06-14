'use strict';

exports.register = ( server, options, next ) => {
	server.route( [
		require( './get-all' )
	] );

	next();
};

exports.register.attributes = {
	'name'    : 'books gateway',
	'version' : '1.0.0'
};
