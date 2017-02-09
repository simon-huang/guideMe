import axios from 'axios';
import { browserHistory };

function submitLoginUser(user) {
  return dispatch => (
    axios.post('/login', user).then(resp => {
      if (resp.status === 200) {
        dispatch(assignUser(resp.data[0]));
        browserHistory.push('/users/' + resp.data[0]);
      }
    }).catch(err => {
      dispatch(assignLoginError(err));
    });
  );
}

function assignUser(user) {
  return {
    type: "LOGIN_SUCCESSFUL",
    user: user
  };
}

function assignLoginError(err) {
  return {
    type: "LOGIN_ERROR",
    err: err
  };
}
