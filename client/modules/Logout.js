import React from 'react'
import axios from 'axios'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import store from '../store'
import { submitLogout } from '../actions/userActions'

export default class Logout extends React.Component {
  handleLogout(e) {
    e.preventDefault();
    store.dispatch(submitLogout());
  }

  render() {
    return (
      <div className="text-center logout">
        <h1>Are you sure you want to log out?</h1>
          <button type="button" className="btn btn-primary " onClick={this.handleLogout}>Log Out </button>
      </div>
    );
  }
}
