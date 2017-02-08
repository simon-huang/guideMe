var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var db = require('../index.js');

var User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true
	},
	password: {
		type: Sequelize.STRING
	}
});

User.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

User.validatePW = function(enteredPW, storedPW) {
	return bcrypt.compareSync(enteredPW, storedPW);
};

module.exports = User;