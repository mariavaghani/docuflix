import { CLEAR_PROFILE_ERRORS, RECEIVE_PROFILE_ERRORS, RECEIVE_USER_PROFILE } from "../actions/profiles_actions";

const ProfileErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return [];
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    case CLEAR_PROFILE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default ProfileErrorsReducer;