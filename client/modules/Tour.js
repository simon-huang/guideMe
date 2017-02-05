import React from 'react'

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.params.TourID;
    const thisTour = window.list.filter(function(tour) {
      return tour.id == id;
    })[0];
    const divStyle = {
    backgroundImage: 'url(' + thisTour.image + ')'
    }
    return (
      <div className="container text-center ">
        <div className="space">
        </div> 
        <h1 className="text-center">
        {thisTour.title}
        </h1>
        <div className="space">
        </div> 
        <div className="center-cropped-tour col-md-6" style={divStyle}>
        </div>
        <div className="space">
        </div>
        <h3>Tour guide:{thisTour.tourGuide}</h3>
        <h3>Price:{thisTour.price}</h3>
        <h3>Time:{thisTour.time}</h3>
        <p>{thisTour.description}</p>
        <button type="button" className="btn btn-primary btn-lg btn-block">Book this experience</button>
      </div>
    );
  }
}





// {
//   image:  'https://a0.muscache.com/im/pictures/89957997-2e3f-40cb-8f0b-dcbd5626bd9c.jpg?aki_policy=large',
//   title: 'Maverick Biker',
//   tourGuide: 'Mark',
//   price: '$125',
//   time: '3 days',
//   rating: 2,
//   numberOfReviews: 2,
//   id: 6,
//   description: `We'll meet at my business, where I’ll hook you up with the bike you’ll use for the duration of our time together. I’ll introduce you to my colleagues, show you around and talk about why our business is special. From there we'll cross the elegant Vedado neighborhood to find my favorite coffee shop, Mamainés. I’ll leave you with some tips on places to ride before we reunite again. In order to get to Café Mamainé I will take you through my favorite neighborhood, El Vedado, a place that mixes history, elegance, and the vibrant energy of the "new Cuba."`
// } 