import React from 'react';

export default props => {
  // if public and there's a review then render with review
  if (props.tour.review && props.auth === 'public') {
    return (
      <div>
        <h3>{props.tour.name}</h3>
        <h5>{props.tour.location}</h5>
        <h5>{props.tour.rating}</h5>

        <h4>User Review</h4>
        <h5>{props.tour.review.content}</h5>
        <h5>User rating (not in schema yet)</h5>
      </div>
    );
  } 
  // if no review, past, and private view then include button to add
  else if (props.auth === 'private' && props.whichTours === 'past') {
    return (
      <div>
        <h3>{props.tour.name}</h3>
        <h5>{props.tour.location}</h5>
        <h5>{props.tour.rating}</h5>
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
        <h3>{props.tour.name}</h3>
        <h5>{props.tour.location}</h5>
        <h5>{props.tour.rating}</h5>
        <button>
        Delete
        </button>
      </div>
    );
  }
  // if no review and public view then render without review
  return (
    <div>
      <h3>{props.tour.name}</h3>
      <h5>{props.tour.location}</h5>
      <h5>{props.tour.rating}</h5>
    </div>
  );
};
