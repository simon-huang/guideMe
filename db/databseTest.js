import request = require('request');
import chai from 'chai';
import User = require('./users/userModel.js');
import userController = require('./users/userController.js');

var expect = chai.expect;

describe('Database functionality', function() {
	xdescribe('Users', function() {
		it('It should create a user on a post request to /singup', function(done) {
			request({
				method: 'POST',
				uri: 'http://127.0.0.1:1337/singup',
				json: {
					email: 'test@test.com',
					password: '1111',
				}
			})
			.on('response', function(res) {
				chai.expect(res.statusCode).to.equal(201);

				User.findOne({
					where: {
						email: 'test@test.com'
					}
				})
				.then(function(user) {
					chai.expect(user.email).to.equal('test@test.com');
					chai.expect(user).to.not.be.undefined;
					// user.destroy();
					done();
				})
			})
		})
	})
})
 
