import React from 'react'
import ListElement from './ListElement'

export default props =>  (
  <div>
    <div className="jumbotron">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
      </div>
    </div>
    <div className="space" />

    <div className="row">
      { props.tours.map((listElement) =>
        <ListElement listElement={listElement} key={listElement.id}/>
      )} 
    </div>
  </div>
);
