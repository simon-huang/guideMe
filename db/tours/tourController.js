var Tour = require('./tourModel.js');
var User = require('../users/userModel.js');
var Traveler_Tour = require('../travelers_tours/traveler_tourModel.js');

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
  * this function get all tours for certain user
  * req.body.username
  */ 
  getAllForOneUser: function(req, res) {
    User.find({username: req.body.śsername})
      .then(function(user) {
        Traveler_Tour.findAll({
          userId: user.id
        })
        .then(function(queries) {
          var promises = queries.map(function(query) {
            return Tour.find({id: query.tourId});
          });
          return Promise.all(promises);
        })
        .then(function(tours) {
          res.send(tours);
          res.sendStatus(200);
        })
        .catch(function(err) {
          console.log('error in find tourId in join table');
          res.sendStatus(501);
        });
      })
      .catch(function(err) {
        console.log('error in get all tours for one user');
        res.sendStatus(501);        
      });
  },

  /**
  * get all tours for certain date
  * req.body should have startTime and endTime
  */
  getAllByDate: function(req, res) {
    TimeTable.findAll({start: req.body.startTime, end: req.body.endTime})
      .then(function(timetablequeries) {
        var promises = timetablequeries.map(function(timetablequery) {
          return Tour.findAll({id: timetablequery.tourId});
        });
        return Promise.all(promises);
      })
      .then(function(tours) {
        res.send(tours);
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.log('error in get all tours by date');
      })
  },
  /**
  * get all tours for certain date
  */

  /**
  * get all tours for certain user and replace the location_id, availability_id
  */

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