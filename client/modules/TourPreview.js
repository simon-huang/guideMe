import React from 'react';

export default props => {
  // if public and there's a review then render with review
  console.log('this is a tour preview ', props);
  if (props.tour.review && props.auth === 'public') {
    return (
      <div>
        <strong>{props.tour.title}</strong>
        <div>Date: {new Date(props.tour.date).toLocaleDateString()}</div>
        <div>Location: {props.tour.location}</div>
        <div>Rating: {props.tour.rating}</div>

        <h4>User Review</h4>
        <div>{props.tour.review.content}</div>
        <div>User rating (not in schema yet)</div>
      </div>
    );
  } 
  // if no review, past, and private view then include button to add
  else if (props.auth === 'private' && props.whichTours === 'past') {
    return (
      <div>
        <strong>{props.tour.title}</strong>
        <div>Date: {new Date(props.tour.date).toLocaleDateString()}</div>
        <div>Location: {props.tour.location}</div>
        <div>Rating: {props.tour.rating}</div>
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
        <strong>{props.tour.title}</strong>
        <div>Date: {new Date(props.tour.date).toLocaleDateString()}</div>
        <div>Location: {props.tour.location}</div>
        <div>Rating: {props.tour.rating}</div>
        <button>
        Delete
        </button>
      </div>
    );
  }
  // if no review and public view then render without review
  return (
    <div>
      <strong>{props.tour.title}</strong>
      <div>Date: {new Date(props.tour.date).toLocaleDateString()}</div>
      <div>Location: {props.tour.location}</div>
      <div>Rating: {props.tour.rating}</div>
    </div>
  );
};
