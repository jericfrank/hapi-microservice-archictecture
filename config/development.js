'use strict';

const pack = require( '../package' );

module.exports = {
	'app' : {
		'host' : '0.0.0.0',
		'port' : process.env.APP_PORT
	},
	'swagger' : {
		'info' : {
			'title'       : 'Sample Project',
			'version'     : pack.version,
			'description' : 'Backend service for sample project microservice architecture.'
		},
		'swaggerUIPath'     : '/api/',
		'jsonPath'          : '/api/swagger.json',
		'documentationPath' : '/api/docs',
		'pathReplacements'  : [ {
			'replaceIn'   : 'groups',
			'pattern'     : /api/,
			'replacement' : ''
		} ],
		'tags' : [ {
			'name'        : 'users',
			'description' : 'User resource'
		} ]
	}
};
