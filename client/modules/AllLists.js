import React from 'react'
import ListElement from './ListElement'
import axios from 'axios'

export default class AllLists extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    axios.get('/tours').then((response) => { this.setState({tours: response.data})});
  }

  render() {
    return (
      <div>

            <h1 >Browse All Tours</h1>

        <div className="space">
        </div>
        <div className="row">
          { this.state.tours.map((listElement)=>
            <ListElement listElement={listElement} key={listElement.id}/> 
          )}
        </div>
      </div>
    )
  }
}
