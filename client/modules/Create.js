import React from 'react'
import axios from 'axios'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setTourItem } from '../actions/tourActions'
import { handleItemChange } from '../helpers/changeHandlers'

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, setTourItem);
  }

  //Remember to remove this and put it somewhere else
  handleSubmit(event) {
    event.preventDefault();
    axios.post('/tours', this.props).then((response) => {
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
        <FormComponent name='title' value={this.props.inCreation.title} onChange={this.handleItemChange} />
        <FormComponent name='image' value={this.props.inCreation.image} onChange={this.handleItemChange} />
        <FormComponent name='price' value={this.props.inCreation.price} onChange={this.handleItemChange} />
        <FormComponent name='time' value={this.props.inCreation.time} onChange={this.handleItemChange} />
        <FormComponent name='description' value={this.props.inCreation.description} onChange={this.handleItemChange} />
        <SubmitButton />
      </form>
    );
  }
}
