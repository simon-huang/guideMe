import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import NavLink from './NavLink'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { submitLoginUser } from '../actions/userActions'

class LogIn extends React.Component {
  handleItemChange(item, event) {
    store.dispatch(submitLoginUser(item, event.target.value));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space"></div>
        <div className="space"></div> 
        <h1 className="text-center">
          Welcome back! Log in to your account:
        </h1>
        <div className="space">
        </div>         
        <div className="form-group">
          <FormComponent name='username' value={this.props.authFormInput.username} onChange={this.handleItemChange} />
          <FormComponent name='password' value={this.props.authFormInput.password} onChange={this.handleItemChange} />
        </div>
        <SubmitButton />
      </form>
    );
  }
}

export default connect(({ authFormInput }) => { return { authFormInput }; });
