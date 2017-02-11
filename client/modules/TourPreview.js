import React from 'react';

export default props => {
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
};
