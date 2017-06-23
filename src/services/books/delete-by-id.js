'use strict';

const models    = use( 'models' );
const generoute = use( 'utils/generoute' );

const Books = models.Books;

module.exports = generoute( function* ( id ) {
	const book = yield Books.findById( id );

	if ( !book ) {
		return null;
	}

	const deleted = yield Books.destroy( {
		'where' : {
			'Id' : id
		}
	} );

	return deleted;
} );