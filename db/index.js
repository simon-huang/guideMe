// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'guideme'
// });

// connection.connect();

// module.exports = connection;

var Sequelize = require('sequelize');
var cfg = {
	// you need to create a database in terminal with any name you like
	// and set myLocalDB as your local database name
	myLocalDB: 'guideme1', 
	myLocalDBRole: 'aishi', // change it to your local name
	myLocalDBPassword: '',
	secret: 'It is a secret',
};

var sequelize = new Sequelize(cfg.myLocalDB, cfg.myLocalDBRole, cfg.myLocalDBPassword, {
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 10,
		min: 0,
		idle: 10000
	}
});

sequelize.authenticate()
	.then(function(err) {
		console.log('connection has been establised successfully.');
	})
	.catch(function(err) {
		console.log('Unable to connect to database: ', err);
	});

module.exports = sequelize;
