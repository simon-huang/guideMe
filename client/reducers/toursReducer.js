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

export function createTourReducer(state = {}, action) {
  switch(action.type) {
    case "SET_TOUR_TITLE":
      return {
        ..state,
        inCreation: {
          ..inCreation,
          title: action.title
        }
      };
    case: "SET_TOUR_IMAGE":
      return {
        ..state,
        inCreation: {
          ..inCreation,
          image: action.image
        }
      };
    case: "SET_TOUR_PRICE":
      return {
        ..state,
        inCreation: {
          ..inCreation,
          price: action.price
        }
      };
    case: "SET_TOUR_DURATION":
      return {
        ..state,
        inCreation: {
          ..inCreation,
          duration: action.duration
        }
      };
    case: "SET_TOUR_DESCRIPTION":
      return {
        ..state,
        inCreation: {
          ..inCreation,
          description: action.description
        }
      };
    default:
      return state;
  }
}
