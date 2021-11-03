export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const LOGOUT = 'LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

import * as SessionApiUtil from "../utils/session_api_util";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT,

  }
}

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  }
}

export const createNewUser = formUser => dispatch =>
  SessionApiUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
      (res) => dispatch(receiveSessionErrors(res.responseJSON)));

export const login = (formUser) => dispatch => {
  return SessionApiUtil.login(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)),
      (res) => dispatch(receiveSessionErrors(res.responseJSON)))
};

export const logout = () => dispatch => SessionApiUtil.logout()
  .then(() => dispatch(logoutCurrentUser()),
    (res) => dispatch(receiveSessionErrors(res.responseJSON)));