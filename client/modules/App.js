import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="nav nav-pills">
          <li className="navb"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li className="navb"><NavLink to="/AllLists">AllLists</NavLink></li>
          <li className="navb"><NavLink to="/LogIn">LogIn</NavLink></li>
          <li className="navb"><NavLink to="/SignUp">SignUp</NavLink></li>
          <li className="navbar-right navb"><NavLink to="/Create">Create Your Tour</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})



//className="navbar-right"
          //<li className="navb"><NavLink to="/about">About</NavLink></li>