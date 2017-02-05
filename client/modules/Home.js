import React from 'react'
import ListElement from './ListElement'
import axios from 'axios';



export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    // axios.get('/tours').then(function(response) {
    //   console.log(response.data);
    // });
    axios.get('/tours').then((response) => { this.setState({tours: response.data})});
  }


  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container jumboText">
            <h1 >Experience worth spreading</h1>
            <p >If you want special experience in San Francisco, find a local here!</p>
          </div>
        </div>
        <div className="space">
        </div>
        <div className="row">
          { this.state.tours.map((listElement)=>
            <ListElement listElement={listElement} key={listElement.id}/> 
          )}
        </div>
      </div>
    )
  }
}












window.list = [
  {
    image:  'http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000001168352_small.jpg',
    title: 'Jump in to Golden Gate Bridge',
    tourGuide: 'Mark',
    price: '$125',
    time: '2 hours',
    rating: 5.0,
    numberOfReviews: 27,
    id: 1,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://s-media-cache-ak0.pinimg.com/originals/58/3a/dd/583add86c194fa2de17ce38b88644435.jpg',
    title: 'Find a perfect girl with me in club',
    tourGuide: 'Will',
    price: '$125',
    time: '2 hours',
    rating: 3.5,
    numberOfReviews: 43,
    id: 2,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://waterworldswim.com/wp-content/uploads/2014/08/maggietidmore11.jpg',
    title: 'Swimming under the Golden Gate Bridge',
    tourGuide: 'Mark',
    price: '$125',
    time: '2 hours',
    rating: 0.2,
    numberOfReviews: 56,
    id: 3,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg',
    title: 'Visit really secret place',
    tourGuide: 'Branner',
    price: '$125',
    time: '2 hours',
    rating: 3.1,
    numberOfReviews: 13,
    id: 4,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8x_K4HtJY_cArGL5J9W8K_lp9wAkt0W1bk-8JZ_510IOjRdObdw',
    title: 'Smoke weed with me',
    tourGuide: 'Robin',
    price: '$125',
    time: '2 hours',
    rating: 4.3,
    numberOfReviews: 65,
    id: 5,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://a0.muscache.com/im/pictures/89957997-2e3f-40cb-8f0b-dcbd5626bd9c.jpg?aki_policy=large',
    title: 'Maverick Biker',
    tourGuide: 'Mark',
    price: '$125',
    time: '3 days',
    rating: 2,
    numberOfReviews: 2,
    id: 6,
    description: `We'll meet at my business, where I’ll hook you up with the bike you’ll use for the duration of our time together. I’ll introduce you to my colleagues, show you around and talk about why our business is special. From there we'll cross the elegant Vedado neighborhood to find my favorite coffee shop, Mamainés. I’ll leave you with some tips on places to ride before we reunite again. In order to get to Café Mamainé I will take you through my favorite neighborhood, El Vedado, a place that mixes history, elegance, and the vibrant energy of the "new Cuba."`
  } 
];
