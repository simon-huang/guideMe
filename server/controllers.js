var models = require('./models');

module.exports = {
  tours: {
    getAll: function(req, res) {
      models.tours.getAll(function(err, results) {
        if (err) {
          console.error(err);
        }
        res.json(results);
      });
    },
    getOne: function(req, res) {
      var param = req.params.id;
      models.tours.getOne(param, function(err, result) {
        if (err) {
          console.error(err);
        }
        console.log(param);
        console.log(result);
        res.json(result);
      });
    },
    post: function(req, res) {
      var params = [req.body.name, req.body.text]; // each tour property
      models.tours.post(params, function(err, results) {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      });
    }
  },
  users: {},
  reviews: {}
}