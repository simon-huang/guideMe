import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import NavLink from './NavLink'
import { setTourListWithData } from '../actions/tourActions'
import { findSession } from '../actions/userActions'

class App extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.tours.length === 0)
      store.dispatch(setTourListWithData());
  }

  componentWillReceiveProps() {
    if (!this.props.user.findSessionCalled)
      this.props.dispatch(findSession());
  }

  render() {
    return this.props.user.findSessionCalled ? ( 
      <div>
        <ul role="nav" className="nav nav-pills">
          <li className="navb"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li className="navb"><NavLink to="/AllLists">All Tours</NavLink></li>
          <li className="navb"><NavLink to="/Create">Create Tour</NavLink></li>

          {
            this.props.user.username === '' ? 
              (<li className="navbar-right navb"><NavLink to="/SignUp">Sign up</NavLink></li>) : ''
          }
          {
            this.props.user.username === '' ? 
              (<li className="navbar-right navb"><NavLink to="/LogIn">Log in</NavLink></li>) : 
              (<li className="navbar-right navb"><NavLink to="/Logout">Log out</NavLink></li>) 
          }
        </ul>
        { 
          this.props.tours ? 
          React.cloneElement(this.props.children, 
            {
              authFormInput: this.props.authFormInput,
              dispatch: this.props.dispatch,
              inCreation: this.props.inCreation,
              tours: this.props.tours, 
              user: this.props.user,
              search: this.props.search
            }
          ) : (<h1>LOADING PLEASE WAIT</h1>)
        }
      </div>
    ) : (<div />)
  }
}

export default connect(state => state)(App);
