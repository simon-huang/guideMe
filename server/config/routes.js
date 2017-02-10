// import controller from '../controllers';
import path from 'path';
<<<<<<< HEAD
import userController from '../../db/users/userController';
import tourController from '../../db/tours/tourController';
=======
//import userController from '../../db/users/userController';
//import tourController from '../../db/tours/tourController';
>>>>>>> 098b5329c0cd84617a1e0813fca173a9ebf2fa49

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

  app.get('/api/tours', controller.tours.getAll);
  app.get('/api/tours/:id', controller.tours.getOne);
  app.post('/api/tours', checkUser, controller.tours.post);
  
  app.get('/api/users/:username', controller.users.getUserForPage);
  app.get('/auth/logout', logOut);
  app.post('/auth/login', controller.users.getUserForLogin);
  app.post('/auth/signup', controller.users.post);
  
  app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}
