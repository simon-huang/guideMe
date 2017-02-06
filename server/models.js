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
    check: function(params, callback) {
      console.log('inside models/users/get', params);
      var username = params.username;
      var password = params.password;

      var queryStr = 'SELECT password FROM USERS WHERE username="' + username +'"';
      db.query(queryStr, function(err, hash) {
        console.log('inside query', hash[0].password);
        if (err) {
          console.error(err);
        } else if (hash[0].password.length === 0) {
          callback(err, '404');
        } else {
          bcrypt.compare(password, hash[0].password, function(err, match) {
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
    get: function(username, callback) {
      var queryStr = 'SELECT * FROM USERS WHERE username="' + username + '"';
      db.query(queryStr, function(err, user) {
        console.log('user', user[0].id);
        callback(err, user[0].id);
      });
    }
  },
  reviews: {}
}