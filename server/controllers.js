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
    // post: function(req, res) {
//       models.tours.post(req.body, function(err, results) {
//         if (err) {
//           console.error(err);
//           res.sendStatus(501);
//         }
//         res.sendStatus(201);
//       });
//     }
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
      console.log('req.params', req.body);
      console.log('username', req.body.username);
      console.log('password', req.body.password);
      var password = User.generateHash(req.body.password);
      console.log('hash', password);
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
              console.log('User was successfully created');  
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

/****** The following is original code from previous group ******/
// var models = require('./models');

// module.exports = {
//   tours: {
//     getAll: function(req, res) {
//       models.tours.getAll(function(err, results) {
//         if (err) {
//           console.error(err);
//         }
//         res.send(results);
//       });
//     },
//     getOne: function(req, res) {
//       var TourId = req.params.id;
//       models.tours.getOne(TourId, function(err, result) {
//         if (err) {
//           console.error(err);
//         }
//         res.json(result);
//       });
//     },
//     post: function(req, res) {
//       models.tours.post(req.body, function(err, results) {
//         if (err) {
//           console.error(err);
//           res.sendStatus(501);
//         }
//         res.sendStatus(201);
//       });
//     }
//   },
//   users: {
//     getUserForPage: function(req, res) {
//       // return user object to load their personal dashboard page, with data added to database such as tours they've taken, booked, etc;
//       var username = req.params.username;
//       models.users.get(req.params.username, function(err, result) {
//         if (err) {
//           console.error(err);
//         }
//       res.json(result);
//       });
//     },
//     getUserForLogin: function(req, res) {
//       models.users.check(req.body, function(err, result) {
//         if (err) {
//           console.error(err);
//         }
//         if (result === '404') {
//           res.sendStatus(404);
//         } else {
//           req.session.regenerate(function() {
//             req.session.user = req.body.username;
//             res.send(result);
//           });
//         }
//       });
//     },
//     post: function(req, res) {
//       models.users.post(req.body, function(err, result) {
//         if (err) {
//           console.error(err)
//           res.sendStatus(501);
//         } else {
//           req.session.regenerate(function() {
//             req.session.user = req.body.username;
//             res.sendStatus(201);
//           });
//         }
//       });
//     }
//   },
//   reviews: {}
// }