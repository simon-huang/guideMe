import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setAuthInput, submitSignupUser } from '../actions/userActions'
import { handleItemChange } from '../helpers/changeHandlers'

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, setAuthInput);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(submitSignupUser(this.props.authFormInput));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space" />
        <div className="space" />
        <h1 className="text-center"> Sign up </h1>
        <div className="space" />
        <div className="form-group">
          <FormComponent name='username' value={this.props.authFormInput.username} onChange={this.handleItemChange} />
          <FormComponent name='password' value={this.props.authFormInput.password} onChange={this.handleItemChange} />
        </div>
        <SubmitButton />
      </form>
    );
  }
}

export default connect(({ authFormInput }) => { return { authFormInput }; })(SignUp);
