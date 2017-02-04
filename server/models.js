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
    getOne: function(param, callback) {
      var queryStr = 'SELECT * FROM TOURS WHERE id=' + param;
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      // create a tour for a userid for a given username
      var queryStr = '';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {},
  reviews: {}
}