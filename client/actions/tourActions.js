import axios from 'axios';

export function createTour(tour) {
  return dispatch => (
    axios.post('/api/tours', tour)
      .then(resp => {
        if (resp.status === 201) {
          dispatch(setTourListWithData());
        }
      }).catch(err => {
        dispatch(createTourError(err));
      })
  );
}

export function createTourError(err) {
  return {
    type: "CREATE_TOUR_ERROR",
    err,
  }
}

export function setTourList(tours) {
  console.log('i am setting tours');
  return {
    type: "SET_TOUR_LIST",
    tours
  };
}

export function setTourListWithData() {
  console.log('i am returning the dispatch');
  return (dispatch) => (
    axios.get('/api/tours').then(resp => dispatch(setTourList(resp.data)))
  )
}

export function setTourItem(item, value) {
  var toReturn = {
    type: 'SET_TOUR_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
