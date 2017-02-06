var express = require('express');
var app = express();
var controller = require('./controllers');
var model = require('./models');

var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

var port = process.env.port || 1337;

app.use(express.static(__dirname + '/../public'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

passport.use(new Strategy({
  clientID: '1107265252735802',
  clientSecret: '451873427e8f870ce894b23d9c179c92',
  callbackURL: 'http://localhost:1337/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    //model.users.post({username: ?, password: ?}, function(err, user) {
    //   return cb(err, user);
    // });
    console.log('PROFILE: ', profile);
    return cb(err, profile);
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

// app.get('/*', function(req, res) {
//   res.send();
// });

app.get('/tours', controller.tours.getAll);

app.get('/tours/:id', controller.tours.getOne);

app.post('/login', controller.users.get);

app.get('/users/:username', controller.users.get);
// app.post('/login', controller.users.get);

// app.get('/login/facebook');

// app.get('/login/facebook/return');

// app.get('/users/:id');

// app.post('/tours/:id', controller.tours.post);

app.post('/tours', controller.tours.post);

app.post('/signup', controller.users.post);


app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});