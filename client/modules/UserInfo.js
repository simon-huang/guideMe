import React from 'react';

export default props => {
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