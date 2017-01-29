import React from 'react';
import App from './App.jsx';
import {render} from 'react-dom';
import BookPage from './BookPage.jsx';

class Router extends React.Component {

  constructor (props) {
    super(props);
    this.handleRouting = this.handleRouting.bind(this);
    this.state = {
      url: '/'
    };
  }

  handleRouting(path) {
    this.setState({url: '/tour'});
    console.log('handleRouting was called');
  }

  render () {
    if (this.state.url === '/') {
      return <App handleRouting={this.handleRouting} />
    } else {
      return <BookPage handleRouting={this.handleRouting} />
    }
  }
  

};

export default Router;