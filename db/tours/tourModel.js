var Sequelize = require('sequelize');
var db = require('../index.js');
var User = require('../users/userModel.js');
var TimeTable = require('../timetable/timetableModel.js');
var Review = require('../reviews/reviewModel.js');
var Traveler_Tour = require('../travelers_tours/traveler_tourModel.js');

var Tour = db.define('tour', {
	title: {
		type: Sequelize.STRING,
		unique: true
	},
	image: {
		type: Sequelize.STRING,
		unique: true
	},
	price: {
		type: Sequelize.STRING
	},
	rating: {
		type: Sequelize.FLOAT
	},
	review: {
		type: Sequelize.INTEGER,
		model: 'review',
		key: 'id'
	},
	category: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.TEXT
	},
	duration: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.INTEGER,
		model: 'location',
		key: 'id'
	},
	availability: {
		type: Sequelize.INTEGER,
		model: 'timetable',
		key: 'id'
	},
});
Tour.hasMany(TimeTable);
// Tour.hasMany(User, {through: Traveler_Tour});
db.sync();
module.exports = Tour;