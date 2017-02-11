import React from 'react'
import ListElement from './ListElement'

export default props =>  (
  <div>
    <div className="jumbotron vertical-center">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
        <form method="get" action="search">
          <input type="text" className="form-control" id="homepage-search-input" placeholder="Search tours with local guides" />
        </form>
      </div>
    </div>

    <div className="container add-padding">

    <div className="row add-padding">
      { props.tours.map((listElement) =>
        <ListElement listElement={listElement} key={listElement.id}/>
      )} 
    </div>
  </div>
  </div>
);
