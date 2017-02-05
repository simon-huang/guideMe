import React from 'react'

import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import AllLists from './modules/AllLists'
import LogIn from './modules/LogIn'
import SignUp from './modules/SignUp'
import Tour from './modules/Tour'
import Tours from './modules/Tour'
import Create from './modules/Create'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/Tours/:TourID" component={Tour}/>
      <Route path="/about" component={About}/>
      <Route path="/AllLists" component={AllLists}/>
      <Route path="/LogIn" component={LogIn}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/Create" component={Create}/>
    </Route>
  </Router>
), document.getElementById('app'));
