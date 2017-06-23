'use strict';

const _   = require( 'lodash' );

const models    = use( 'models' );
const generoute = use( 'utils/generoute' );

const Books = models.Books;

module.exports = generoute( function* ( id, payload ) {
	try {
		const book = yield Books.findById( id );

		if ( !book ) {
			return book;
		}

		const updatedData = _.omit( payload, [
			'Id',
			'created_at',
			'updated_at',
			'CreatedBy',
			'UpdatedBy'
		] );

		yield Books.update( updatedData, { 'where' : { 'Id' : id } });

		const updateBook = yield Books.findById( id );

		return updateBook;
	} catch ( err ) {
		return err;
	}
} );
