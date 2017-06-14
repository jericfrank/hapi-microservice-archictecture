'use strict';

const Sequelize = require( 'sequelize' );

const env        = process.env.NODE_ENV || 'development';
const configPath = `../../config/${env}.js`;

const config    = require( configPath );
const sequelize = new Sequelize( config.database.name, config.database.username, config.database.password, config.database.options );

const db = {};

const Books = sequelize.import('Books', require('./Books'));

db[ Books.name ] = Books;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;