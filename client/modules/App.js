import React from 'react'
import NavLink from './NavLink'

export default props => (
  <div>
    <ul role="nav" className="nav nav-pills">
      <li className="navb"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      <li className="navb"><NavLink to="/AllLists">All Tours</NavLink></li>
      <li className="navb"><NavLink to="/LogIn">Log in</NavLink></li>
      <li className="navb"><NavLink to="/SignUp">Sign up</NavLink></li>
      <li className="navbar-right navb"><NavLink to="/Create">Create Tour</NavLink></li>
      <li className="navbar-right navb"><NavLink to="/Logout">Log out</NavLink></li>
    </ul>
    {props.children}
  </div>
)
