var TimeTable = require('./timetableModel.js');

var timetableController = {
  /**
  * This function is add date for a tour
  * req.body should have tourId, start time, end time
  */
  post: function(req, res) {
    TimeTable.create({
        tourId: req.body.tourId, 
        start: req.body.startTime,
        end: req.body.endTime
      })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log('error in post time to timetable')
        res.sendStatus(501);
      });
  },
  getAllForOneTour: function(req, res) {
    TimeTable.findAll({tourId: req.body.tourId})
      .then(function(tours) {
        res.json(tours);
      })
      .catch(function(err) {
        res.sendStatus(404);
      });
  }
}

module.exports = timetableController;
