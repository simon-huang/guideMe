export function toursReducer(state = [], action) {
  switch(action.type) {
    case "SET_TOUR_LIST":
      return {
        ...state,
        tours: action.tours
      };
    default:
      return state;
  }
}

var inCreationDefaults = {
  title: '',
  image: '',
  price: '',
  time: '',
  description: ''
};

export function createTourReducer(state = inCreationDefaults, action) {
  switch(action.type) {
    case "SET_TOUR_TITLE":
      return {
        ...state,
        title: action.title
      };
    case "SET_TOUR_IMAGE":
      return {
        ...state,
        image: action.image
      };
    case "SET_TOUR_PRICE":
      return {
        ...state,
        price: action.price
      };
    case "SET_TOUR_TIME":
      return {
        ...state,
        time: action.time
      };
    case "SET_TOUR_DESCRIPTION":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
