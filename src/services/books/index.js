'use strict';

const getAll     = require( './get-all' );
const create     = require( './create' );
const deleteById = require( './delete-by-id' );
const updateById = require( './update-by-id' );

module.exports = {
	create,
	getAll,
	deleteById,
	updateById
};