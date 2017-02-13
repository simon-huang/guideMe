import axios from 'axios';

export function getUser() {
  return dispatch => (
    axios.get('/api'+window.location.pathname)
      .then(resp => {
        console.log('this is the user', resp);

        if (resp.data.length > 0) 
          dispatch(assignCurrentUserPage(resp.data[0]));
      })
  );
}

export function assignCurrentUserPage(user) {
  return {
    type: "SET_CURRENT_USER_PAGE",
    currentUserPage: user
  };
}