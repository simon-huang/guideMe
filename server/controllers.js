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
      console.log('inside get ONe');
      models.tours.getOne(TourId, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      var params = [req.body.name, req.body.text]; // each tour property
      console.log(req.body);
      models.tours.post(params, function(err, results) {
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
      console.log('inside users/get', req.params.username);
      var username = req.body.username;
      console.log(req.body);
      models.users.get(username, function(err, result) {
        if (err) {
          console.error(err);
        }
      res.json(result);
      });
    },
    post: function(req, res) {
      var params = [req.params.username, req.params.password];
      console.log('inside post, body:', req.body);
      models.users.post(params, function(err, result) {
        if (err) {
          console.error(err)
        }
        res.sendStatus(201);
      });
    }
  },
  reviews: {}
}