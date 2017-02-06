var db = require('../db');
var bcrypt = require('bcrypt');

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
      var queryStr = 'INSERT INTO tours SET ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function(params, callback) {
      console.log('inside models/users/get', params);
      var username = params.username;
      var password = params.password;

      var queryStr = 'SELECT password FROM USERS WHERE username="' + username +'"';
      db.query(queryStr, function(err, hash) {
        console.log('inside query', hash);
        if (err) {
          console.error(err);
        } else if (hash.length === 0) {
          callback(err, '404');
        } else {
          bcrypt.compare(password, hash, function(err, match) {
            console.log('inside brcrypt', match);
            callback(err, match);
          });
        }
      });
    },
    post: function(params, callback) {
      var username = params.username;
      var password = params.password;
      console.log('models/post', password);
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          console.log('hash', hash);
          var queryStr = 'INSERT INTO users SET ?';
          console.log('qs', queryStr);
          db.query(queryStr, {username: username, password: hash}, function(err, result) {
            console.log('models/post/query', hash, result);
            callback(err, result);
          });
        });
      });
    },
    check: function(params, callback) {
      var username = params.username;
      var password = params.password;

    }
  },
  reviews: {}
}