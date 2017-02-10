import React from 'react'
import ListElement from './ListElement'

export default props => {
  if (props.user !== props.userWhoIsLoggedIn) {
    return (
      <div>
        <h1>
          {props.user.username}
        </h1>

        <h2>Recent Activity</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {props.user.username}
        </h1>

        <h2>Upcoming Tours</h2>

        <h2>Recent Activity</h2>
      </div>
    );
  }
}
