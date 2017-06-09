'use strict';

const Bunyan = require( 'bunyan' );

module.exports = Bunyan.createLogger( {
	'name'    : 'Sample Project API',
	'streams' : [ {
		'level'  : 'debug',
		'stream' : process.stdout // log INFO and above to stdout
	} ]
} );
