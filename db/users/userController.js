var User = require('./userModel.js');

var userController = {
  
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
}

module.exports = userController;
