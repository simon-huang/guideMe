var Tour = require('../tours/tourModel.js');
var User = require('../users/userModel.js');
var Traveler_Tour = require('./traveler_tourModel.js');

var traveler_tourController = {
	/**
	* This function is for making a reservation
	* req.body should have username and tourId
	*/
	reserve: function(req, res) {
		console.log('book a tour in traveler_tourController', req.body);

		User.find({username: req.body.username})
			.then(function(user) {
				Traveler_Tour.create({
					tourId: req.body.tourId,
					userId: user.id
				})
				.then(function() {
					res.sendStatus(201);
				})
				.catch(function(err) {
					console.log('error in making a reservation');
					res.sendStatus(501);
				});
			})
			.catch(function(err) {
				res.sendStatus(404);
			});
	},
	/**
	* This function is for cancel a reservation
	* req.body should have username and tourId
	*/
	cancel: function(req, res) {
		User.find({username: req.body.username})
			.then(function(user) {
				Traveler_Tour.destroy({
					tourId: req.body.tourId,
					userId: user.id
				})
				.then(function() {
					res.sendStatus(200);
				})
				.catch(function(err) {
					console.log('error in cancel a reservation');
					res.sendStatus(501);
				});
			})
			.catch(function(err) {
				res.sendStatus(404);
			})
	}
}

module.exports = traveler_tourController;