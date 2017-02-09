import React from 'react'
import { connect } from 'react-redux'
import ListElement from './ListElement'
import store from '../store' 
import { setTourListWithData } from '../actions/tourActions'

class AllLists extends React.Component{
  componentDidMount() {
    store.dispatch(setTourListWithData());
  }

  render() {
    return (
      <div>
        <h1>Browse All Tours</h1>
        <div className="space">
        </div>
        <div className="row">
          { this.props.tours.tours ? this.props.tours.tours.map( listElement =>
            <ListElement listElement={listElement} 
              key={listElement.id}/> 
          ) : <h1>LOADING</h1>}
        </div>
      </div>
    )
  }
}

export default connect(({ tours })  => { return { tours }; })(AllLists);
