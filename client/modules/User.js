import React from 'react'
import axios from 'axios'
import ListElement from './ListElement'

export default props => (
  <div className="container text-center ">
    <div className="space">
    </div> 
    <h1 className="text-center">
      Hello, {props.params.username }!
    </h1>
    <div className="space">
    </div> 
    <h2>View your tours below: </h2>
    <div className="row">
      { props.tours.map((listElement)=>
        <ListElement listElement={listElement} key={listElement.id}/> 
      )}
    </div>
  </div>
);
