// import controller from '../controllers';
import path from 'path';
import userController from '../../db/users/userController';
import tourController from '../../db/tours/tourController';

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
  app.get('/tours', tourController.getAll);
  app.get('/tours/:id', tourController.getOneByTitle);
  app.post('/tours', checkUser, tourController.post);
  
  app.get('/users/:username', userController.getUserForPage);
  app.get('/logout', logOut);
  app.post('/login', userController.getUserForLogin);
  app.post('/signup', userController.post);
  
  app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}
