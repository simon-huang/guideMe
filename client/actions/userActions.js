import axios from 'axios';
import { browserHistory } from 'react-router';

export function getUserInfo(user) {
  return dispatch => (
    axios.get('api/users/' + user.username).then(resp => {
      console.log('this is resp', resp);
      dispatch(assignUser(user));
      browserHistory.push('/users/' + user.username);
    })
  );
}

export function submitLoginUser(user) {
  return dispatch => {
    if (user.username !== '' && user.password !== '') {
      axios.post('/auth/login', user).then(resp => {
        if (resp.status === 200) {
          dispatch(getUserInfo(user));
        }
      }).catch(err => {
        dispatch(assignLoginError(err));
      });
    };
  }
}

export function submitLogout() {
  return dispatch => (
    axios.get('/auth/logout').then((response) => {
      dispatch(logoutUser());
      browserHistory.push('/');
    }).catch(err => {
      dispatch(logoutError());
    })
  );
}

export function submitSignupUser(user) {
  return dispatch => {
    if (user.username !== '' && user.password !== '') {
      axios.post('/auth/signup', user).then(resp => {
        if (resp.status === 201) {
          dispatch(assignUser(user));
          browserHistory.push('/users/' + user.username);
        }
      }).catch(err => {
        dispatch(assignLoginError());
      });
    }
  };
}


export function assignUser(user) {
  return {
    type: "LOGIN_SUCCESSFUL",
    user: user
  };
}

export function assignLoginError(err) {
  return {
    type: "LOGIN_ERROR",
    err: err
  };
}

export function logoutUser() {
  return {
    type: 'LOGOUT_SUCCESSFUL'
  };
}

export function logoutError() {
  return {
    type: "LOGOUT_ERROR",
    err: err
  };
}

export function setAuthInput(item, value) {
  var toReturn = {
    type: 'SET_AUTH_INPUT_' + item.toUpperCase(),
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}

