var Sequelize = require('sequelize');
var db = require('../index.js');
var User = require('../users/userModel.js');

var Tour = db.define('tour', {
	image: {
		type: Sequelize.STRING,
		unique: true
	},
	title: {
		type: Sequelize.STRING,
		unique: true
	},
	price: {
		type: Sequelize.STRING
	},
	rating: {
		type: Sequelize.FLOAT
	},
	numReviews: {
		type: Sequelize.INTEGER
	},
	description: {
		type: Sequelize.TEXT
	},
	duration: {
		type: Sequelize.STRING
	},
	id_Guide: {
		type: Sequelize.INTEGER,
		model: 'user',
		key: 'id'
	}
});

User.hasMany(Tour);
db.sync();
module.exports = Tour;