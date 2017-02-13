import React from 'react'
import UserInfo from './UserInfo'
import UserTimeline from './UserTimeline'
import store from '../store'
import { getUser } from '../actions/currentUserPageActions'

export default class User extends React.Component {
  constructor(props) {
    super(props);

    store.dispatch(getUser());
  }

  render() {

    return this.props.currentUserPage.lookedForCurrentUserPage ? (
      <div>{this.props.currentUserPage.username}</div>
      ) : (<div>User does not exist</div>)

    // if (!this.props.currentUserPage.isGuide) {
    //   if (this.props.user.username !== this.props.currentUserPage.username) {
    //     return (
    //       <div>
    //         <h1>
    //           {this.props.currentUserPage.username}
    //         </h1>

    //         <UserInfo currentUserPage={this.props.currentUserPage}/>

    //         <h2>Tours Taken</h2>
    //         <UserTimeline whichTours='past' auth='public' tours={this.props.currentUserPage.tours}/>
    //       </div>
    //     );

    //   } else {
    //     return (
    //       <div>
    //         <h1>
    //           {this.props.currentUserPage.username}
    //         </h1>

    //         <h2>Upcoming Tours</h2>
    //         <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUserPage.tours}/>

    //         <h2>Tours Taken</h2>
    //         <UserTimeline whichTours='past' auth='private' tours={this.props.currentUserPage.tours}/>
    //       </div>
    //     );
    //   } 
    // } else if (this.props.currentUserPage.isGuide) {
    //     if (this.props.user.username !== this.props.currentUserPage.username) {
    //       // render "all" different tours, not all iterations
    //       return (
    //         <div>
    //           <h1>
    //             Guide {this.props.currentUserPage.username}
    //           </h1>

    //           <UserInfo currentUserPage={this.props.currentUserPage}/>
    //           <UserTimeline whichTours='all' auth='public' tours={this.props.currentUserPage.tours}/>

    //           <h2>Recent Reviews</h2>
    //           <span>Maybe get the latest review from each tour</span>
    //         </div>
    //       );

    //     } else {
    //       // <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUserPage.tours}/>
    //       return (
    //         <div>
    //           <h1>
    //             Guide {this.props.currentUserPage.username}
    //           </h1>
    //           <button>
    //           New Tour
    //           </button>

    //           <h2>Upcoming Tours</h2>
    //           <span>Modifiable list of upcoming tours</span>
    //         </div>
    //       );
    //   }
    // }
  }
}