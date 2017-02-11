import React from 'react'
import NavLink from './NavLink'

export default ({ tours, params }) => {
  if (tours.length === 0) {
    return (<div />);
  }

  const id = params.TourID;
  const thisTour = tours.find(elem => elem.id == id);
  const divStyle = {
    backgroundImage: 'url(' + thisTour.image + ')'
  }

  return (
    // Button doesn't do anything aside from take you to login, make sure to refactor
    <div className="container text-center ">

      <div className="space" /> 
      <h1 className="text-center">{thisTour.title}</h1>
      <div className="space" />

      <div className="center-cropped-tour col-md-6" style={divStyle} />
      <div className="space" />

      <h3>Tour guide: {thisTour.tourGuide}</h3>
      <h3>Price: {thisTour.price}</h3>
      <h3>Duration: {thisTour.duration}</h3>
      <p>{thisTour.description}</p>

      <NavLink to="/Login">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Book this experience
        </button>
      </NavLink>
    </div>
  );
}
