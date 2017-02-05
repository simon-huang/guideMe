var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'guideme'
});

connection.connect();

module.exports = connection;