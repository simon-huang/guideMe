import axios from 'axios';

function setTourList(tours) {
  return {
    type: "SET_TOUR_LIST",
    tours
  };
}

function setTourListWithData() {
  return (dispatch) => (
    axios.get('/tours').then(resp => dispatch(setTourList(resp.data)))
  )
}

export { setTourList, setTourListWithData };
