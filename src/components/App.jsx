import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: window.list
    };

  }

  componentDidMount() {
    console.log(window.list);
    this.setState({images: window.list});
  }


  render() {
    return (
        <div>
        <h1 > Hello World</h1>
        </div>
    )
  }
}

export default App;