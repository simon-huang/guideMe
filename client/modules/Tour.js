import React from 'react'
import axios from 'axios'
import NavLink from './NavLink'

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleTour: {}
    };
  }

  componentDidMount() {
    axios.get('/api/tours/' + this.props.params.TourID).then((response) => {
      this.setState({singleTour: response.data[0]});
    });
  }

  render() {
    if (this.state.singleTour == {}) {
      return (
        <div></div>
      );
    }
    const id = this.props.params.TourID;
    const thisTour = this.state.singleTour;
    const divStyle = {
      backgroundImage: 'url(' + thisTour.image + ')'
    }
    return (
      <div className="container text-center ">
        <div className="space">
        </div> 
        <h1 className="text-center">
          {thisTour.title}
        </h1>
        <div className="space">
        </div> 
        <div className="center-cropped-tour col-md-6" style={divStyle}>
        </div>
        <div className="space">
        </div>
        <h3>Tour guide:{thisTour.tourGuide}</h3>
        <h3>Price:{thisTour.price}</h3>
        <h3>Time:{thisTour.time}</h3>
        <p>{thisTour.description}</p>
        <NavLink to="/Login"><button type="button" className="btn btn-primary btn-lg btn-block">Book this experience</button></NavLink>
      </div>
    );
  }
}
