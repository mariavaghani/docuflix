import { RECEIVE_SELECTED_PROFILE } from "../actions/profiles_actions";
import { RECEIVE_CURRENT_USER, LOGOUT } from "../actions/session_actions";


const _nullSession = {
  id: null,
  selectedProfile: null
}

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.currentUser.id;
      return nextState;
    case RECEIVE_SELECTED_PROFILE:
      nextState.selectedProfile = action.profileId;
      return nextState;
    case LOGOUT:
      return _nullSession;
    default:
      return state;
  }
}

export default SessionReducer;