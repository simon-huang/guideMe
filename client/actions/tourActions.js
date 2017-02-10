import axios from 'axios';

function createTour(tour) {
  return dispatch => (
    axios.post('/api/tours', tour)
      .then(resp => {
      })
  );
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
