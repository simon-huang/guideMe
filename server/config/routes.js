import controller from '../controllers';
import path from 'path';

var checkUser = function(req, res, next) {
  if (!req.session) {
    res.send('Not logged in');
  } else {
    next();
  }
};

var logOut = function(req, res) {
  console.log('inside logOut');
  req.session.destroy(function() {
    res.send();
  });
};

export default function routes(app, express) {
  app.get('/tours', controller.tours.getAll);
  app.get('/tours/:id', controller.tours.getOne);
  app.post('/tours', checkUser, controller.tours.post);
  
  app.get('/users/:username', controller.users.getUserForPage);
  app.get('/logout', logOut);
  app.post('/login', controller.users.getUserForLogin);
  app.post('/signup', controller.users.post);
  
  app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}
