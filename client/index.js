import React from 'react'
import {render} from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import BookPage from './components/BookPage.jsx'
import App from './components/App.jsx'


render ( (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/tours" component={BookPage}>
      </Route>
    </Route>
  </Router>


  ), document.getElementById('root'))