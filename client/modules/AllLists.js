import React from 'react'
import ListElement from './ListElement'

export default ({ tours }) => (
  <div>
    <h1>Browse All Tours</h1>
    <div className="space">
    </div>
    <div className="row">
      { 
        tours ? tours.map( listElement =>
        <ListElement listElement={listElement} key={listElement.id}/> 
        ) : <h1>LOADING</h1> 
      }
    </div>
  </div>
)
