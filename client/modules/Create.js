import React from 'react'
import axios from 'axios'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import store from '../store'
import { setTourItem } from '../actions/tourActions'
import FormComponent from './formComponent'

class Create extends React.Component {
  handleItemChange(item, event) {
    store.dispatch(setTourItem(item, event.target.value));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/tours', this.props.inCreation).then((response) => {
      if (response.status === 201) {
          browserHistory.push('/AllLists');
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space" />
        <div className="space" />
        <h1 className="text-center">Experience worth spreading</h1>
        <div className="space" />
        <FormComponent name='title' value={this.props.title} onChange={this.handleItemChange} />
        <FormComponent name='image' value={this.props.image} onChange={this.handleItemChange} />
        <FormComponent name='price' value={this.props.price} onChange={this.handleItemChange} />
        <FormComponent name='time' value={this.props.time} onChange={this.handleItemChange} />
        <FormComponent name='description' value={this.props.description} onChange={this.handleItemChange} />
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" value="Submit" className="btn btn-default"/>
          </div>
        </div>        
      </form>
    );
  }
}

export default connect(({ inCreation }) => { return { inCreation }; })(Create);
