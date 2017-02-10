var Sequelize = require('sequelize');
var db = require('../index.js');
var User = require('../users/userModel.js');
var TimeTable = require('../timetable/timetableModel.js');
var Review = require('../reviews/reviewModel.js');
var Traveler_Tour = require('../travelers_tours/traveler_tourModel.js');

var Tour = db.define('tour', {
	title: {
		type: Sequelize.STRING,
		unique: true
	},
	image: {
		type: Sequelize.STRING,
		unique: true
	},
	price: {
		type: Sequelize.STRING
	},
	rating: {
		type: Sequelize.FLOAT
	},
	review: {
		type: Sequelize.INTEGER,
		model: 'review',
		key: 'id'
	},
	category: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.TEXT
	},
	duration: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.INTEGER,
		model: 'location',
		key: 'id'
	},
	availability: {
		type: Sequelize.INTEGER,
		model: 'timetable',
		key: 'id'
	},
});
Tour.hasMany(TimeTable);
// Tour.belongsToMany(User, {through: Traveler_Tour});
// Tour.hasMany(User, {through: Traveler_Tour});
// db.sync();

db.sync({
	force: true
})
.then(function() {
	Tour.bulkCreate([
		{
			title: 'Walking under the Golden Gate Bridge',
    		image:  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlgLESw2gqJmCdxhrITEvF0fsOnx-4MURivJHgE7BizCcvpeBeZA',
			price: '$125',
			rating: 4.5,
			review: 1,
			category: 'relaxing',
			description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh',
			duration: '2 hr',
			location: 1,
			availability: 1,
		},
		{
			title: 'Biking under the Golden Gate Bridge',
    		image:  'https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg',
			price: '$100',
			rating: 4,
			review: 2,
			category: 'relaxing',
			description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh',
			duration: '2 hr',
			location: 2,
			availability: 2,
		},
		{
			title: 'Swimming under the Golden Gate Bridge',
    		image:  'https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6b/one-of-the-most-photographed.jpg',
			price: '$100',
			rating: 4,
			review: 3,
			category: 'relaxing',
			description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh',
			duration: '2 hr',
			location: 3,
			availability: 3,
		},
		{
			title: 'Fishing under the Golden Gate Bridge',
    		image:  'https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg',
			price: '$100',
			rating: 4,
			review: 4,
			category: 'relaxing',
			description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh',
			duration: '2 hr',
			location: 4,
			availability: 4,
		}
		])
	}
)
.catch(function(err) {
	console.log(err);
});

module.exports = Tour;