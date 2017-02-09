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
