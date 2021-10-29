import { RECEIVE_CURRENT_USER, LOGOUT } from "../actions/session_actions";


const _nullSession = {
  id: null
}

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT:
      return _nullSession;
    default:
      return state;
  }
}

export default SessionReducer;