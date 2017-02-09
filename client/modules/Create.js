import React from 'react'
import axios from 'axios'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import store from '../store'

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                  image: '',
                  price: '',
                  duration: '',
                  description: ''
                  };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleLinkChange(event) {
    this.setState({image: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }
  handleTimeChange(event) {
    this.setState({duration: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/tours', this.state).then((response) => {
      if (response.status === 201) {
          browserHistory.push('/AllLists');
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space">
        </div>
        <div className="space">
        </div> 
        <h1 className="text-center">
        Experience worth spreading
        </h1>
        <div className="space">
        </div>         
        <div className="form-group">
          <label className="col-sm-2 control-label">Title:</label>
          <div className="col-sm-8">
            <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Photo Link:</label>
          <div className="col-sm-8">
            <input type="text" name="link" className="form-control" value={this.state.image} onChange={this.handleLinkChange} />
          </div>
        </div>        
        <div className="form-group">
          <label className="col-sm-2 control-label">Price:</label>
          <div className="col-sm-8">
            <input type="text" name="price" className="form-control" value={this.state.price} onChange={this.handlePriceChange} />
          </div>
        </div>  
        <div className="form-group">
          <label className="col-sm-2 control-label">Time:</label>
          <div className="col-sm-8">
            <input type="text" name="time" className="form-control" value={this.state.duration} onChange={this.handleTimeChange} />
          </div>
        </div>  
        <div className="form-group">
          <label className="col-sm-2 control-label">Description:</label>
          <div className="col-sm-8">
            <textarea className="form-control" name="description" rows="3" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
          </div>
        </div>  
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" value="Submit" className="btn btn-default"/>
          </div>
        </div>        
      </form>
    );
  }
}



  // {
  //   image:  'https://i.ytimg.com/vi/fjWPyuRvWEk/hqdefault.jpg',
  //   title: 'Jump in to Golden Gate Bridge',
  //   tourGuide: 'Mark',
  //   price: '$125',
  //   time: '2 hours',
  //   rating: 5.0,
  //   numberOfReviews: 27,
  //   id: 1,
  //   description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  // },












