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
    getUserForPage: function(req, res) {
      console.log('inside users/get', req.params.username);
      var username = req.params.username;
      models.users.get(username, function(err, result) {
        if (err) {
          console.error(err);
        }
      res.json(result);
      });
    },
    getUserForLogin: function(req, res) {
      console.log('inside users/get', req.body.username);
      models.users.get(req.body, function(err, result) {
        if (err) {
          console.error(err);
        }
        if (result === '404') {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      });
    },
    post: function(req, res) {
      var params = req.body;
      console.log('inside post, body:', params);
      models.users.post(params, function(err, result) {
        if (err) {
          console.error(err)
          res.sendStatus(501);
        }
        res.sendStatus(201);
      });
    }
  },
  reviews: {}
}