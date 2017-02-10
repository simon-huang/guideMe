import React from 'react'
import { connect } from 'react-redux'
import ListElement from './ListElement'
import store from '../store' 
import { setTourListWithData } from '../actions/tourActions'

export default props => (
  <div>
    <h1>Browse All Tours</h1>
    <div className="space">
    </div>
    <div className="row">
      { 
        props.tours? props.tours.map( listElement =>
        <ListElement listElement={listElement} key={listElement.id}/> 
        ) : <h1>LOADING</h1> 
      }
    </div>
  </div>
)
