var Sequelize = require('sequelize');
var db = require('../index.js');
var User = require('../users/userModel.js');
var Tour = require('../tours/tourModel.js');

var Traveler_Tour = db.define('travelers_tours', {
	userId: {
		type: Sequelize.INTEGER,
		model: 'user',
		key: 'id'
	},
	tourId: {
		type: Sequelize.INTEGER,
		model: 'tour',
		key: 'id'
	}
});
// Traveler_Tour.belongsToMany(User);
// Traveler_Tour.belongsToMany(Tour);
db.sync({
	force: true
});
module.exports = Traveler_Tour;