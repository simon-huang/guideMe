var Tour = require('./tourModel.js');

var tourController = {
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
  getOneByTitle: function(req, res) {
    Tour.find({title: req.body.title})
      .then(function(tour) {
        res.json(tour);
      })
      .catch(function(err) {
        res.sendStatus(404);
      });
  }, 

  /**
  * req.body.filers should be an object 
  * such as {location: 'San Francisco', duration: '2 hours'}
  */   
  getWithFilters: function(req, res) {
    Tour.findAll({where: req.body.filers})
      .then(function(tours) {
        res.json(tours);
      })
      .catch(function(err) {
        res.sendStatus(404);
      });
  },
  post: function(req, res) {
    console.log('post a tour, req.body = ', req.body);
    Tour.create(req.body)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.error('error in post tour', err);
        res.sendStatus(501);
      });
  },

  /**
  * delete by req.body.title
  */  
  delete: function(req, res) {
    Tour.destroy({title: req.body.title})
      .then(function() {
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.error('error in delete tour', err);
        res.sendStatus(501);
      })
  }
}

module.exports = tourController;