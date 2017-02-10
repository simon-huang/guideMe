var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var db = require('../index.js');
var Tour = require('../tours/tourModel.js');
var Traveler_Tour = require('../travelers_tours/traveler_tourModel.js');


var User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true
	},
	password: {
		type: Sequelize.STRING
	},
	isGuide: {
		type: Sequelize.BOOLEAN
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	tel: {
		type: Sequelize.STRING,
		unique: true
	},
	image: {
		type: Sequelize.STRING
	},
	bio: {
		type: Sequelize.STRING
	}
});

// User.belongsToMany(Tour, {through: Traveler_Tour});

User.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

User.validatePW = function(enteredPW, storedPW) {
	return bcrypt.compareSync(enteredPW, storedPW);
};

// db.sync();
db.sync({
	force: true
})
.then(function() {
	User.bulkCreate([
		{
			username: 'Ai Shi',
			password: '0000',
			isGuide: 1,
			email: 'shiai8901@gmail.com',
			tel: '4803599948',
			image: '',
			bio: 'Love the weather in CA'
		},
		{
			username: 'Mona',
			password: '0000',
			isGuide: 0,
			email: 'mona@example.com',
			tel: '1234567890',
			image: '',
			bio: 'I am a cat! Meow'
		},
		{
			username: 'Ming Mou',
			password: '0000',
			isGuide: 1,
			email: 'mingmou@example.com',
			tel: '0123456789',
			image: '',
			bio: 'Love the weather in CA, too'
		}
		])
	}
)
.catch(function(err) {
	console.log(err);
});
module.exports = User;