'use strict';

module.exports = function ( sequelize, DataTypes ) {
	const schema = sequelize.define( 'Books', {
		'Id' : {
			'type'          : DataTypes.INTEGER,
			'primaryKey'    : true,
			'field'         : 'id',
			'autoIncrement' : true
		},

		'Title' : {
			'type'  : DataTypes.STRING,
			'field' : 'title'
		},

		'CreatedBy' : {
			'type'         : DataTypes.INTEGER,
			'field'        : 'created_by',
			'defaultValue' : 0
		},

		'UpdatedBy' : {
			'type'         : DataTypes.INTEGER,
			'field'        : 'updated_by',
			'defaultValue' : 0
		}
	}, {

		// define the table's name
		'tableName' : 'books',

		// Disable the modification for table names
		// By default, sequelize will automatically
		// transform all passed model names into plural
		'freezeTableName' : true,
		'timestamps'      : true,

		'createdAt' : 'created_at',
		'updatedAt' : 'updated_at',
		'deletedAt' : 'deleted_at',

		// don't delete database entries
		// but set the newly added attribute deletedAt
		'paranoid' : true
	} );

	return schema;
};
