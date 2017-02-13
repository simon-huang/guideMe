var userDefaults = {
  username: '',
  lookedForCurrentUserPage: false
};

export function currentUserPageReducer(state = userDefaults, action) {
  switch(action.type) {
    case "SET_CURRENT_USER_PAGE":
      return {
        ...action.currentUserPage,
        lookedForCurrentUserPage: true
      }
    default:
      return state;
  }
}
