import axios from 'axios';

function getTour(tourID) {
  return dispatch => (
    axios.get('/api/tours/' + tourID).then((response) => {
      this.setState({singleTour: response.data[0]});
    })
  )
}

function setTour(tourID) {
  
}

function setTourList(tours) {
  return {
    type: "SET_TOUR_LIST",
    tours
  };
}

function setTourListWithData() {
  return (dispatch) => (
    axios.get('/api/tours').then(resp => dispatch(setTourList(resp.data)))
  )
}

function setTourItem(item, value) {
  var toReturn = {
    type: 'SET_TOUR_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}

export { setTourList, setTourListWithData, setTourItem };
