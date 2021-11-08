import { RECEIVE_CURRENT_USER, UPDATE_USER_INFORMATION } from "../actions/session_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    case UPDATE_USER_INFORMATION:
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return state;
  }
}

export default UsersReducer;