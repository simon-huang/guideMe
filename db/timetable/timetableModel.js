var Sequelize = require('sequelize');
var db = require('../index.js');
var Tour = require('../tours/tourModel.js');

var TimeTable = db.define('timetable', {
	start: {
		type: Sequelize.DATE
	},
	end: {
		type: Sequelize.DATE
	}
});

db.sync({
	force: true
});
module.exports = TimeTable;