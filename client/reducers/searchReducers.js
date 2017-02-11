var searchDefaults = {
  title: '' 
};

export function searchReducer(state = searchDefaults, action) {
  switch(action.type) {
    case "SET_SEARCH_TITLE":
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
}
