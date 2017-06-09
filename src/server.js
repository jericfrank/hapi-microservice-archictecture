'use strict';

const Hapi = require('hapi');

const log    = require( './logger' );
const config = require( './config' );

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    'host' : config.app.host, 
    'port' : config.app.port 
});

// Swagger API Documentation
if ( process.env.NODE_ENV !== 'production' ) {
	server.register( [
		require( 'inert' ),
		require( 'vision' ), {
		'register' : require( 'hapi-swagger' ),
		'options'  : config.swagger
	} ], err => {
		if ( err ) {
			log.warn( err, 'Unable to setup Swagger API documentation' );
		}
	} );

	server.views( {
		'engines' : { 'html' : require( 'handlebars' ) },
		'path'    : __dirname
	} );

	server.route( {
		'method'      : 'GET',
		'path'        : '/',
		'config'      : {
			'handler' : ( request, reply ) => {
				const host = request.headers.host || 'localhost:9001';
				reply.view( 'index', { host } );
			}
		}
	} );
}

// Start the server
server.register( [
	{ 'register' : require( './gateways/users' ) },
	], err => {
		if ( err ) {
			log.fatal( err, 'Unable to register plugins' );
			return;
		}

		server.start( err => {
			if ( err ) {
				log.fatal( err, 'Unable to start server' );
				return;
			}

			log.info( `Sample Project is running at: ${server.info.uri}` );
		} );
} );

module.exports = server;