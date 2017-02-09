import React from 'react'
import axios from 'axios'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setTourItem } from '../actions/tourActions'
import { handleItemChange } from '../helpers/changeHandlers'

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemChange = handleItemChange.bind(null, setTourItem);
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
        <SubmitButton />
      </form>
    );
  }
}

export default connect(({ inCreation }) => { return { inCreation }; })(Create);
