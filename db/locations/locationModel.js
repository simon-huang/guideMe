var Sequelize = require('sequelize');
var db = require('../index.js');
// var Tour = require('../tours/tourModel.;js');

var Location = db.define('location', {
	address: Sequelize.STRING,
	latitude: Sequelize.FLOAT,
	longitude: Sequelize.FLOAT
});

// Location.belongsTo(Tour);
db.sync();
module.exports = Location;