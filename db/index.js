var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'urmomther',
  database: 'guideme'
});

connection.connect();

module.exports = connection;
