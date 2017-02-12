// import React from 'react'
// import ListElement from './ListElement'

// export default props => {
//   if (props.user !== props.userWhoIsLoggedIn) {
//     return (
//       <div>
//         <h1>
//           {props.user.username}
//         </h1>

//         <h2>Recent Activity</h2>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>
//           {props.user.username}
//         </h1>

//         <h2>Upcoming Tours</h2>

//         <h2>Recent Activity</h2>
//       </div>
//     );
//   }
// }
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
    console.log('user', this.props);
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