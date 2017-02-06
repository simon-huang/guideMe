import React from 'react'
import axios from 'axios'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    axios.get('/logout').then((response) => {
      console.log(response);
      browserHistory.push('/');
    });
  }

  render() {

    return (
      <div className="text-center logout">
        <h1>Are you sure you want to log out?</h1>
          <button type="button" className="btn btn-primary " onClick={this.handleLogout}>Log Out </button>
          <button type="button" className="btn btn-primary ">Back to Home</button>

      </div>
    );
  }
}