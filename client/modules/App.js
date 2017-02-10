import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import NavLink from './NavLink'
import { setTourListWithData } from '../actions/tourActions'

class App extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.tours.tours)
      store.dispatch(setTourListWithData());
  }

  render() {
    return (
      <div>
        <ul role="nav" className="nav nav-pills">
          <li className="navb"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li className="navb"><NavLink to="/AllLists">All Tours</NavLink></li>
          <li className="navb"><NavLink to="/LogIn">Log in</NavLink></li>
          <li className="navb"><NavLink to="/SignUp">Sign up</NavLink></li>
          <li className="navbar-right navb"><NavLink to="/Create">Create Tour</NavLink></li>
          <li className="navbar-right navb"><NavLink to="/Logout">Log out</NavLink></li>
        </ul>
        { 
          this.props.tours.tours ? 
          React.cloneElement(this.props.children, 
            {
              authFormInput: this.props.authFormInput,
              dispatch: this.props.dispatch,
              inCreation: this.props.inCreation,
              tours: this.props.tours.tours, 
              user: this.props.user
            }
          ) : (<h1>LOADING PLEASE WAIT</h1>)
        }
      </div>
    )
  }
}

export default connect(state => state)(App);
