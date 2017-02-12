import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import NavLink from './NavLink'
import User from './User'
import { setTourListWithData } from '../actions/tourActions'

class App extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.tours.length === 0)
      store.dispatch(setTourListWithData());
  }

  render() {
    return (
      <div>
        <div className="container">
        <ul role="nav" className="nav nav-pills">
          <li className="navb"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li className="navb"><NavLink to="/AllLists">All Tours</NavLink></li>
          {
            this.props.user.username === '' ? 
              (<li className="navb"><NavLink to="/LogIn">Log in</NavLink></li>) : 
              (<li className="navbar-right navb"><NavLink to="/Logout">Log out</NavLink></li>) 
          }
          {
            this.props.user.username === '' ? 
              (<li className="navb"><NavLink to="/SignUp">Sign up</NavLink></li>) : ''
          }
          <li className="navbar-right navb"><NavLink to="/Create">Create Tour</NavLink></li>
        </ul>
        </div>
        <div className="main-content-container">
        { 
          this.props.tours ? 
          React.cloneElement(this.props.children, 
            {
              authFormInput: this.props.authFormInput,
              dispatch: this.props.dispatch,
              inCreation: this.props.inCreation,
              tours: this.props.tours, 
              user: this.props.user
            }
          ) : (<h1>LOADING PLEASE WAIT</h1>)
        }
        </div>

<User 
    currentUser={{username:'Simon', 
    bio: 'I am Simon. Blah Blah Blah. What a bio.', 
    isGuide: false, 
    tours: [
  {
    "id": 1,
    "image": "https://s-media-cache-ak0.pinimg.com/originals/58/3a/dd/583add86c194fa2de17ce38b88644435.jpg",
    "name": "Find a perfect girl with me in club",
    "price": "500",
    'date': '2017-01-23',
    "rating": 4.9,
    "numReviews": 120,
    "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
    "duration": "2 Days",
    "id_Guide": 2,
    'location': 'San Francisco'
  }
  ]}} user={{username:'NotSimon'}} />

        <footer className="container-fluid bg-4 text-center">
          <h5>Refactored by Aeron Ming, Simon Huang, Ai Shi</h5> 
          <p>This is a group project at Hack Reactor</p>
        </footer>
      </div>
    )
  }
}

export default connect(state => state)(App);
