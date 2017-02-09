var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var db = require('../index.js');
var Tour = require('../tours/tourModel.js');
var Traveler_Tour = require('../travelers_tours/traveler_tourModel.js');


var User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true
	},
	password: {
		type: Sequelize.STRING
	},
	isGuide: {
		type: Sequelize.BOOLEAN
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	tel: {
		type: Sequelize.INTEGER,
		unique: true
	},
	image: {
		type: Sequelize.STRING
	},
	bio: {
		type: Sequelize.STRING
	}
});

// User.hasMany(Tour, {through: Traveler_Tour});

User.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

User.validatePW = function(enteredPW, storedPW) {
	return bcrypt.compareSync(enteredPW, storedPW);
};

module.exports = User;