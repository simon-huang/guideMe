import React from 'react'
import UserInfo from './UserInfo'
import UserTimeline from './UserTimeline'
// import TourPreview from './TourPreview'
// import axios from 'axios'

//currentUser = user of page being displayed
export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // user
    if (!this.props.currentUser) {
      return (
        <h1>
          {this.props.user.username}
        </h1>
      )
    }
    console.log(this.props);
    if (!this.props.currentUser.isGuide) {
      if (this.props.user.username !== this.props.currentUser.username) {
        return (
          <div>
            <h1>
              {this.props.currentUser.username}
            </h1>

            <UserInfo currentUser={this.props.currentUser}/>

            <h2>Tours Taken</h2>
            <UserTimeline whichTours='past' auth='public' tours={this.props.currentUser.tours}/>
          </div>
        );

      } else {
        return (
          <div>
            <h1>
              {this.props.currentUser.username}
            </h1>

            <h2>Upcoming Tours</h2>
            <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUser.tours}/>

            <h2>Tours Taken</h2>
            <UserTimeline whichTours='past' auth='private' tours={this.props.currentUser.tours}/>
          </div>
        );
      } 
    } else if (this.props.currentUser.isGuide) {
        if (this.props.user.username !== this.props.currentUser.username) {
          // render "all" different tours, not all iterations
          return (
            <div>
              <h1>
                Guide {this.props.currentUser.username}
              </h1>

              <UserInfo currentUser={this.props.currentUser}/>
              <UserTimeline whichTours='all' auth='public' tours={this.props.currentUser.tours}/>

              <h2>Recent Reviews</h2>
              <span>Maybe get the latest review from each tour</span>
            </div>
          );

        } else {
          // <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUser.tours}/>
          return (
            <div>
              <h1>
                Guide {this.props.currentUser.username}
              </h1>
              <button>
              New Tour
              </button>

              <h2>Upcoming Tours</h2>
              <span>Modifiable list of upcoming tours</span>
            </div>
          );
      }
    }
  }
}