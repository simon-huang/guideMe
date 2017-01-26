class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [{
          image:  'https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg',
          title: 'Swimming under the Golden Gate Bridge',
          tourGuide: 'Mark',
          price: '$125',
          time: '2 hours',
          rating: 5.0,
          numberOfReviews: 27,
          id: 1,
          description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  }]
    };

  }

  componentDidMount() {
    this.setState({images: window.list});
  }


  render() {
    return (
      <div> 
      <div className="main">
        <div className="row">
          <div className="col-md-3 col-md-offset-3" >
           <img src={this.state.images[0].image} onClick={this.props.handleRouting} />
          </div>
          <div className="col-md-3">
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
          </div>
          <div className="col-md-3">
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-md-offset-3">
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
          </div>
          <div className="col-md-3">
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
          </div>
          <div className="col-md-3">
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
          </div>
        </div>


      </div>
    </div>
    )
  }
}

window.App = App;