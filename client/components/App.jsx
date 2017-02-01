import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: window.list
    };

  }

  componentDidMount() {
    axios.get('/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
        <div>
        <a href="#/tours"><h1> Hello World</h1></a>
        </div>
    )
  }
}

export default App;