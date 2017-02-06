var models = require('./models');

module.exports = {
  tours: {
    getAll: function(req, res) {
      models.tours.getAll(function(err, results) {
        if (err) {
          console.error(err);
        }
        res.send(results);
      });
    },
    getOne: function(req, res) {
      var TourId = req.params.id;
      models.tours.getOne(TourId, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      models.tours.post(req.body, function(err, results) {
        console.log('POST: ', req.body);
        if (err) {
          console.error(err);
          res.sendStatus(501);
        }
        res.sendStatus(201);
      });
    }
  },
  users: {
    get: function(req, res) {
      models.users.get(req.body.username, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      models.users.get(req.body.username, function(err, user) {
        if (err) {
          console.error(err);
        }
        if (user.username ===)
      }

      models.users.post(req.body, function(err, result) {
        if (err) {
          console.error(err)
        }
        res.sendStatus(201);
      });
    }
  },
  reviews: {}
}