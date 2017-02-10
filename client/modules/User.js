import React from 'react'
// import axios from 'axios'


//currentUser = user of page being displayed
export default class User extends React.Component {
  constructor(props) {
    super(props);
  }
  renderGuide() {
    if (this.props.user !== this.props.currentUser) {
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

  renderUser() {
    if (this.props.user !== this.props.currentUser) {
      return (
        <div>
          <h1>
            {this.props.currentUser.username}
          </h1>

          <UserInfo currentUser={this.props.currentUser}/>

          <h2>Tours Taken</h2>
          <UserTimeline whichTours='past' auth='public' currentUser={this.props.currentUser}/>
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
  }
}

var UserInfo = (props) => {
  // not Guide
  if (!props.currentUser.isGuide) {
    if (props.currentUser.image) {
      return (
        <div>
          <img src={props.currentUser.image} />
          <p>{props.currentUser.bio}</p>
        </div>
      );
    }
    return (
      <div>
        <p>{props.currentUser.bio}</p>
      </div>
    );
  }
  // Guide
  else {
    if (props.currentUser.image) {
      return (
        <div>
          <img src={props.currentUser.image} />
          <p>{props.currentUser.bio}</p>
          <span>Rating:</span>
        </div>
      );
    }
    return (
      <div>
        <p>{props.currentUser.bio}</p>
        <span>Rating:</span>
      </div>
    );
  }
};

var TourPreview = (props) => {
  // if public and there's a review then render with review
  if (props.tour.review && props.auth === 'public') {
    return (
      <div>
        <h2>{props.tour.name}</h2>
        <span>{props.tour.location}</span>
        <span>{props.tour.rating}</span>

        <h3>User Review</h3>
        <span>{props.tour.review.content}</span>
        <span>User rating (not in schema yet)</span>
      </div>
    );
  } 
  // if no review, past, and private view then include button to add
  else if (props.auth === 'private' && props.whichTours === 'past') {
    return (
      <div>
        <h2>{props.tour.name}</h2>
        <span>{props.tour.location}</span>
        <span>{props.tour.rating}</span>
        <button>
        Add Review
        </button>
      </div>
    );
  }
  // if upcoming and private view then include button to delete confirmation
  else if (props.auth === 'private' && props.whichTours === 'upcoming') {
    return (
      <div>
        <h2>{props.tour.name}</h2>
        <span>{props.tour.location}</span>
        <span>{props.tour.rating}</span>
        <button>
        Delete
        </button>
      </div>
    );
  }
  // if no review and public view then render without review
  return (
    <div>
      <h2>{props.tour.name}</h2>
      <span>{props.tour.location}</span>
      <span>{props.tour.rating}</span>
    </div>
  );
}

var UserTimeline = (props) => {
  if (props.tours.length === 0) {
    return (
      <div >
      <h2>None</h2>
      <div />
    );
  } 
  
  var relevantTours;
  if (props.whichTours === 'upcoming') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) >= new Date()
    );
  } else if (props.whichTours === 'past') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) < new Date()
    );
  } else if (props.whichTours === 'all') {
    relevantTours = props.tours;
  }

  return (
    <div >
      {relevantTours.map(tour =>
        <TourPreview whichTours={props.whichTours} auth={props.auth} tour={tour}>
      )}
    </div>
  );
};