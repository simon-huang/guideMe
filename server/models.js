var db = require('../db');

module.exports = {
  tours: {
    getAll: function(callback) {
      // fetch all tours for main page (most recent 6)
      var queryStr = 'SELECT * FROM TOURS';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    getOne: function(id, callback) {
      var queryStr = 'SELECT * FROM TOURS WHERE id=' + id;
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      // create a tour for a userid for a given username

      var queryStr = `INSERT INTO TOURS ('image','title','price','rating','numReviews','description','duration','id_Guide')\
                      VALUES (${params.link}, ${params.title}, ${parseInt(params.price, 10).toFixed(2)}, 0, 0, ${params.description}, ${parseInt(params.duration, 10).toFixed(2)}, 1)`; // add each parameter value
      console.log('Query: ', queryStr);
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function(username, callback) {
      var queryStr = 'SELECT * FROM USERS WHERE username=' + username;
      db.query(queryStr, function(err, result) {
        callback(err, result);
      });
    },
    post: function(params, callback) {
      var username = params.username;
      var password = params.password;
      var queryStr = `INSERT INTO USERS ('username', 'password') VALUES (${username}, ${password})`;
      db.query(queryStr, function(err, result) {
        callback(err, result);
      });
    }
  },
  reviews: {}
}