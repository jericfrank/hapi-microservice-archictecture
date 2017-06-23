'use strict';

module.exports = {
	success ( data ) {
		if ( data === undefined ) throw new Error( '"data" must be defined when calling success. (genereply)' );
		return {
			'statusCode' : 200,
			'data'       : data ? data : {}
		};
	},

	created ( data ) {
		if ( data === undefined ) throw new Error( '"data" must be defined when calling created. (genereply)' );
		return {
			'statusCode' : 201,
			'data'       : data ? data : {}
		};
	}
};
