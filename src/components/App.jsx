class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      url: '/'
    };

  }


  render() {
    return (
      <div> 
      <div className="main">
        <div className="row">
          <div className="col-md-3 col-md-offset-3" >
            <a href='/tour'><img src={this.state.images[0].image} /> </a>
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