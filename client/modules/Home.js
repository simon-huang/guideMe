import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ListElement from './ListElement'
import store from '../store'
import { setTourListWithData } from '../actions/tourActions'

class Home extends React.Component{
  componentDidMount() {
    if (!this.props.tours.tours) 
      store.dispatch( setTourListWithData() );
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container jumboText">
            <h1>Experience worth spreading</h1>
            <p>If you want special experience in San Francisco, find a local here!</p>
          </div>
        </div>
        <div className="space">
        </div>
        <div className="row">
          { this.props.tours.tours ? this.props.tours.tours.map((listElement) =>
            <ListElement listElement={listElement} key={listElement.id}/>
          ) : <h1>LOADIING HERE</h1>}
        </div>
      </div>
    );
  }
}

export default connect(({ tours }) => { return { tours }; })(Home);
