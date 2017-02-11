import React from 'react';
import TourPreview from './TourPreview';

export default props => {
  if (props.tours.length === 0) {
    return (
      <div >
        <h2>None</h2>
      </div>
    );
  } 
  
  var relevantTours;
  if (props.whichTours === 'upcoming') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) >= new Date()
    )
  } else if (props.whichTours === 'past') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) < new Date()
    )
  } else if (props.whichTours === 'all') {
    relevantTours = props.tours
  }

  return (
    <div>
      {relevantTours.map(tour =>
        <TourPreview whichTours={props.whichTours} auth={props.auth} tour={tour}/>
      )}
    </div>
  );
};