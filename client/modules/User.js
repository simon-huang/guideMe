import React from 'react'
import axios from 'axios'
import ListElement from './ListElement'

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: 'alison',
        password: 'alison'
      },
      tours: [
          {
            image:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8x_K4HtJY_cArGL5J9W8K_lp9wAkt0W1bk-8JZ_510IOjRdObdw',
            title: 'Swimming under the Golden Gate Bridge',
            tourGuide: 'Mark',
            price: 400,
            time: '2 hours',
            rating: 4.3,
            numberOfReviews: 65,
            id: 5,
            description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
          },
          {
            image:  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlgLESw2gqJmCdxhrITEvF0fsOnx-4MURivJHgE7BizCcvpeBeZA',
            title: 'Swimming under the Golden Gate Bridge',
            tourGuide: 'Mark',
            price: 125,
            time: '2 hours',
            rating: 2,
            numberOfReviews: 2,
            id: 6,
            description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
          } 
      ]
    };
  }

  componentDidMount() {
    console.log(this.props.params.username);
    axios.get('/users/' + this.props.params.username ).then((response) => {
      this.setState({user: response.data[0]});
    });
  }

  render() {
    if (this.state.user == {}) {
      return (
        <div></div>
      );
    }
    // const id = this.props.params.TourID;
    // const thisTour = this.state.singleTour;
    // const divStyle = {
    //   backgroundImage: 'url(' + thisTour.image + ')'
    // }
    return (

      <div className="container text-center ">
        <div className="space">
        </div> 
        <h1 className="text-center">
          Hello, {this.props.params.username }!
        </h1>
        <div className="space">
        </div> 
        <h2>View your tours below: </h2>
        <div className="row">
          { this.state.tours.map((listElement)=>
            <ListElement listElement={listElement} key={listElement.id}/> 
          )}
        </div>
      </div>
    );
  }
}