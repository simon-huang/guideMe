var User = require('../db/users/userModel.js');
var Tour = require('../db/tours/tourModel.js');
var Review = require('../db/reviews/reviewModel.js');

module.exports = {
  tours: {
    getAll: function(req, res) {
      Tour.findAll({})
        .then(function(tours) {
          res.json(tours);
        })
        .catch(function(err) {
          console.log('error in get all', err);
          res.sendStatus(404);
        });
    },
    getOne: function(req, res) {
      var TourId = req.params.id;
      Tour.find({title: TourId})
        .then(function(tour) {
          res.json(tour);
        })
        .catch(function(err) {
          res.sendStatus(404);
        });
    },
    post: function(req, res) {
      console.log('in post', req.body);
      Tour.create(req.body)
        .then(function() {
          res.sendStatus(201);
        })
        .catch(function(err) {
          console.error('error in post tour', err);
          res.sendStatus(501);
        });
    }
  },

  users: {
    getUserForPage: function(req, res) {
      User.find({where: {username: req.params.username}})
        .then(function(user) {
          res.json(user);
        })
        .catch(function(err) {
          res.sendStatus(404);
        });
    },
    getUserForLogin: function(req, res) {
      User.findOne({where: {username: req.body.username}})
        .then(function(user) {
          if (user && User.validatePW(req.body.password, user.password)) {
            req.session.regenerate(function() {
              req.session.user = req.body.username;
              res.send(user);
            });
          } else {
            req.status(403).send('Invalid username or password');
          }
        })
        .catch(function(err) {
          res.sendStatus(404);
        })
    },
    post: function(req, res) {
      var password = User.generateHash(req.body.password);
      User.findOrCreate({
          where: {
            username: req.body.username
          },
          defaults: {
            password: password
          }
        })
        .spread(function(user, created) {
            if (created) {
              req.session.regenerate(function() {
                req.session.user = req.body.username;
                res.sendStatus(201);
              });          
            } else {
              res.sendStatus(500);
            }
        })
        .catch(function(err) {
          res.sendStatus(500);
        });
    }    
  },
  reviews: {
    post: function(req, res) {
    }
  }
}
