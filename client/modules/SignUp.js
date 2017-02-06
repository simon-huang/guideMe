import React from 'react'
import axios from 'axios'
import NavLink from './NavLink'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '' ,
      user: {}
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/signup', this.state).then((response) => {
      if (response.status === 200) {
        this.setState({user: response.data[0]});
        browserHistory.push('/users/' + this.state.user.username);
      }
    });
    event.preventDefault();
  }

  render() {

    const href = "/Users/" + this.state.username;

    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space"></div>
        <div className="space"></div> 
        <h1 className="text-center">
          Sign up
        </h1>
        <div className="space">
        </div>         
        <div className="form-group">
          <label className="col-sm-2 control-label">Username:</label>
          <div className="col-sm-8">
            <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleUsername} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Password:</label>
          <div className="col-sm-8">
            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handlePassword} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
        <NavLink to={href}><input type="submit" value="Submit" className="btn btn-default"/></NavLink>
          </div>
        </div>                  
      </form>
    );
  }
}

